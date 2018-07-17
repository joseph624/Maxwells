import React, { Component } from 'react';
import Carousel from 'nuka-carousel';



class Featured extends React.Component {
  constructor(){
    super();
    this.state = {items: [
          {
            name: 'Supreme Pizza',
            image: '../../images/supreme.jpg',
            description: "Ate lunch",
            price: "$4.99"
         },
         {
           name: 'Meat Lovers Pizza',
           image: '../../images/meat.jpg',
           description: "Ate lunch",
           price: "$6.99"
         }
         ]}
  }

  render() {
      let items = this.state.items

      var imgSize = {
          margin: 'auto',
          width: '200px'
};
      return (
<div className="container">
<div className="jumbotron">

<Carousel>
{items.map(item  =>
  <div className="card text-center featured-card" key={item.name}>
  <img className="card-img-top" style={imgSize} src={require('../../images/meat.jpg')} alt="Card image cap" />
  <span className="card-header featured-card">
    {item.name}
  </span>
  <p className="card-text">
    {item.description}
  </p>
  <div className="card-text featured-card">
    {item.price}
</div>
</div>
)}
      </Carousel>
      </div>


</div>
    )
  }
}


export default Featured;
