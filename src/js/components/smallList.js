import React, { Component } from 'react';
import ReactDOM from 'react-dom';





class SmallList extends Component {
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
            <div className="row menu-dark block pt-4">
              {items.map(item  =>
                  <div className="Col">
                      <div className="text-justify " key={item.name.toString()}>
                          <span className="menu-item-description-light">
                          {item.name} 
                          </span>

                      </div>
<br/>
                  </div>

              )} 
            </div>
          </div>

    )
  }
}


export default SmallList;
