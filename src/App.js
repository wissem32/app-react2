import React, { Component } from 'react';
import sfax from './sfax.jpg';
 import './App.css';
import Chekpoint2 from './Chekpoint2/Chekpoint2.js';
import Chekpoint21 from './Chekpoint21/Chekpoint21.js';

class App extends Component {
  render() {
    const mystyle ={
      fontWeight: 'bold' ,
      color:'red' 
  }
    return (
      <div className="page">
        <div classname="box" >
          <Chekpoint2 titre="full time programme" text="tu peux developper ton produit technologie pendant l'anné scolaire si tu es etudiant ou en paralelle de ton travaille si tu es un professionnel" savoir="en savoir plus" bak="white" />
          <Chekpoint2 titre="part time programme" text="tu peux developper ton produit technologie pendant l'anné scolaire si tu es etudiant ou en paralelle de ton travaille si tu es un professionnel" savoir="en savoir plus" bak="blue" />
          <Chekpoint2 titre="Kids coding programme" text="Ce programme vise a initier les plus jeunes(8-12) a l'informatique et a la programmation sur 4 niveaux.un niveaux dure 2 mois" savoir="en savoir plus" bak="red" />
          <Chekpoint2 titre="sammer academy" text="tu peux developper ton produit technologie pendant l'anné scolaire si tu es etudiant ou en paralelle de ton travaille si tu es un professionnel" savoir="en savoir plus" bak="blue" />
        </div>
     <div className="coverimage">

       <p>300</p>

       </div>

        <div>
          <center>
          <h3 style={mystyle}>Ou se passe les session</h3>
          <p>les session se passent dans les hackerspaces de Gomycode dans les ville suivant:L'hebergement est possible dans la limite de places desponible.</p>
          </center>
        </div>
        <div>
          <Chekpoint21 name="sfax" logo="https://lepetitjournal.com/sites/default/files/styles/main_article/public/2018-06/sfax.png?itok=r78vtmro" />
          <Chekpoint21 name="sousse" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWfM0VhbsInO4c7W2NFbfxkpBkazdaC0LNOvUpkntTe_Gy6GuX" />
          <Chekpoint21 name="tunis" logo="http://kapitalis.com/tunisie/wp-content/uploads/2017/06/I-love-Tunis-Av-Bourguiba.jpg" />
        </div>
      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <div className="app">
      //       <div classname="imagebak">
      //         <Chekpoint2 titre="full time programme" text="un programme intensif de 3 mois pour devenir un developpeur fullstak js ou java" savoir="en savoir plus" bak="white" />

      //         <Chekpoint2 titre="part time programme" text="tu peux developper ton produit technologie pendant l'anné scolaire si tu es etudiant ou en paralelle de ton travaille si tu es un professionnel" savoir="en savoir plus" bak="blue" />

      //         <Chekpoint2 titre="Kids coding programme" text="Ce programme vise a initier les plus jeunes(8-12) a l'informatique et a la programmation sur 4 niveaux.un niveaux dure 2 mois" savoir="en savoir plus" bak="red" />

      //         <Chekpoint2 titre="sammer academy" text="developpe ton produit technologique pendant 3 semaines pendant l'été un experience trés riche d'apprantisage et de rencontre avec des passionnés de la technologie" savoir="en savoir plus" bak="blue" />
      //       </div>
      //       <div>
      //       <p classname="titre">Ou se passe les session</p>
      //         <p>les session se passent dans les hackerspaces de Gomycode dans les ville suivant:L'hebergement est possible dans la limite de places desponible.</p>

      //       <Chekpoint21 name="sfax" logo="https://lepetitjournal.com/sites/default/files/styles/main_article/public/2018-06/sfax.png?itok=r78vtmro" />
      //       <Chekpoint21 name="sousse" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWfM0VhbsInO4c7W2NFbfxkpBkazdaC0LNOvUpkntTe_Gy6GuX" />

      //       <Chekpoint21 name="tunis" logo="http://kapitalis.com/tunisie/wp-content/uploads/2017/06/I-love-Tunis-Av-Bourguiba.jpg" />
      //       </div>
      //     </div>
      //   </header>
      // </div>
    );
  }
}

export default App;
