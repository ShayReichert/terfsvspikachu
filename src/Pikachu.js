import React, { Component } from 'react';
import pikachu from './img/pikachu.png';
import countHits from './countHits';

class Pikachu extends Component {

    render() {

        const { name, hocState, addOneHit, life, pikatweet } = this.props;

        const lifeValue = life > 0 ? (<td>{life} %</td>)
            : (<td> <span className="badge badge-danger">K.O !</span></td>);

        const Button = life > 0 ? (<button onClick={addOneHit} className="btn btn-warning m-3">Attaque {name}</button>)
            : (<button className="btn btn-danger m-3 disabled">K.O</button>);

        return (
            <div className="col">
                <img width="270px" src={pikachu} alt="pikachu" />
                <br />
                {Button}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Coups</th>
                            <th scope="col">Vie</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{hocState.hits}</td>
                            {lifeValue}
                        </tr>
                    </tbody>
                </table>

                <div className="pika-tweet"> {pikatweet} </div>

            </div>
        )
    }
}

export default countHits(Pikachu);
