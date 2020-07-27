import React, { Component } from 'react';
import '../App.css';
import pikachu from '../img/pikachu.png';

class PikachuPresent extends Component {

    state = {
        bg: ""
    }
    

    handleClick = () => {
        this.setState({
            bg: 'bg-success'
        })
    }

    render() {

        return (
            <div className={`col ${this.state.bg}`}>
                <img onClick={this.handleClick} width="250px" src={pikachu} alt="pikachu" />
            </div>
        )

    }


}

export default PikachuPresent;
