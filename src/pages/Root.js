import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import Scoreboard from "./scoreboard/Scoreboard";
import {Heroes} from "./Heroes";
import {Menu} from "./Menu";

// named export
export class Root extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <>
          <Menu></Menu>
          <div className="container" style={{backgroundColor: '#ffffff'}}>
          <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route path="/heroes" component={Heroes} > </Route>
          <Route path="/scoreboard" component={Scoreboard}></Route>
          </Switch>
          </div>
        </>
      </BrowserRouter>
    );
  }
};