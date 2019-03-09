import React from 'react';
import Statistics from "./Statistics";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {updateTitle} from "../redux/actions";

const Header = ({players, title, updateTitle}) => {
  // const {players, title} = props;
  return (
    <header>
      <Statistics players={players} />
      <h1 onClick={() => updateTitle('test...')}>{title}</h1>
      <Stopwatch />
    </header>
  );
};

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Scoreboard'
}

let mapStateToProps = (state) => {
  return {
    title: state.playerReducer.title
  }
}

// action을 dispatch하는 펑션을 Props로 매핑
let mapActionToProps = (dispatch) => {
  return {
    changeTitle: () => dispatch(updateTitle('test scoreboard'))
  }
}

export default connect(mapStateToProps, {updateTitle})(Header);