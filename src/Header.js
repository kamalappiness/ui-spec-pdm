import React from 'react';
import './App.css';
import {FaSearch, FaUser} from 'react-icons/fa';

class Header extends React.Component {
  render(){
  return (
    <div className="header">
    <ul class="breadcrumb">
     <li><a href="#powerplant">Power Plant</a></li>
     <li><a href="#boilerplate">Boiler Room 2</a></li>
     <li><a href="#pump5">Pump 5</a></li>
    </ul>
    <ul className="right-list">
    <li className="right"><a href="#search"><FaSearch/></a></li>
    <li><a href="#user"><FaUser/></a></li>
    </ul>
    <div className="title">
      <div className="webasto"><p>Webasto AirTop 2000</p></div>
      <div className="select-bar">
      <select name="components" id="components">
            <option value="component actions">Component Actions</option>
      </select>
      </div>
    </div>
    <div class="header-nav">
        <a href="#overview" >Overview</a>
        <a href="#location">Location(98)</a>
        <a href="#sensors" class="active">Sensors</a>
        <a href="#log" >Log</a>
        <a href="#related">Related</a>
    </div>
    </div>
  );
  }
}

export default Header;