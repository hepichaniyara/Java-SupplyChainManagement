import React, { useEffect } from "react";
import {  Container } from "reactstrap";
import { Button } from 'reactstrap';
const Home=()=>{
    useEffect(()=>{document.title= "Home // Suppply chain ";},[])
   
    return(
        <div  className="p-3 bg-success my-2 rounded ">
           
        <Container className="text-centre"></Container>

            <h1> mobile phone details of components</h1>
            <p>these all are the components of smart phone</p>
            <Container  ><Button color="primary">LOGIN IN</Button></Container>
            
            
        </div>
    );
};
export default Home ;
