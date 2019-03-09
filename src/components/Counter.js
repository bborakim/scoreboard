import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";
import classNames from 'classnames';

import styles from '../pages/scoreboard/Scordboard.module.css'

class Counter extends Component {

  static propTypes = {
    changeScore: PropTypes.func,
    index: PropTypes.number,
    score: PropTypes.number
  }

  render() {
    const {changeScore, index, score} = this.props;

    // let button1 = styles["counter-action"] + '' + styles.decrement;
    return (
      <div className={styles.counter}>
        <button className={classNames(styles["counter-action"], styles.decrement)} onClick={() => changeScore(index, -1)}> - </button>
        <span className={styles["counter-score"]}>{score}</span>
        <button className={classNames(styles["counter-action"], styles.increment)} onClick={() => changeScore(index, 1)}> + </button>
      </div>
    );
  }
}

export default connect(null, {changeScore})(Counter);