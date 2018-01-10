import React, { Component } from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Hello from './components/Hello';


export class App extends React.Component{
  render() {
    return (
      <Hello />
    )
  }
}
render(<App />, document.getElementById('root'));
