import React, { Component } from 'react';
import Compact from './compact';
import SmallList from './smallList';
import SaladMenu from './saladmenu';
import SectionHeader from './piece/sectionHeader';


var wingPriceList = {items: [
  {
            name: 'Wings',
            description: " ",
            helper: true
          },
    {
         name: 'jumbo wings',
        description: "6 - 7.49 / 12 - 13.99 / 18 - 18.99",
        price: "Side of ranch or blue cheese"
      },
      {
         name: 'Bonless',
        description: "Half Pound - 6.49 / Full Pound - 10.99",
        price: "Side of ranch or blue cheese"
      },
      {
            name: 'Extras',
            description: " ",
            helper: true
          },
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

     var calzoneList = {items: [
      {
        name: 'Pepperoni and Cheese ',
        description: "8.99" 
      },     
      {
        name: 'Veggie',
        description: "White garlic sauce, cheese, spinach, tomato and mushroom, served with a side of garlic butter",
        price: "8.99"
      },
      {
        name: 'Buffalo Chicken',
        description: "buffalo sauce, cheese, grilled chicken, bacon and blue cheese. Served with a side of ranch",
        price: "8.99"
      },
     {
       name: 'Philly Cheese Steak',
       description: "Shaved steak, cheese, green onions and onion w/ side of steak sauce aioli",
       price: "8.99"
     },
     {
       name: 'Build Your Own',
       description: "Choose up to 4 toppings",
       price: "8.99"
     }  
   
     ]}

     var wingList = {items: [
          {
          name: 'X-HOT'   
          },
          {
          name: 'MANGO HABANERO' 
          },
          {
            name: 'HONEY HOT' 
          },
          {
           name: 'SERRANO CHILI' 
          },
          {
           name: 'CARRIBEAN JERK' 
          },
          {
           name: 'BUFFALO' 
          },
          {
           name: 'HOT GARLIC PARM'
          },
          {
           name: 'SWEET CHILI'
          },
          {
           name: 'HONEY GOLD'
          },
          {
           name: 'TERIYAKI'
          },
          {
           name: 'GARLIC PARM'
          },
          {
           name: 'BBQ'
          }
          ]}



class MenuTwo extends React.Component {

 

 

  render() {

     //let menuSwap = textArray[this.state.currIndex];
      return (
        <div>
        
           {/*
           <Featured />
           */}
           <div className="container-fluid">
              <div className="row">
                 <div className="col-lg-4">
                    <SectionHeader title="Calzones 12” wide" />
                                   </div>
                                   <div className="col-lg-8">
                    <SectionHeader title="Wings & More" />
                                   </div>

              
              </div>


              <div className="row">
                <div className="col-lg-4">
                  <Compact menu={calzoneList}/>
                </div>
                <div className="col-lg-4 heatScale ">
                  <SmallList menu={wingList}/>
                </div>
                <div className="col-lg-4">
                  <Compact menu={wingPriceList}/>
                </div>
        
 
              </div>
           </div>
        </div>
    )
  }
}                                             


export default MenuTwo;
