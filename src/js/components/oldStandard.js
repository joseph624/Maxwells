import React, { Component } from 'react';
import ReactDOM from 'react-dom';



var pizzaMenu = {items: [
      {
        name: 'PEPPERONI & CHEESE',
        description: "cheese or peperoni",
        price: "$5.99 P / $9.49 M / $11.49 L / $14.49 XL"
     },
     {
       name: 'MARGARITA PIZZA',
       description: "Fresh basil, roma tomatoes, and balsamic glaze",
       price: "5.99 P / 10.99 M / 13.99 L / 15.99 XL"
     },
     {
       name: 'HAWAIIAN PIZZA',
       description: "Honey ham topped with pineapple",
       price: "5.99 P / 10.99 M / 13.99 L / 15.99 XL"
     },
     {
       name: 'WHITE PIZZA',
       description: "Spinach, onion, tomato and white garlic sauce",
       price: "5.99 P / 10.99 M / 13.99 L / 15.99 XL"
     },
     {
       name: 'HOT!! PEPPA HAM',
       description: "Mama Lil's hot peppas and spicy capicola ham",
       price: "5.99 P / 12.99 M / 14.99 L / 16.99 XL"
     },
     {
       name: 'SWEET PEPPER HAM',
       description: "Sweet peppadew peppers and honey baked ham",
       price: "5.99 P / 12.99 M / 14.99 L / 16.99 XL"
     },
     {
       name: 'SUPREME PIZZA',
       description: "Pepperoni, sausage, green peppers, mushrooms, onion, black olives",
       price: "5.99 P / 12.99 M / 14.99 L / 16.99 XL"
     },
     {
       name: 'MEAT LOVERS PIZZA',
       description: "Pepperoni, sausage, ham, bacon",
       price: "5.99 P / 13.99 M / 15.99 L / 17.99 XL"
     },
     {
       name: 'BBQ CHICKEN PIZZA',
       description: "BBQ Sauce, grilled chicken, bacon and onion",
       price: "5.99 P / 12.99 M / 14.99 L / 16.99 XL"
     }
     ]}

     var pizzaMenuTwo = {items: [
       {
         name: 'PERSONAL',
         description: "Starts at 5.00",
         price: "All toppings : .75"
       },
       {
         name: 'MEDIUM',
         description: "Starts at 8.00",
         price: "Meat 1.50/pc Veggie 1.00/pc"
       },
       {
         name: 'LARGE',
         description: "Starts at 10.00",
         price: "Meat 2.00/pc Veggie 1.50/pc"
       },
       {
         name: 'XL',
         description: "Starts at 12.00",
         price: "Meat 2.50/pc Veggie 1.50/pc"
       },
       {
         name: 'MEATS',
         description: "Pepperoni, sausage, honey ham, bacon,beef, capicola ham, deli pepperoni, chicken, salami"
       },
       {
         name: 'VEGGIES',
         description: "Green Pepper, banana pepper, onion,mushrooms, peppadew sweet peppers,momma lil's hot peppers, pineapple, basil,spinach, black/green olives, tomatoes, jalapenos, lettuce"
       }


          ]}



class Standard extends Component {
  constructor(props){
    super(props);
    this.state = {items: pizzaMenu.items}

  }



 componentWillMount() {
    console.log('ComponentWillLMount');

  }

  componentDidMount () {
    console.log('ComponentDidMount');


    setInterval(() => {
    this.switch();
  }, 5000);
  }

  shouldComponentUpdate() {
    console.log('ShouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('Will Update');
  }

  componentDidUpdate(){
    console.log('ComponentDidUpdate');
  }


  switch = () => {
      if (this.state.items !== pizzaMenuTwo.items) {
        this.setState({items: pizzaMenuTwo.items});
      }
      else {
        this.setState(pizzaMenu);
      }
    }

  render() {
    console.log('ComponentRender');
    let items = this.state.items


      return (
        <div className="container-fluid p-5">
            {items.map(item  =>
              <div className="row p-3">
              <div className="text-justify text-capitalize" key={item.name.toString()}>
              <h2><span className="display-4">
                {item.name}
              </span></h2>
              <h4><span className="description">
                {item.description}
              </span></h4>
              <span className="">
                {item.price}
            </span>
            </div>

            </div>
          )}
        </div>
    )
  }
}


export default Standard;
