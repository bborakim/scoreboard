import React from 'react';
import axios from "axios";

export class Hero extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      hero : null
    }
  }

  render() {
    return (
      this.state.hero ?
        <div>
          <div className="form-group mt-1">
            <label htmlFor="name">Name:</label>
            <p className="form-control form-control-sm" id="name">{this.state.hero.name}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="email">Email Address:</label>
            <p className="form-control form-control-sm" id="email">{this.state.hero.email}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="sex">Sex:</label>
            <p className="form-control form-control-sm" id="sex">{this.state.hero.sex}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="country">Country:</label>
            <p className="form-control form-control-sm" id="country">{this.state.hero.country}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="power">Power:</label>
            <p className="form-control form-control-sm" id="power">{this.state.hero.power}</p>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="power">Photo:</label>
            {
              this.state.hero.photo ? <img src={this.state.hero.photo} alt={this.state.hero.name}></img> : ''
            }
          </div>
        </div>
        :
        ''
    );
  }

  componentDidMount(){
    // axios.get(`http://eastflag.co.kr:8080/api/hero/1`)
    //   .then(response => this.setState({hero: response.data}));
    this.getHero(this.props.match.params.hero_id);
  }

  getHero = async (hero_id) => {
   const response = await axios.get(`http://eastflag.co.kr:8080/api/hero/${hero_id}`);
   this.setState({hero:response.data});
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log(nextProps,nextContext );
  }
}
