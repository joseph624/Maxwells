import React, { Component } from 'react';
import ReactDOM from 'react-dom';





class SaladMenu extends Component {
  constructor(props){
    super(props);
    this.state = {items: this.props.menu.items}

  }



  render() {
    console.log('ComponentRender');
    let items = this.state.items


      return (
        <div className="container-fluid pt-5 pl-5 pr-1  ">
        <div className="Row">
            {items.map(item  =>
              <div className={"  pt-3 pl-3 pr-1 pb-2 " + (item.featured ? ' featuredItem' : '') + (item.helper ? ' menu-item-helper' : '') + (item.helperSecondary ? ' menu-item-helper-red' : '')}>
              <div className="" key={item.name.toString()}>
               <span className="menu-item-title">
                {item.name}
              </span>
              &nbsp;&nbsp;
              <span className="menu-item-price">
                {item.price}
            </span>
              <br/>
              <span className="menu-item-description">
                {item.description}
              </span>
              

            </div>

            </div>
          )}
          </div>
        </div>
    )
  }
}


export default SaladMenu;
