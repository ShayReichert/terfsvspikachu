import React, { Component } from 'react';
import '../App.css';
import pikachu from '../img/pikachu.png';
import lightning from '../img/foudre.gif';
import CountHits from './CountHits';

class Pikachu extends Component {


    // MANAGE LIGHTNING (foudre)
    state = {
        lightningOnOff: "hide-lightning"
    }

    handleOnClickPika = () => {
        this.props.addOneHit();
        this.triggerLightningAnimation();
    }

    // onClick, show lightning
    triggerLightningAnimation = () => {
        this.setState({
            lightningOnOff: ""
        })
        // Hide lightning after 600ms
        setTimeout(() => {
            this.setState({
                lightningOnOff: "hide-lightning"
            })
        }, 600)
    }

    // (don't know if it's correctly set up) :
    componentWillUnmount() {
        clearInterval(this.setState);
    }



    render() {
        const { attack, hocState, life, pikatweet } = this.props;

        const lifeValue = life > 0 ? (<td>{life} %</td>)
            : (<td> <span className="badge badge-danger">K.O !</span></td>);

        const Button = life > 0 ? (<button onClick={this.handleOnClickPika} className="btn btn-warning m-3">{attack} Attack</button>)
            : (<button className="btn btn-danger m-3 disabled">K.O</button>);

        // When K.O, tweet text disapear
        const tweetText = life > 0 && (<div className="pika-tweet"> <span>{pikatweet}</span></div>);

        // When K.O, Pikachu disapear Animation
        const image = life > 0 ? (<img width="230px" src={pikachu} alt="pikachu" />)
            : (<img className="ko-animation-origin ko-animation" width="230px" src={pikachu} alt="pikachu" />);


        return (
            <div className="col d-flex flex-column align-items-center">
                <h1 id="h1-pikachu">Pikachu</h1>
                {image}

                {/* Eclair image : */}
                <img id="lightning-id" className={this.state.lightningOnOff} src={lightning} alt="foudre" />

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

export default CountHits(Pikachu);
