import React, { Component } from "react";
import CardReview from '../CardReview';
import Stepper from "../Stepper/Stepper";

//import Card
//import { Routes, Route } from 'react-router-dom';

class Main extends Component{
    
    render(){

        return(
            <>
            <CardReview />
            <Stepper></Stepper>
            </>
        ); 
    }
}
export default Main; 