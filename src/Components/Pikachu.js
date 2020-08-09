import React, { Component } from 'react';
// import countHits from './countHits';
import '../App.css';
import pikachu from '../img/pikachu.png';
import lightning from '../img/foudre.gif';

class Pikachu extends Component {

    // MANAGE LIGHTNING (foudre)
    state = {
        lightningOnOff: "hide-lightning"
    }

    handleOnClickPika = () => {
        this.props.reduceHandler();
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
        const { attack, life, pikatweet, name } = this.props;

        const lifeBarProgress = life > 0 ? (
            <div className="progress" style={{ height: "20px" }}>
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{ width: `${life}%` }} aria-valuenow={life} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            ) : ( 
            <div className="progress disabled-bar" style={{ height: "20px" }}>
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{ width: "0%" }} aria-valuenow={life} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            );

        const Button = life > 0 ? (<button onClick={this.handleOnClickPika} className="btn btn-warning m-3">{attack} Attack</button>)
            : (<button className="btn btn-danger m-3 disabled">K.O</button>);

        // When K.O, tweet text disapear
            const tweetText = life > 0 ? (<div className="pika-tweet"> <span>{pikatweet}</span></div>) : (<div className="text-ko">{name} is K.O ! <br/> Refresh to play again.</div>);

        // When K.O, Pikachu disapear Animation
        const image = life > 0 ? (<img width="230px" src={pikachu} alt="pikachu" />)
            : (<img className="ko-animation-origin ko-animation" width="230px" src={pikachu} alt="Pikachu on the right, pissed off, clenched fists." />);


        return (
            <div className="col d-flex flex-column row-pika">

                <div className="col d-flex flex-column align-items-center">
                    <h1 id="h1-pikachu">Pikachu</h1>
                    {image}
                    {/* Eclair image : */}
                    <img id="lightning-id" className={this.state.lightningOnOff} src={lightning} alt="foudre" />
                    {Button}
                </div>

                {lifeBarProgress}

                <div className="col d-flex flex-column align-items-center mt-3 ">
                    {tweetText}
                </div>

            </div>
        )
    }
}

export default Pikachu;
