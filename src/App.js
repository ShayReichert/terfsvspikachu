import React, { Component } from 'react';
import './App.css';
import Pikachu from './Pikachu';
import JkRowling from './JkRowling';
import jsonTweets from './selectCharacter/tweets.json';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pikachu: 100,
      jkrowling: 100,
      jkTweet: "Good evening Pikachu",
      pikachuTweet: "Hi Johanne"
    }
  }

  //Generate a random numb for json files
  randomNumb = () => {
    return Math.floor(Math.random() * (jsonTweets.pikachu.length - 1));
  }

  reduceLife = (param) => {
    if (param === 'Pikachu') {
      this.setState({
        jkrowling: this.state.jkrowling - Math.floor(Math.random() * (15 - 5) + 5),
        pikachuTweet: jsonTweets.pikachu[this.randomNumb()].tweet
      })

    } else {
      this.setState({
        pikachu: this.state.pikachu - Math.floor(Math.random() * (12 - 5) + 5),
        jkTweet: jsonTweets.jkrowling[this.randomNumb()].tweet
      })
    }
  }

  render() {

    return (
      <div className="container text-center">
        <h1>Les Terfs vs Pikachu</h1>
        <hr />
        <div className="row">
          <JkRowling jktweet={this.state.jkTweet} name='"dire un truc transphobe"' life={this.state.jkrowling} reduceHandler={this.reduceLife} />
          <Pikachu pikatweet={this.state.pikachuTweet} defenseName="Self-care" name='"tonnerre"' life={this.state.pikachu} reduceHandler={this.reduceLife} />
        </div>
      </div>
    );
  }

}

export default App;



////// MAP ROAD : 

// 2. Quand la vie de JK passe sous les 20pv, faire apparaître un btn "Chercher du soutien auprès de Steven King"
//    Si on clique dessus : JK est K.O 




// Idées :
// 3. Créer un bot JK Rowling, qui donne un coup après le notre, avec un temps d'attente de 1 - 2sec entre
//  chaque coup.

    // Automatique
    // Aléatoire : Donner un coup de défense ou un coup d'attaque



// 4.  Autoriser un nombre de coups max par attaque (après quoi, griser le bouton)



// 5. Réfléchir à comment créer un bouton "défense" qui nous remet un peu de vie (problème avec le countHits,
// essayer sans passer par lui ?) 
// Defense Pikachu : 
// Defense JK :




// DONE : 
// 1. À chaque attaque, faire apparaître une bulle qui affichent (aléatoirement ?):
//    JK : ses tweets 
//    Pikachu : de la pédagogie 
// - Peut-être remplacer les shut up par de la pédagogie ?
// - Relier le JSON au DOM : à chaque clique sur attaque, faire apparaître un tweet au hasard. 

  //Generate a random quotes and author from JSON file
  //   randomNumb = () => {
  //     return Math.floor(Math.random() * (jsonQuotes.quotes.length - 1));
  // }
