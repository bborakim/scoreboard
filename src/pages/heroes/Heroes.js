import React from 'react';
import axios from "axios";
import './Heroes.module.scss';

export class Heroes extends React.Component {
  state = {
    heroes:[]
  }
  render() {
    return (
      <div className="card-columns">
        {this.state.heroes.map(hero => (
          <div className="card" key={hero.hero_id}>
            <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                 style={{width: '100%'}} alt={hero.name}></img>
            <div className="card-body">
              <h5 className="card-title">{hero.name}</h5>
              <p className="card-text">email: {hero.email}</p>
              <p className="card-text">sex: {hero.sex}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  componentDidMount() {
    this.getHeroes();
  }

  getHeroes = async () => {
   const response =  await axios.get("http://eastflag.co.kr:8080/api/heroes");
   this.setState({heroes: response.data});
   console.log(response);
  }
};