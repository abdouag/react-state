import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Abdou Aziz Gueye',
        bio: 'Développeur Full Stack',
        imgSrc: 'https://img.freepik.com/photos-gratuite/portrait-personne-noire-americaine-levant_23-2148749586.jpg?w=1380&t=st=1683806079~exp=1683806679~hmac=e893eac895baa5cbc95b32e8fda2179ba1527b271e7ff192b566fe6d12de2269://via.placeholder.com/150',
        profession: 'Ingénieur logiciel',
      },
      show: false,
      timeSinceMount: 0,
    };
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeSinceMount: this.state.timeSinceMount + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, show, timeSinceMount } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? 'Cacher le profil' : 'Afficher le profil'}
        </button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Temps écoulé depuis le montage : {timeSinceMount} secondes</p>
      </div>
    );
  }
}

export default App;
