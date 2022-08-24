import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  
  
  } from "react-router-dom";
import Card from 'react-bootstrap/Card';


const CardRData = [
  { 
      "link":"/hamburguesas",
      "img": "/bgcard.jpg"        
  }
  ,
  { 
      "link":"/pizzas",
      "img": './pzcard.jpg'
  }
  ,
  {  
      "link":"/empanadas",
      "img": "/pfcard.jpg"
  }
  ];

function  CardRight () {
  return ( 

    <div style={{width:'210px', marginLeft:'25px', marginTop: '25px' }}>

    {CardRData.map((e) =>
    
    {
    return (
      
      <Card style={{
       borderColor:'gray',
       width: '13rem',
       marginTop:'10px'   
       }}>
        <Link  to={e.link} >
       <Card.Img variant="top" src={e.img} width="208px"/> 
       
        
      </Link>  
      </Card>
       
      
    )
    
    })
  
    }

</div>
  );

}


export default  CardRight;

