import React, { Component } from 'react';
import './App.css';
import Pikachu from './Components/Pikachu';
import JkRowling from './Components/JkRowling';
import jsonTweets from './Components/tweets.json';
import Modal from './Components/Modal';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pikachu: 100,
      jkrowling: 100,
      jkTweet: "Good evening Pikachu",
      pikachuTweet: "Hi Johanne",
      isStephenKiller: false,
      showModal: true
    }
  }

  // Hide Modal
  handleHide = () => {
    this.setState({
      showModal: false
    })
  }

  //Generate a random numb for json files
  randomNumb = () => {
    return Math.floor(Math.random() * (jsonTweets.pikachu.length - 1));
  }

  // When Stephen King kill JK
  kill = () => {
    this.setState({
      jkrowling: 0,
      isStephenKiller: true
    })
  }

  // Manage Attacks
  reduceLife = (param) => {
    // console.log(param)
    switch (param) {
      case 'JkRowling' :
        this.setState({
          pikachu: this.state.pikachu - Math.floor(Math.random() * (12 - 5) + 5),
          jkTweet: jsonTweets.jkrowling[this.randomNumb()].tweet
        })
        break;
      case 'Pikachu' :
        this.setState({
          jkrowling: this.state.jkrowling - Math.floor(Math.random() * (15 - 5) + 5),
          pikachuTweet: jsonTweets.pikachu[this.randomNumb()].tweet
        })
        break;
      default:
        console.log("mmmf");
    }
    // if (param === 'JkRowling') {
    //   this.setState({
    //     pikachu: this.state.pikachu - Math.floor(Math.random() * (12 - 5) + 5),
    //     jkTweet: jsonTweets.jkrowling[this.randomNumb()].tweet
    //   })
    // } else {
    //   this.setState({
    //     jkrowling: this.state.jkrowling - Math.floor(Math.random() * (15 - 5) + 5),
    //     pikachuTweet: jsonTweets.pikachu[this.randomNumb()].tweet
    //   })
    // }
  }

  render() {
    const { pikachu, jkrowling, jkTweet, pikachuTweet, isStephenKiller } = this.state;
    const modal = this.state.showModal && (<Modal close={this.handleHide}/>)
    return (
      <div className="app-div container text-center">
        <div className="header">
          <h1>vs</h1>
        {modal}
        </div>
        <div className="row pikajk">
          <JkRowling handleKill={this.kill} jktweet={jkTweet} attack='"Say Transphobic Bullshit"' life={jkrowling} reduceHandler={this.reduceLife} isStephenKiller={isStephenKiller} />
          <Pikachu pikatweet={pikachuTweet} attack='"Thunder"' life={pikachu} reduceHandler={this.reduceLife} />
        </div>

        <footer>

          <div className="container-fluid">
            <div className="row d-flex">
              <div className="col-lg-4 col-md-4 elem">*All tweets are from JK Rowling's account.</div>
              <div className="col-lg-4 col-md-4 elem">© 2020 Shay Reichert</div>
              <div id="logos" className="col-lg-4 col-md-4 elem">
                <a href="mailto:shay.reichert@outlook.fr"><i className="fas fa-at fa-2x"></i></a>
                <a href="https://twitter.com/ShayReichert" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square fa-2x"></i></a>
                <a href="https://github.com/ShayReichert" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
              </div>
            </div>
          </div>

        </footer>


      </div>
    );
  }

}

export default App;