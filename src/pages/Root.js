import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Scoreboard} from "./Scoreboard";
import {Heroes} from "./Heroes";
import {Menu} from "./Menu";

// named export
export class Root extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <BrowserRouter>
        <>
          <Menu></Menu>
          <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route path="/heroes" component={Heroes} > </Route>
          <Route path="/scoreboard" component={Scoreboard}></Route>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
};