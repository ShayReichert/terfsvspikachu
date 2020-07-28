import React, { Component } from 'react';
import '../App.css';
import pikachu from '../img/pikachu.png';
import handleClicks from './handleClicks';

class PikachuPresent extends Component {

    render() {

        const { handleClick, hocState} = this.props;

        return (
            <div className={`col ${hocState.bg}`}>
                <img onClick={handleClick} width="250px" src={pikachu} alt="pikachu" />
            </div>
        )

    }

}

export default handleClicks(PikachuPresent);
