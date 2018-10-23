import React, { Component } from 'react';
import Compact from './compact';
import Standard from './standard';
import SectionHeader from './piece/sectionHeader';


var pizzaListOne = {items: [
      {
        name: 'PEPPERONI & CHEESE',
        description: "Cheese or peperoni",
        price: "5.99 P / 10.49 M / 12.49 L / 15.49 XL",

     },
     {
       name: 'MARGARITA PIZZA',
       description: "Fresh basil, roma tomatoes, and balsamic glaze",
       price: "5.99 P / 10.99 M / 13.99 L / 15.99 XL",
       featured: true
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
          }
     ]}

     var pizzaListTwo = {items: [
         
          {
            name: 'SUPREME PIZZA',
            description: "Pepperoni, sausage, green peppers, mushrooms, onion, black olives",
            price: "5.99 P / 13.99 M / 15.99 L / 17.99 XL"
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
          },
          {
            name: 'BUFFALO CHICKEN PIZZA',
            description: "Buffalo sauce, grilled chicken, bacon, with a ranch and buffalo sauce drizzle",
            price: "5.99 P / 13.99 M / 15.99 L / 17.99 XL"
          },
          {
              name: 'By the slice',
              description: 'Simple 3.19 / Premium 3.49',
             
              helperSecondary: true

          }
          ]}

     var buildYourOwn = {items: [
       {
     name: 'Select A Size',
         description: " ",
         helper: true
       },
       {
         name: 'PERSONAL',
         description: "Starts at 5.00",
         price: "All toppings 0.99/pc"
       },

       {
         name: 'MEDIUM',
         description: "Starts at 8.49",
         price: "All toppings 1.50/pc"
       },
       {
         name: 'LARGE',
         description: "Starts at 10.49",
         price: "All toppings 2.00/pc"
       },
       {
         name: 'XL',
         description: "Starts at 12.49",
         price: "All toppings 2.50/pc"
       },
       {
     name: 'Select Toppings',
         description: " ",
         helper: true
       },
       {
         name: 'MEATS',
         description: "Pepperoni, sausage, honey ham, bacon,beef, capicola ham, deli pepperoni, chicken, salami"
       },
       {
         name: 'VEGGIES',
         description: "Green pepper, banana pepper, onion,mushrooms, peppadew sweet peppers,momma lil's hot peppers, pineapple, basil,spinach, black/green olives, tomatoes, jalapenos, lettuce"
       }


          ]}



class Menu extends React.Component {
  render() {
      return (
<div>
  {/*<Featured />*/}
  <div className="container-fluid">

  <div className="row">
    <div className="col-lg-8">
    <SectionHeader title="House Pizzas" />
    </div>

    <div className="col-lg-4">
    <SectionHeader title="Build Your Own" />
    </div>
    </div>
      <div className="row">
      <div className="col-lg-4">
          <Standard menu={pizzaListOne}/>
      </div>
      <div className="col">

          <Standard menu={pizzaListTwo}/>
      </div>
      <div className="col">
        <Compact menu={buildYourOwn}/>
      </div>

    </div>
  </div>
</div>
    )
  }
}


export default Menu;
