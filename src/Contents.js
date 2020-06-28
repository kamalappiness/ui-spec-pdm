import React from 'react';
import './App.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineMarkSeries
} from 'react-vis';



class Contents extends React.Component {

  getRandomData() {
    const randomYData = [...new Array(50)].map(() =>
      Math.round(Math.random() * 5 - 2)
    );
    return randomYData.map((val, idx) => {
      return {x: idx, y: val};
    });
  }
  
  render(){

    const firstData = this.getRandomData();
    const secondData = this.getRandomData();
    const thirdData = this.getRandomData();
    const fourthData = this.getRandomData();

  return (
    <div>
        <div className="content">
          <div className="sensors">Sensors:</div>
          <div className="component_failure">Component Failure Modes:</div>
          <div className="item1">All(98)</div>
          <span className="box" style={{left:"77px",top:"46px"}}/>
          <div className="item2">Recent Anomalies(5)</div>
          <div className="item3" style={{left:"284px",top:"44px"}}>Bearing Failure(5)</div>
          <span className="box" style={{left:"405px",top:"46px"}}/>
          <div className="item3" style={{left:"422px",top:"44px"}}>Coolong Fluid(9)</div>
          <span className="box" style={{left:"555px",top:"46px"}}/>
          <div className="item3" style={{left:"573px",top:"44px"}}>Another Failure Mode(6)</div>
    
            <div className="chart-header1">
              <div className="date">2016 Jan 08 - 2017 Jan 08</div>
              <div className="time">
                <span style={{pading:"8px"}}>1s</span>
                <span style={{pading:"8px"}}>1m</span>
                <span style={{pading:"8px"}}>1h</span>
                <span style={{pading:"8px"}}>1d</span>
                <span style={{pading:"8px"}}>1w</span>
                <span>1m</span>
                <span>3m</span>
                <span>6m</span>
                <span style={{fontWeight:"bold"}}>1y</span>
              </div>
            </div>
            <div className="chart-parent">
            <div className="chart-header2">
              <div className="y-axis-value">90</div>
              <div className="upper">UPPER THRESHOLD</div>
            </div>
            <div className="chart-header3">
            <div className="y-axis-value" style={{position:"absolute", left:"0px",top:"28px"}}>85</div>
            <div className="y-axis-value" style={{position:"absolute", left:"0px",top:"70px"}}>75</div>
              <div className="line"></div>
              <div className="line" style={{position:"absolute", left:"20px",top:"80px",display: 'flex', fill: 'none'}}></div>
              <XYPlot width={1100} height={178} style={{display:'flex', fill:'none'}}> 
          {/* <HorizontalGridLines /> */}
          {/* <VerticalGridLines /> */}
          {/* <XAxis title="X Axis" /> */}
          {/* <YAxis title="Y Axis" /> */}
          <LineMarkSeries className="first-series" data={firstData} lineStyle={{ stroke: "#47C874" }} markStyle={{ stroke: "none", fill: "none", width: "0px" }}
            curve={"curveCatmullRom.alpha(0.2)"}/>
        </XYPlot>
            </div>
            <div className="chart-header4">
              <div className="lower-threshold-gradient">70</div>
            <div className="lower">LOWER THRESHOLD</div>
            <div className="month">
              <span style={{position:"absolute", left:"5px",top:"50px"}}>2016 Jan</span>
              <span style={{position:"absolute", left:"280px",top:"50px"}}>Mar</span>
              <span style={{position:"absolute", left:"580px",top:"50px"}}>Jun</span>
              <span style={{position:"absolute", left:"880px",top:"50px"}}>Sep</span>
            </div>
            </div>
            <div className="chart-header5">
            <div className="month">
            <span style={{position:"absolute", left:"288px",top:"45px", opacity: "0.5"}}>2015</span>
            <span style={{position:"absolute", left:"673px",top:"45px"}}>2016</span>
            <span style={{position:"absolute", left:"956px",top:"45px", opacity: "0.5"}}>2017</span>
            </div>
            <XYPlot width={1100} height={80} style={{display:'flex', fill:'none'}}> 
            <LineMarkSeries className="first-series" data={secondData} lineStyle={{ stroke: "#47C874" }} markStyle={{ stroke: "none", fill: "none", width: "0px" }}
            curve={"curveCatmullRom"}/>
            <LineMarkSeries className="first-series" data={thirdData} lineStyle={{ stroke: "#026FB5" }} markStyle={{ stroke: "none", fill: "none", width: "0px" }}
            curve={"curveCatmullRom"}/>
            <LineMarkSeries className="first-series" data={fourthData} lineStyle={{ stroke: "#249A95" }} markStyle={{ stroke: "none", fill: "none", width: "0px" }}
            curve={"curveCatmullRom"}/>
            </XYPlot>
            <div className="mask1"></div>
            <div className="mask2"></div>            
            <div className="verticle-line" style={{position:"absolute", left:"282px",top:"0px", height:'60px'}}/>
            <div className="verticle-line" style={{position:"absolute", left:"652px",top:"0px", height:'60px'}}/>
            <div className="verticle-line" style={{position:"absolute", left:"954px",top:"0px", height:'60px'}}/>
            </div>
            <div className="verticle-line"/>
            <div className="verticle-line"style={{position:"absolute", left:"588px",top:"189px"}}/>
            <div className="verticle-line"style={{position:"absolute", left:"888px",top:"189px"}}/>
          </div>
          <div>
            <table className="table-top">
              <thead>
                <tr>
                  <th>Priority</th>
                  <th>Condition</th>
                  <th>Time To Failure</th>
                  <th>Probability</th>
                  <th>Time To Repair</th>
                  <th></th>
                  <th></th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td><div style={{background: "rgba(8, 28, 40, 0.5)", width:"45px"}}>
                  <img className="" src={require('./flag.png')} style={{width:"9px", marginLeft: "5px"}}/>
            <span className="po" style={{width:"9px", paddingLeft: "5px"}}>PO</span>
            </div></td>
                  <td>Critical</td>
                  <td>16 days</td>
                  <td>80%</td>
                  <td>11 days</td>
                  <td></td>
                  <td></td>
                  </tr>
                  </tbody>
              </table>
              <table className="table-content">
              <thead>
                <tr>
                  <th>3/6</th>
                  <th>Rnk</th>
                  <th>Sensor Name</th>
                  <th></th>
                  <th>Last Reading</th>
                  <th>Upper Limit</th>
                  <th>Last Anomaly</th>
                  <th>Avg Duration</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Location</td>
                  <td>Units</td>
                  <td>Time</td>
                  <td>Lower Limit</td>
                  <td>Time</td>
                  <td>No. in 7 Days</td>
                </tr>
                <tr className="content-table-row">
                  <td rowspan="2"><input className="checkMark" type="checkbox"/></td>
                  <td >1</td>
                  <td>Static Pressure at pump outlet</td>
                  <td></td>
                  <td>107.0054</td>
                  <td>100.0000</td>
                  <td>107.0054</td>
                  <td>813 min</td>
                </tr>
                <tr className="content-table-row">
                  <td></td>
                  <td>Pump 5 / Drivetrain</td>
                  <td>bar</td>
                  <td>'17 Jan 30,8:44</td>
                  <td>69.4460</td>
                  <td>'17 Jan 30,8:44</td>
                  <td></td>
                </tr>
                <tr className="content-table-row checked ">
                  <td rowspan="2"><input type="checkbox" checked /></td>
                  <td >2</td>
                  <td>Static Pressure at pump outlet</td>
                  <td></td>
                  <td>107.0054</td>
                  <td>100.0000</td>
                  <td>107.0054</td>
                  <td>813 min</td>
                </tr>
                <tr className="content-table-row">
                  <td></td>
                  <td>Pump 5 / Drivetrain</td>
                  <td>bar</td>
                  <td>'17 Jan 30,8:44</td>
                  <td>69.4460</td>
                  <td>'17 Jan 30,8:44</td>
                  <td></td>
                </tr>
                <tr className="content-table-row">
                  <td rowspan="2"><input type="checkbox" /></td>
                  <td >3</td>
                  <td>Static Pressure at pump outlet</td>
                  <td></td>
                  <td>107.0054</td>
                  <td>100.0000</td>
                  <td>107.0054</td>
                  <td>813 min</td>
                </tr>
                <tr className="content-table-row">
                  <td></td>
                  <td>Pump 5 / Drivetrain</td>
                  <td>bar</td>
                  <td>'17 Jan 30,8:44</td>
                  <td>69.4460</td>
                  <td>'17 Jan 30,8:44</td>
                  <td></td>
                </tr>
                <tr className="content-table-row">
                  <td rowspan="2"><input type="checkbox"/></td>
                  <td >4</td>
                  <td>Static Pressure at pump outlet</td>
                  <td></td>
                  <td>107.0054</td>
                  <td>100.0000</td>
                  <td>107.0054</td>
                  <td>813 min</td>
                </tr>
                <tr className="content-table-row">
                  <td></td>
                  <td>Pump 5 / Drivetrain</td>
                  <td>bar</td>
                  <td>'17 Jan 30,8:44</td>
                  <td>69.4460</td>
                  <td>'17 Jan 30,8:44</td>
                  <td></td>
                </tr>
                <tr className="content-table-row">
                  <td rowspan="2"><input type="checkbox"/></td>
                  <td >5</td>
                  <td>Static Pressure at pump outlet</td>
                  <td></td>
                  <td>107.0054</td>
                  <td>100.0000</td>
                  <td>107.0054</td>
                  <td>813 min</td>
                </tr>
                <tr className="content-table-row">
                  <td></td>
                  <td>Pump 5 / Drivetrain</td>
                  <td>bar</td>
                  <td>'17 Jan 30,8:44</td>
                  <td>69.4460</td>
                  <td>'17 Jan 30,8:44</td>
                  <td></td>
                </tr>
                  
                  </tbody>
              </table>
            </div>

        </div>
             
    </div>
  );
  }
}

export default Contents;
