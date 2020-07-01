import React from 'react';
import './App.css';
import {FaHome, FaStar} from 'react-icons/fa';


class Menu extends React.Component{
    render(){
        return(
            <div className="menu"> 
          <div className="icon"><FaHome/></div>
          <div className="power-plant">Power Plant</div> 
          <div className="menu-nav"><span className="new-to-review">New For Review</span><span className="asset">3</span></div>
          <ul className="menu-list">
          <li className="menu-list-items">
          <div>
            <div className="star"><FaStar className="fa"/></div>
            <div className="heading"><ul class="breadcrumbMenu">
            <li><a href="#boilerplate">Boiler Room 2</a></li>
            <li><a href="#pump5">Pump 5</a></li>
            </ul></div>
            <div><span className="dot"></span><span className="text">Cooling fluid reservoir</span></div>
            <div className="flag">
            <img className="" src={require('./flag.png')} style={{width:"9px", marginLeft: "5px"}}/>
            <span className="po" style={{width:"9px", paddingLeft: "5px"}}>PO</span>
            </div>
          </div>
          </li>
          <li className="activeMenu">
          <div>
            <div className="star"><FaStar className="fa"/></div>
            <div className="heading"><ul class="breadcrumbMenu">
            <li><a href="#boilerplate">Boiler Room 2</a></li>
            <li><a href="#pump5">Pump 5</a></li>
            </ul></div>
            <div><span className="dot"></span><span className="text">Cooling fluid reservoir</span></div>
            <div className="flag">
            <img className="" src={require('./flag.png')} style={{width:"9px", marginLeft: "5px"}}/>
            <span className="po" style={{width:"9px", paddingLeft: "5px"}}>PO</span>
            </div>
          </div>
          </li>
          <li className="menu-list-items">
          <div>
          <div className="star"><FaStar className="fa"/></div>
          <div className="heading"><ul class="breadcrumbMenu">
            <li><a href="#boilerplate">Boiler Room 2</a></li>
            <li><a href="#pump5">Pump 5</a></li>
            </ul></div>
            <div><span className="dot"></span><span className="text">Cooling fluid reservoir</span></div>
            <div className="flag">
            <img className="" src={require('./flag.png')} style={{width:"9px", marginLeft: "5px"}}/>
            <span className="po" style={{width:"9px", paddingLeft: "5px"}}>PO</span>
            </div>
          </div>
          </li>
          <li className="menu-list-items">
          <div>
          <div className="star"><FaStar className="fa"/></div>
          <div className="heading"><ul class="breadcrumbMenu">
            <li><a href="#boilerplate">Boiler Room 2</a></li>
            <li><a href="#pump5">Pump 5</a></li>
            </ul></div>
            <div><span className="dot"></span><span className="text">Cooling fluid reservoir</span></div>
            <div className="flag">
            <img className="" src={require('./flag.png')} style={{width:"9px", marginLeft: "5px"}}/>
            <span className="po" style={{width:"9px", paddingLeft: "5px"}}>PO</span>
            </div>
          </div>
          </li>
          </ul>
        </div>

        );
    }
}

export default Menu;
