import React, { Component } from 'react';
import './App.css';
import pikachu from './img/pikachu.png';
import foudre from './foudre.gif';
import countHits from './countHits';

class Pikachu extends Component {


    // L'éclair apparait bien, trouver un moyen de le cacher arès un délai
    state = {
        foudreOnOff: "hide-foudre"
    }
    handleOnClick = () => {
        this.props.addOneHit();
        this.triggerAnimation();
    }

    triggerAnimation = () => {
        this.setState({
            foudreOnOff: ""
        })
        // remettre le state à foudreOnOff: "hide-foudre" si possible après 1seconde
    }


    render() {
        const { name, hocState, life, pikatweet } = this.props;


        const lifeValue = life > 0 ? (<td>{life} %</td>)
            : (<td> <span className="badge badge-danger">K.O !</span></td>);

        const Button = life > 0 ? (<button onClick={this.handleOnClick} className="btn btn-warning m-3">{name} Attack</button>)
            : (<button className="btn btn-danger m-3 disabled">K.O</button>);

        // When K.O, tweet text disapear
        const tweetText = life > 0 && (<div className="pika-tweet"> <span>{pikatweet}</span></div>);

        return (
            <div className="col d-flex flex-column align-items-center">
                <img width="230px" src={pikachu} alt="pikachu" />

                {/* Eclair image : */}
                <img id="foudre-id" className={this.state.foudreOnOff} src={foudre} alt="foudre" />
                
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
