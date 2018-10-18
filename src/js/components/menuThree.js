import React, { Component } from 'react';
import Compact from './compact';
import SaladMenu from './saladmenu';
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

     var wrapList = {items: [
    
      {
        name: 'Buffalo Chicken Wrap',
        description: "Breaded chicken tossed in buffalo sauce with mixed with a Mexican cheese blend, lettuce, tomato and ranch dressing",
        price: "7.99"
      },
      {
        name: 'Mediterranean Chicken',
        description: "Grilled chicken on a spinach wrap with spinach, feta cheese and parmesan peppercorn dressing",
        price: "7.99"
        

     },
     {
       name: 'CBR+A',
       description: "Our take on the chicken bacon ranch. Spinach wrap loaded with grilled chicken, bacon, ranch dressing, avocado, lettuce, tomato and a blend of Italian cheeses",
       price: "7.99"
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
          },

          {
           name: 'FIESTA SALAD',
            description: "Our made in house pico, grilled chicken, tortilla straws, mexican cheese and signature fiesta dressing",
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
          name: 'BIG COOKIE',
           description:  "3.99"
         }
         ]}


const textArray = [wingList, extraList];


class MenuTwo extends React.Component {

        constructor() {
        super()
        this.state = { 
            currIndex: 0, 
        }
      }



        componentDidMount() {
            this.interval = setInterval(() =>  {
           
          this.switch();
      }, 5000);
    }



 
       componentWillUnmount() {
        clearInterval(this.interval);
       }

       switch = () => {
            if (this.state.currIndex !== 0) {
              this.setState({currIndex: 0});
            }
            else {
              this.setState({currIndex: 1});
            }
    }

 

  render() {

     let menuSwap = textArray[this.state.currIndex];
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
                    <SectionHeader title="Wraps" />
                 </div>
              </div>
              <div className="row">
                 <div className="col">
                    <SaladMenu menu={subList}/>
                 </div>
                 <div className="col">
                    <SaladMenu menu={saladList}/>
                 </div>
                 <div className="col">
                    <div className="row">
                       <div className="col  pb-5">
                          <Compact menu={wrapList}/>
                       </div>
                    </div>
                    <div className="row">
                       <div className="col sub-header">
                          <SectionHeader title="Wings & Extras" className=""/>
                          <Compact menu={menuSwap}/>
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
