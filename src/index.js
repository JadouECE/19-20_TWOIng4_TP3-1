import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import jeanne from './jeanne.png';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA



class Profil extends React.Component{

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state={
			pageJ:{
				id:1,
				profil:{
				prenom:"Jeanne",
				nom:"Dupont",
				date:"1er Juin 1966",
				image:"jeanne.png"
				},
				like:0
			},

			pageM:{
				id:2,
				profil:{
				prenom:"Martine",
				nom:"Dupont",
				date:"3 Juin 1976",
				image:"loic.png"
				},
				like:0
			},
			pageC:{
				id:3,
				profil:{
				prenom:"Claude",
				nom:"Dupont",
				date:"1er Juillet 2006",
				image:"bernard.png"
				},
				like:0
			},

			pageactuel:""

		};

		this.state.pageactuel=this.state.pageJ;
	}

	handleClick = (id) => {

		if (id===1)
		{
		this.setState ({pageactuel : this.state.pageJ});
		}
		else if (id===2)
		{
		this.setState ({pageactuel : this.state.pageM});
		}
		else if (id===3)
		{
		this.setState ({pageactuel : this.state.pageC});
		}
	  
	}

	render(){
		return (
			<div class="profil">

				<div className="3_btn">
					<p className="fb">Facebook</p>
					<button className="jeanne" id={this.state.pageJ.id} onClick={this.handleClick("1")}> Jeanne </button>
					<button className="Martine" id={this.state.pageM.id} onClick={this.handleClick("2")}> Martine </button>
					<button className="Claude" id={this.state.pageC.id} onClick={this.handleClick("3")}> Claude </button>
				</div>
		
				<img src="jeanne.jpg" alt="Jeanne"/>
				<p className="Nom">{this.state.pageactuel.profil.prenom}</p>
				<p className="prenom">{this.state.pageactuel.profil.nom}</p>
				<p className="date">{this.state.pageactuel.profil.date}</p>
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

