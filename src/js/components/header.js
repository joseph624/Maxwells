import React, { Component } from 'react';
import logo from '../../logo.png';


class Header extends Component {
  render() {
    return (
      <div className="header mb-3 ">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-4 pt-3">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="col-lg-8 pt-3">
              <span className="display-2 ">
              {this.props.headerProp}
              </span>
            </div>


          </div>
        </div>
  </div>
    )
  }
}

export default Header;
