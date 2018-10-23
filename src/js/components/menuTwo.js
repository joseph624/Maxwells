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
       name: 'HAM & CHEESE SUB',
       description: "Ham, cheese, lettuce, tomato, mayo",
       price: "6.49"
     }
     ]}

     var sandwichList = {items: [

      
     
     {
       name: 'PIZZA SUB',
       description: "HUGE deli pepperoni, mozzarella cheese and pizza sauce... great sub to add any pizza topping",
       price: "5.99"
     },
          {
            name: 'sandwiches',
            description: " ",
            helper: true
          },
          {
       name: 'PARMESAN CHICKEN ',
       description: "Breaded chicken filet, mozzarella cheese and pizza sauce on a kaiser roll",
       price: "6.49"
     },
          {
       name: 'BUFFALO CHICKEN SANDWICH',
       description: "breaded chicken tossed in buffalo sauce, provolone cheese, lettuce, tomato, and ranch on a kaiser roll",
       price: "6.49"
     },
          ]}

               var saladList = {items: [

 
          {
           name: 'AVOCADO CHICKEN',
            description: "Avocado, grilled chicken, bacon, tomato, croutons and cheese",
            price: "Full 8.99 Half 5.99"
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
          },

          {
           name: 'Buffalo Chicken',
            description: "Breaded chicken tossed in buffalo sauce with mixed with a Mexican cheese blend, bacon, lettuce, tomato",
            price: "7.99"
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
                    <SectionHeader title="Subs & Sandwiches" />
                 </div>

                 <div className="col-lg-4">
                    <SectionHeader title="Salads" />
                 </div>
              </div>
              <div className="row">
                 <div className="col">
                    <Standard menu={subList}/>
                 </div>
                 <div className="col">
                    <Standard menu={sandwichList}/>
                 </div>
                 <div className="col">
                    <div className="row">
                       <div className="col  pb-5">
                          <Compact menu={saladList}/>
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
