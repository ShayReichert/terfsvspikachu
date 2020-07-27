import React, { Component } from 'react';
import '../App.css';
import jkrowling from '../img/jk.png';


class JkRowlingPresent extends Component {

    state = {
        bg: ""
    }
    

    handleClick = () => {
        this.setState({
            bg: 'bg-danger'
        })
    }

    render() {

        if(this.state.bg === 'bg-danger') {
            throw new Error();
        }

        return (
            <div className={`col ${this.state.bg}`}>
                <img onClick={this.handleClick} width="250px" src={jkrowling} alt="jkrowling" />
            </div>
        )

    }


}

export default JkRowlingPresent;

