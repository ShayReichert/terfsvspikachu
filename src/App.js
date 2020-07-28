import React, { Component } from 'react';
import './App.css';
import Pikachu from './Pikachu';
import JkRowling from './JkRowling';
import jsonTweets from './tweets.json';


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


  kill = () => {
    this.setState({
      jkrowling: 0
    })
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
    const { pikachu, jkrowling, jkTweet, pikachuTweet } = this.state;

    return (
      <div className="app-div container text-center">
        <h1>Terfs vs Pikachu</h1>
        <hr />
        <div className="row">
          <JkRowling  handleKill={this.kill} jktweet={jkTweet} name='"Say Transphobic Bullshit"' life={jkrowling} reduceHandler={this.reduceLife} />
          <Pikachu pikatweet={pikachuTweet} defenseName="Self-care" name='"Thunder"' life={pikachu} reduceHandler={this.reduceLife} />
        </div>

        <footer>

          <div className="container-fluid">
            <div className="row d-flex">
              <div className="col-lg-4 col-md-4 elem">*All tweets are from JK Rowling's account.</div>
              <div className="col-lg-4 col-md-4 elem">© 2020 Shay Reichert</div>
              <div id="logos" className="col-lg-4 col-md-4 elem">
                <a href="mailto:shay.reichert@outlook.fr"><i class="fas fa-at fa-2x"></i></a>
                <a href="https://twitter.com/ShayReichert" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter-square fa-2x"></i></a>
                <a href="https://github.com/ShayReichert" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x"></i></a>
              </div>
            </div>
          </div>

        </footer>


      </div>
    );
  }

}

export default App;



////// MAP ROAD : 


// 6. Pb : Le bouton "trans women are women too" Apparait même quand pikachu fait le K.O




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


// A FAIRE QUAND J'AURAIS LE SKILL :
// 3. Ajouter des petits effets d'animations 
// persos qui clignotent quand attaqué, perso qui s'avance pour attaquer, DURE À FAIRE POUR L'INSTANT





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



// 2. Quand la vie de JK passe sous les 20pv, faire apparaître un btn "Chercher du soutien auprès de Steven King"
//    Si on clique dessus : JK est K.O 


// 3. jkrowlng qui disparait de plus en plus
//// 4. Ajouter un * : "source : JK Rowling's twitter account".
// 5. Améliorer l'affichage des tweets (réduire la place occuper par le tableau ?) 