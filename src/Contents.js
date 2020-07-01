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

    const firstData = [{x: 0, y: 85},
                       {x: 1, y: 84.17},
                       {x: 2, y: 85},
                       {x: 3, y: 84.17},
                       {x: 4, y: 83.34},
                       {x: 5, y: 84.17},
                       {x: 6, y: 82.51},
                       {x: 7, y: 84.14},
                       {x: 8, y: 83.34},
                       {x: 9, y: 84.17},
                       {x: 10, y: 83.34},
                       {x: 11, y: 85},
                       {x: 12, y: 84.17},
                       {x: 13, y: 85},
                       {x: 14, y: 83.34},
                       {x: 15, y: 84.17},
                       {x: 16, y: 82.51},
                       {x: 17, y: 81.68},
                       {x: 18, y: 82.51},
                       {x: 19, y: 80.58},
                       {x: 20, y: 80},
                       {x: 21, y: 80.58},
                       {x: 22, y: 79.17},
                       {x: 23, y: 78.34},
                       {x: 24, y: 79.17},
                       {x: 25, y: 78.34},
                       {x: 26, y: 77.51},
                       {x: 27, y: 78.34},
                       {x: 28, y: 77.51},
                       {x: 29, y: 78.34},
                       {x: 30, y: 80},
                       {x: 31, y: 75},
                       {x: 32, y: 77.51},
                       {x: 33, y: 76.68},
                       {x: 34, y: 77.51},
                       {x: 35, y: 76.68},
                       {x: 36, y: 77.51},
                       {x: 37, y: 75.85},
                       {x: 38, y: 76.68},
                       {x: 39, y: 77.51},
                       {x: 40, y: 77.51},
                       {x: 41, y: 78.34},
                       {x: 42, y: 77.51},
                       {x: 43, y: 76.68},
                       {x: 44, y: 75},
                       {x: 45, y: 75.85},
                       {x: 46, y: 75},
                       {x: 47, y: 74.17},
                       {x: 48, y: 73.34},
                       {x: 49, y: 72.51},
                       {x: 50, y: 72.51},
                       {x: 51, y: 71.68},
                       {x: 52, y: 70.85},
                       {x: 53, y: 71.68},
                       {x: 54, y: 70.85},
                       {x: 55, y: 72.51},
                       {x: 56, y: 71.68},
                       {x: 57, y: 70},
                       {x: 58, y: 72.51},
                       {x: 59, y: 74.17},
                       {x: 60, y: 73.34},
                       {x: 61, y: 75},
                       {x: 62, y: 74.17},
                       {x: 63, y: 73.34},
                       {x: 64, y: 72.51},
                       {x: 65, y: 73.34},
                       {x: 66, y: 79.17},
                       {x: 67, y: 72.51},
                       {x: 68, y: 70.85},
                       {x: 69, y: 71.68},
                       {x: 70, y: 70.85},
                       {x: 71, y: 71.68},
                       {x: 72, y: 70.85},
                       {x: 73, y: 72.51},
                       {x: 74, y: 73.34},
                       {x: 75, y: 72.51},
                       {x: 76, y: 73.34},
                       {x: 77, y: 75.85},
                       {x: 78, y: 74.17},
                       {x: 79, y: 72.51},
                       {x: 80, y: 73.34},
                       {x: 81, y: 75},
                       {x: 82, y: 76.68},
                       {x: 83, y: 77.51},
                       {x: 84, y: 78.34},
                       {x: 85, y: 77.51},
                       {x: 86, y: 76.68},
                       {x: 87, y: 77.51},
                       {x: 88, y: 76.68},
                       {x: 89, y: 80},
                      ]
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
                <span style={{color: "#FFFFFF"}}>1y</span>
              </div>
            </div>
            <div className="chart-parent">
            <div className="chart-header2">
              <div className="y-axis-value">90</div>
              <div className="upper">UPPER THRESHOLD</div>
            </div>
            <div className="chart-header3">
            <div className="y-axis-value" style={{position:"absolute",top:"10px"}}>85</div>
            <div className="y-axis-value" style={{position:"absolute",top:"42px"}}>80</div>
            <div className="y-axis-value" style={{position:"absolute",top:"78px"}}>75</div>
              <div className="line" style={{position:"absolute", left:"20px",top:"52px",display: 'flex', fill: 'none'}}></div>
              <div className="line" style={{position:"absolute", left:"20px",top:"18px",display: 'flex', fill: 'none'}}></div>
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
              
            <div className="mask1"></div>
            <div className="mask2"></div>
            <div className="month">
            <span style={{position:"absolute", left:"288px",top:"45px", opacity: "0.55"}}>2015</span>
            <span style={{position:"absolute", left:"673px",top:"45px"}}>2016</span>
            <span style={{position:"absolute", left:"956px",top:"45px", opacity: "0.55"}}>2017</span>
            </div>
            <XYPlot width={1100} height={80} style={{display:'flex', fill:'none'}}> 
            <LineMarkSeries className="first-series" data={secondData} lineStyle={{ stroke: "#47C874" }} markStyle={{ stroke: "none", fill: "none", width: "0px" }}
            curve={"curveCatmullRom"}/>
            <LineMarkSeries className="first-series" data={thirdData} lineStyle={{ stroke: "#026FB5" }} markStyle={{ stroke: "none", fill: "none", width: "0px" }}
            curve={"curveCatmullRom"}/>
            <LineMarkSeries className="first-series" data={fourthData} lineStyle={{ stroke: "#249A95" }} markStyle={{ stroke: "none", fill: "none", width: "0px" }}
            curve={"curveCatmullRom"}/>
            </XYPlot>           
            <div className="verticle-line" style={{position:"absolute", left:"282px",top:"0px", height:'60px'}}/>
            <div className="verticle-line" style={{position:"absolute", left:"652px",top:"0px", height:'60px'}}/>
            <div className="verticle-line" style={{position:"absolute", left:"954px",top:"0px", height:'60px'}}/>
            </div>
            <div className="verticle-line"/>
            <div className="verticle-line"style={{position:"absolute", left:"588px",top:"189px"}}/>
            <div className="verticle-line"style={{position:"absolute", left:"888px",top:"189px"}}/>
          </div>
            <img className="left-slider" src={require('./left slider.png')} width="7px" height="14px"/>
            <img className="right-slider" src={require('./left slider.png')} width="7px" height="14px"/> 
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
                <tr className="content-table-row selected" rowspan="2">
                  
                  <td rowspan="2">
                    <span className="selected-line"/>
                    <input type="checkbox" className="checkbox" checked/>
                     <span className="overlay">
                      <svg xmlns="http://www.w3.orh/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="current Color"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon">
                        <polyline point="20 6 9 17 4 12"/>
                        </svg> 
                        </span>
                    </td>
                  <td className="table-line">1</td>
                  <td className="table-line">Static Pressure at pump outlet</td>
                  <td className="table-line"></td>
                  <td className="table-line"><span className="bar1"/>107.0054</td>
                  <td className="table-line"><span className="bar1"  style={{left:"679px", top:"106px"}}/>100.0000</td>
                  <td className="table-line"><span className="bar1" style={{left:"805px", top:"106px"}}/>107.0054</td>
                  <td className="table-line">813 mins</td>
                </tr>
                <tr className="content-table-row selected2">
                  <td></td>
                  <td>Pump 5 / Drivetrain</td>
                  <td>bar</td>
                  <td>'17 Jan 30, 8:44</td>
                  <td><span className="bar2" style={{left:"679px", top:"148px"}}></span>69.4460</td>
                  <td>'17 Jan 30, 8:44</td>
                  <td></td>
                </tr>
                <tr className="content-table-row">
                  <td rowspan="2">
                  <label className="checkbox"><input type="checkbox"/>
                     <span className="overlay">
                      <svg xmlns="http://www.w3.orh/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="current Color"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon">
                        <polyline point="20 6 9 17 4 12"/>
                        </svg> 
                        </span>
                        </label></td>
                  <td className="table-line">2</td>
                  <td className="table-line">Static Pressure at pump outlet</td>
                  <td></td>
                  <td className="table-line"><span className="bar1" style={{left:"512px", top:"192px"}}/>107.0054</td>
                  <td className="table-line"><span className="bar1"  style={{left:"679px", top:"192px"}}/>100.0000</td>
                  <td className="table-line"><span className="bar1" style={{left:"805px", top:"192px"}}/>107.0054</td>
                  <td className="table-line">813 mins</td>
                </tr>
                <tr className="content-table-row">
                  <td></td>
                  <td>Pump 5 / Drivetrain</td>
                  <td>bar</td>
                  <td>'17 Jan 30,8:44</td>
                  <td><span className="bar2" style={{left:"679px", top:"236px"}}></span>69.4460</td>
                  <td>'17 Jan 30, 8:44</td>
                  <td></td>
                </tr>
                <tr className="content-table-row">
                  <td rowspan="2"><label className="checkbox"><input type="checkbox"/>
                     <span className="overlay">
                      <svg xmlns="http://www.w3.orh/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="current Color"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon">
                        <polyline point="20 6 9 17 4 12"/>
                        </svg> 
                        </span>
                        </label></td>
                  <td className="table-line">3</td>
                  <td className="table-line">Static Pressure at pump outlet</td>
                  <td></td>
                  <td className="table-line"><span className="bar1"style={{left:"512px", top:"281px"}}/>107.0054</td>
                  <td className="table-line"><span className="bar1"  style={{left:"679px", top:"281px"}}/>100.0000</td>
                  <td className="table-line"><span className="bar1" style={{left:"805px", top:"281px"}}/>107.0054</td>
                  <td className="table-line">813 mins</td>
                </tr>
                <tr className="content-table-row">
                  <td></td>
                  <td>Pump 5 / Drivetrain</td>
                  <td>bar</td>
                  <td>'17 Jan 30, 8:44</td>
                  <td><span className="bar2" style={{left:"679px", top:"324px"}}></span>69.4460</td>
                  <td>'17 Jan 30, 8:44</td>
                  <td></td>
                </tr>
                <tr className="content-table-row">
                  <td rowspan="2"><label className="checkbox"><input type="checkbox"/>
                     <span className="overlay">
                      <svg xmlns="http://www.w3.orh/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="current Color"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon">
                        <polyline point="20 6 9 17 4 12"/>
                        </svg> 
                        </span>
                        </label></td>
                  <td className="table-line">4</td>
                  <td className="table-line">Static Pressure at pump outlet</td>
                  <td></td>
                  <td className="table-line"><span className="bar1"style={{left:"512px", top:"370px"}}/>107.0054</td>
                  <td className="table-line"><span className="bar1"  style={{left:"679px", top:"370px"}}/>100.0000</td>
                  <td className="table-line"><span className="bar1" style={{left:"805px", top:"370px"}}/>107.0054</td>
                  <td className="table-line">813 mins</td>
                </tr>
                <tr className="content-table-row">
                  <td></td>
                  <td>Pump 5 / Drivetrain</td>
                  <td>bar</td>
                  <td>'17 Jan 30, 8:44</td>
                  <td><span className="bar2" style={{left:"679px", top:"412px"}}></span>69.4460</td>
                  <td>'17 Jan 30, 8:44</td>
                  <td></td>
                </tr>
                <tr className="content-table-row">
                  <td rowspan="2"><label className="checkbox"><input type="checkbox"/>
                     <span className="overlay">
                      <svg xmlns="http://www.w3.orh/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="current Color"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon">
                        <polyline point="20 6 9 17 4 12"/>
                        </svg> 
                        </span>
                        </label></td>
                  <td className="table-line">5</td>
                  <td className="table-line">Static Pressure at pump outlet</td>
                  <td></td>
                  <td className="table-line"><span className="bar1"style={{left:"512px", top:"458px"}}/>107.0054</td>
                  <td className="table-line"><span className="bar1"  style={{left:"679px", top:"458px"}}/>100.0000</td>
                  <td className="table-line"><span className="bar1" style={{left:"805px", top:"458px"}}/>107.0054</td>
                  <td className="table-line">813 mins</td>
                </tr>
                <tr className="content-table-row">
                  <td></td>
                  <td>Pump 5 / Drivetrain</td>
                  <td>bar</td>
                  <td>'17 Jan 30, 8:44</td>
                  <td><span className="bar2" style={{left:"679px", top:"499px"}}></span>69.4460</td>
                  <td>'17 Jan 30, 8:44</td>
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
