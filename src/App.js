import React from 'react';
import './App.css';
import Menu from './Menu.js' ;
import Header from './Header.js';
import Contents from './Contents.js';


class App extends React.Component {
  
  render(){

  return (
    <div className="App">
        <Menu/>
        <Header/>
        <Contents/>
             
    </div>
  );
  }
}

export default App;
