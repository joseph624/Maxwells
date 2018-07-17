import React, { Component } from 'react';
import Compact from './compact';
import Standard from './standard';
import SectionHeader from './piece/sectionHeader';


var subList = {items: [
    {
         name: 'subs',
         description: " ",
         helper: true
       },
      {
        name: 'PHILLY CHEESESTEAK',
        description: "Tender steak, fresh onion & green peppers, provolone cheese, topped with mayo",
        price: "6.49"
      },
      {
        name: 'ITALIAN SUB',
        description: "Spicy capicola ham, deli pepperoni, genoa salami, lettuce, roma tomatoes, banana peppers and golden italian dressing",
        price: "6.49",
        featured: true

     },
     {
       name: 'MEATBALL SUB',
       description: "Four meatballs, mozzarella cheese and pizza sauce",
       price: "6.49"
     },
     {
       name: 'PARMESAN CHICKEN SUB',
       description: "Breaded chicken filet, mozzarella cheese and pizza sauce",
       price: "6.49"
     },
     {
       name: 'HAM & CHEESE SUB',
       description: "Ham, cheese, lettuce, tomato, mayo",
       price: "6.49"
     }
     ]}

     var saladList = {items: [

     {
       name: 'PIZZA SUB',
       description: "HUGE deli pepperoni, mozzarella cheese and pizza sauce... great sub to add any pizza topping",
       price: "5.99"
     },
          {
            name: 'salads',
            description: " ",
            helper: true
          },
          {
           name: 'AVOCADO CHICKEN',
            description: "Avocado, grilled chicken, bacon, tomato, croutons and cheese",
            price: "7.99"
          },
          {
           name: 'PIZZA SALAD',
            description: "Cheese, carrots, banana peppers, tomatoes, and pepperoni",
            price: "Full 6.99 Half 3.99",
            featured: true
          },
          {
           name: 'CAESAR SALAD',
            description: "Cheese, croutons, grilled chicken and caesar dressing",
            price: "6.99"
          },

          {
           name: 'FARMHOUSE',
            description: "Cheese, tomato, cucumber, egg, croutons, bacon and ham",
            price: "7.99"
          }
          ]}

     var wingList = {items: [

       {
         name: 'TRADITIONAL OR BONELESS',
         description: "BBQ, buffalo, parm garlic, teriyaki, honey gold, asian chili, XTRA hot",
         price: "6 : 6.99 / 12 : 9.99 / 18 : 18.99"
       }

          ]}
    var extraList = {items: [

         {
          name: 'CHEESY BREAD',
           description: "6.49"
         },
         {
          name: ' ',
           description:  " "
         },
         {
          name: 'BIG COOKIE',
           description:  "3.99"
         }
         ]}





class MenuTwo extends React.Component {
  render() {
      return (
        <div>
           {/*
           <Featured />
           */}
           <div className="container-fluid">
              <div className="row">
                 <div className="col-lg-8">
                    <SectionHeader title="Subs & Salads" />
                 </div>

                 <div className="col-lg-4">
                    <SectionHeader title="Wings" />
                 </div>
              </div>
              <div className="row">
                 <div className="col">
                    <Standard menu={subList}/>
                 </div>
                 <div className="col">
                    <Standard menu={saladList}/>
                 </div>
                 <div className="col">
                    <div className="row">
                       <div className="col  pb-5">
                          <Compact menu={wingList}/>
                       </div>
                    </div>
                    <div className="row">
                       <div className="col sub-header">
                          <SectionHeader title="Extras" className=""/>
                          <Compact menu={extraList}/>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    )
  }
}


export default MenuTwo;
