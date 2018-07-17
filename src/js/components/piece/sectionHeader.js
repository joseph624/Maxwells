import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class SectionHeader extends Component {
  constructor(props){
    super(props);
  }

  render() {




      return (
        <div className="container-fluid pl-5 pt-4 ">
        <div className="row p-3  itemTitle">
        <div className="text-justify ">
         <span className="display-4">
        {this.props.title}
        </span>

      </div>

      </div>
      </div>

    )
  }
}


export default SectionHeader;
