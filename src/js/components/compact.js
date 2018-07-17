import React, { Component } from 'react';
import ReactDOM from 'react-dom';





class Compact extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: this.props.menu.items 
       
    }

  }


    componentWillReceiveProps(nextProps) {
    if (this.props.menu !== nextProps.menu) {
      this.setState({items: nextProps.menu.items})

    }
  }


 

  render() {
    console.log('ComponentRender');
    let items = this.state.items
   


      return (
        <div className="container-fluid pt-5 pl-5 pr-4">
        <div className="row menu-fade ">
            {items.map(item  =>

              <div className={"pb-1 pt-3 pr-3 pl-1" + (item.featured ? ' featuredItem' : '') + (item.helper ? ' menu-item-helper' : '')}>
<div className="col">
              <div className="text-justify " key={item.name.toString()}>
           <span className="menu-item-title">
                {item.name}
              </span>
              <br/>
              </div>

              <div className="col">

           <span className="menu-item-description">
                {item.description}
              </span>
              <br/>
              <span className="menu-item-price">
                {item.price}
            </span>
            </div>
            </div>

            </div>
          )}
          </div>
        </div>

    )
  }
}


export default Compact;
