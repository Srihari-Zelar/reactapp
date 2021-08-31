import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Listemployees from './components/Listemployees';

function App() {
  return ( <Fragment>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple React App
        </p>
      </header>
    </div>
    <div className="container">
      <Input />
      <br />
      <br />
      <Listemployees />
    </div>
  </Fragment>

  );
}


export default App;