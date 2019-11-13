import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import jeanne from './jeanne.png';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA




class Boutons extends React.Component{
	

	render(){
	
		return (
		<div className="3_btn">
		<p className="fb">Facebook</p>
			<button class btn_nom> Jeanne </button>
			<button class btn_nom> Martine </button>
			<button class btn_nom> Claude </button>
		</div>
		);

	}

}

class Profil extends React.Component{

	render(){
		return (
			<div class="profil">
			
			<img src="jeanne.jpg" alt="Jeanne"/>
			<p class="Nom">Jeanne</p>
			<p class="prenom">Dupont</p>
			<p class="date">1er Juin 1966</p>
			<h2>Dernière publication</h2>
			<p>enant compte de leurs interactions. Cet ensemble, qui contient les êtres vivants, leur milieu de vie et les relations qu'ils entretiennent, forme un écosystème. </p>
			</div>

		);
	}
}

class FaceB extends React.Component {
	render() {
		return(
			<div className="navig">
			<Boutons />
			<Profil/>
			</div>
		);
	}
}
//
ReactDOM.render(
  <FaceB />,
  document.getElementById('root')
);

