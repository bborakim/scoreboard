import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";

class Counter extends Component {

  static propTypes = {
    changeScore: PropTypes.func,
    index: PropTypes.number,
    score: PropTypes.number
  }

  render() {
    const {changeScore, index, score} = this.props;

    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
        <span className="counter-score">{score}</span>
        <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
      </div>
    );
  }
}

export default connect(null, {changeScore})(Counter);