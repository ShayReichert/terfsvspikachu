import React, { Component } from 'react';
import './App.css';
import pikachu from './img/pikachu.png';
import countHits from './countHits';

class Pikachu extends Component {

    render() {

        const { name, hocState, life, pikatweet, addOneHit } = this.props;


        const lifeValue = life > 0 ? (<td>{life} %</td>)
            : (<td> <span className="badge badge-danger">K.O !</span></td>);

        const Button = life > 0 ? (<button onClick={addOneHit} className="btn btn-warning m-3">{name} Attack</button>)
            : (<button className="btn btn-danger m-3 disabled">K.O</button>);

        // When K.O, tweet text disapear
        const tweetText = life > 0 && (<div className="pika-tweet"> <span>{pikatweet}</span></div>);

        return (
            <div className="col d-flex flex-column align-items-center">
                <img width="250px" src={pikachu} alt="pikachu" />
                <br />
                {Button}
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

export default countHits(Pikachu);
