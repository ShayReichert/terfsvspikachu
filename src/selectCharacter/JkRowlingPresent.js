import React, { Component } from 'react';
import '../App.css';
import jkrowling from '../img/jk.png';
import handleClicks from './handleClicks';


class JkRowlingPresent extends Component {

    render() {

        const { handleClick, hocState} = this.props;

        return (
            <div className={`col ${hocState.bg}`}>
                <img onClick={handleClick} width="250px" src={jkrowling} alt="jkrowling" />
            </div>
        )
    }

}

export default handleClicks(JkRowlingPresent);

