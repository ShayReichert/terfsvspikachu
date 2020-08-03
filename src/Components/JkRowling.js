import React, { Component } from 'react';
import CountHits from './CountHits';
import '../App.css';
import jkrowling from '../img/jk.png';
import vagina from '../img/vaginapenis.gif';


class JkRowling extends Component {

    // MANAGE vagina-penis (terf attack)
    state = {
        vaginaOnOff: "hide-vagina"
    }

    handleOnClickJK = () => {
        this.props.addOneHit();
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

        const { attack, hocState, life, jktweet, handleKill, isStephenKiller } = this.props;

        // K.O array display
        const lifeValue = life > 0 ? (<td>{life} %</td>)
            : (<td> <span className="badge badge-danger">K.O !</span></td>);

        // K.O button display
        const button = life > 0 ? (<button onClick={this.handleOnClickJK} className="btn btn-info m-3"> {attack} Attack</button>)
            : (<button className="btn btn-danger m-3 disabled" id="btn-fixed">K.O</button>);

        // Stephen button (if Pikachu kills JK, don't display this button)
        const helpSteven = life < 20 && life > 0 ? (<button onClick={handleKill} className="btn btn-danger m-1">Help Me Steven King!</button>) 
        : (life <= 0 && isStephenKiller) && (<button className="btn btn-secondary m-1 disabled">'Trans women are women'</button>);

        // When K.O, tweet text disapear
        const tweetText = life > 0 && (<div className="jk-tweet"> <span>{jktweet}</span> </div>);

        // When K.O, JK disapear Animation
        const image = life > 0 ? (<img width="230px" src={jkrowling} alt="jkrowling" />)
            : (<img className="ko-animation-origin ko-animation" width="230px" src={jkrowling} alt="jkrowling" />);

        return (
            <div className="col d-flex flex-column align-items-center">
                <h1 id="h1-terfs">Terfs</h1>
                {/* Vagina-Penis.gif (when JK Rowling is attacking) : */}
                <img id="vagina-id" className={this.state.vaginaOnOff}  src={vagina} alt="vagina" />

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

export default CountHits(JkRowling);

