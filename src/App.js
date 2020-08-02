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



////// MAP ROAD : 
// 7. Faire un fichier texte "Documentation : Terfs vs Pikachu" qui explique mon code

// 8. Créer un repo GitHub
// Exclure le dossier selectCharacter de la mise en ligne (voir si le gitgnore à marché)
// Faire un test de Netlify pour la mise en ligne et le partage.
// Nom de domaine ?

// 9. Vérifier le contenu avec petit loup (taductions, phrases de pikachu...)
// 10 DONE


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
// Afficher le footer en bas de page sur tout format.
// MEDIAQUERIES pour grand écrans.
// Changer la police du titre h1.
// 6. Pb : Le bouton "trans women are women too" Apparait même quand pikachu fait le K.O
////////// Solution : AJout d'un state isStephenKiller, que l'on passe à true quand le btn Help me Stephen est cliqué.
// 7 Nettoyer le code. 
// 8 Favicon personnalisé et description du site etc 
// Faire un modal / popup qui explique le but du jeu
