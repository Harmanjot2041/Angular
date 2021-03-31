import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
 // quantity=1;
     quantity:any =[1,1,1,1,1,1,1
    //  q1:1,
    //  q2:1,
    //  q3:1,
    //  q4:1,
    //  q5:1,
    //  q6:1,
    //  q7:1,
     ];
   minus(i:any){
      // this.quantity.push(i);
     if(this.quantity[i-1]>0) 
     this.quantity[i-1]--;
    // console.log(this.quantity);
   }
   plus(i:any){
    this.quantity[i-1]++;
  }
 products=[
   {
     index:1,
    code:101,
     description:"Fritolay Doritos Cool Ranch",
     unit:"198 gm",
     Cost:"$14.99",
     rsp:"$31",
     Margin:"30%",
     category:"Bagged Sweets",
     date:"25-aug-2020",
     qty:"9",
     color:"red",
     img:"../../assets/kurkre1.jfif"
    
   },
   {
    index:2,
    code:102,
    description:"Ruffies Doritos Cool Ranch",
    unit:"158 gm",
    Cost:"$13.99",
    rsp:"$37",
    Margin:"50%",
    category:"Bagged Sweets",
    date:"16-jul-2020",
    qty:"10",
    color:"blue",
    img:"../../assets/kurkre3.jfif"

  },
  {
    index:3,
    code:103,
    description:"Lay's Doritos Cool Ranch",
    unit:"198 gm",
    Cost:"$14.99",
    rsp:"$31",
    Margin:"60%",
    category:"Bagged Sweets",
    date:"45-mar-2020",
    qty:"9",
    color:"green",
    img:"../../assets/kurkre2.jfif"

  },
  {
    index:4,
    code:104,
    description:"sour's Doritos Cool Ranch",
    unit:"138 gm",
    Cost:"$24.99",
    rsp:"$41",
    Margin:"60%",
    category:"Bagged Sweets",
    date:"22-mar-2020",
    qty:"71",
    color:"yellow",
    img:"../../assets/kurkre4.jfif"

  },
  {
    index:5,
    code:105,
    description:"Fritolay Doritos Cool Ranch",
    unit:"498 gm",
    Cost:"$34.99",
    rsp:"$35",
    Margin:"60%",
    category:"Bagged Sweets",
    date:"27-mar-2020",
    qty:"01",
    color:"silver",
    img:"../../assets/kurkre5.jfif"

  },
  {
    index:6,
    code:106,
    description:"sunChips Doritos Cool Ranch",
    unit:"168 gm",
    Cost:"$17.99",
    rsp:"$37",
    Margin:"37%",
    category:"Bagged Sweets",
    date:"25-aug-2020",
    qty:"91",
    color:"red",
    img:"../../assets/kurkre6.jfif"

  },
  {
    index:7,
    code:107,
    description:"fav Doritos Cool Ranch",
    unit:"198 gm",
    Cost:"$14.99",
    rsp:"$37",
    Margin:"60%",
    category:"Bagged Sweets",
    date:"25-mar-2020",
    qty:"9",
    color:"green",
    img:"../../assets/kurkre3.jfif"

  }
 ]
}
