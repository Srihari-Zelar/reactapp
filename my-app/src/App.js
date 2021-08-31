import React from 'react';
import logo from './logo.svg';
import './App.css';
import employeeslist from './empinfo/employeeslist';


function App(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple React App
        </p>
      </header>
      <p>{this.state.apiResponse}</p>
    </div>
  );
}
}

export default App;
