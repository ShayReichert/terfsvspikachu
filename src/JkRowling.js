import React, { Component } from 'react';
import './App.css';
import jkrowling from './img/jk.png';
import countHits from './countHits';


class JkRowling extends Component {



    render() {

        const { name, hocState, addOneHit, life, jktweet, handleKill } = this.props;

        // K.O array display
        const lifeValue = life > 0 ? (<td>{life} %</td>)
            : (<td> <span className="badge badge-danger">K.O !</span></td>);

        // K.O button display
        const button = life > 0 ? (<button onClick={addOneHit} className="btn btn-info m-3"> {name} Attack</button>)
            : (<button className="btn btn-danger m-3 disabled" id="btn-fixed">K.O</button>);

        // Stephen button
        const helpSteven = life < 20 && life > 0 ? (<button onClick={handleKill} className="btn btn-danger m-1">Help Me Steven King!</button>) :
            life <= 0 && (<button className="btn btn-secondary m-1 disabled">'Trans women are women'</button>);

        // When K.O, tweet text disapear
        const tweetText = life > 0 && (<div className="jk-tweet"> <span>{jktweet}</span> </div>);

        // When K.O, JK disapear Animation
        const image = life > 0 ? (<img className="ko-animation-origin" width="230px" src={jkrowling} alt="jkrowling" />)
            : (<img className="ko-animation-origin ko-animation" width="230px" src={jkrowling} alt="jkrowling" />);

        return (
            <div className="col d-flex flex-column align-items-center">

                {image}
                {button}
                {helpSteven}

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Hits</th>
                            <th scope="col">Life</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{hocState.hits}</td>
                            {lifeValue}
                        </tr>
                    </tbody>
                </table>

                {tweetText}

            </div>
        )
    }
}

export default countHits(JkRowling);

