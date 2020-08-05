import React, { Component } from 'react';
// import countHits from './countHits';
import '../App.css';
import jkrowling from '../img/jk.png';
import vagina from '../img/vaginapenis.gif';


class JkRowling extends Component {

    // MANAGE vagina-penis (terf attack)
    state = {
        vaginaOnOff: "hide-vagina"
    }


    handleOnClickJK = () => {
        this.props.reduceHandler();
        this.triggerVaginaAnimation();
    }

    // onClick, show vagina-penis
    triggerVaginaAnimation = () => {
        this.setState({
            vaginaOnOff: ""
        })
        // Hide vagina-penis after 600ms
        setTimeout(() => {
            this.setState({
                vaginaOnOff: "hide-vagina"
            })
        }, 800)
    }

    // (don't know if it's correctly set up) :
    componentWillUnmount() {
        clearInterval(this.setState);
    }

    render() {

        const { attack, life, jktweet, handleKill, isStephenKiller, name } = this.props;

        const lifeBarProgress = life > 0 && (<div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{ width: `${life}%` }} aria-valuenow={life} aria-valuemin="0" aria-valuemax="100"></div>
        );

        // K.O button display
        const button = life > 0 ? (<button onClick={this.handleOnClickJK} className="btn btn-info m-3"> {attack} Attack</button>)
            : (<button className="btn btn-danger m-3 disabled" id="btn-fixed">K.O</button>);

        // Stephen button (if Pikachu kills JK, don't display this button)
        const helpSteven = life < 20 && life > 0 ? (<button onClick={handleKill} className="btn btn-danger m-1">Help Me Stephen King!</button>)
            : (life <= 0 && isStephenKiller) && (<button className="btn btn-secondary m-1 disabled">'Trans women are women'</button>);

        // When K.O, tweet text disapear
        const tweetText = life > 0 ? (<div className="jk-tweet"> <span>{jktweet}</span> </div>) : (<div className="text-ko">{name} is K.O ! <br/> Refresh to play again.</div>);

        // When K.O, JK disapear Animation
        const image = life > 0 ? (<img width="230px" src={jkrowling} alt="jkrowling" />)
            : (<img className="ko-animation-origin ko-animation" width="230px" src={jkrowling} alt="jkrowling" />);

        return (
            <div className="col d-flex flex-column row-jk">

                <div className="col d-flex flex-column align-items-center">
                    <h1 id="h1-terfs">Terfs</h1>
                    {/* Vagina-Penis.gif (when JK Rowling is attacking) : */}
                    <img id="vagina-id" className={this.state.vaginaOnOff} src={vagina} alt="vagina" />

                    {image}
                    <div className="buttons-jk">
                        {button}
                        {helpSteven}
                    </div>
                </div>

                <div className="progress" style={{ height: "20px" }}>
                    {lifeBarProgress}
                </div>

                <div className="col d-flex flex-column align-items-center mt-3 ">
                    {tweetText}
                </div>
            </div>
        )
    }
}

export default JkRowling;

