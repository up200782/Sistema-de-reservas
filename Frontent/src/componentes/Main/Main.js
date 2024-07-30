import React, { Component } from "react";
import Stepper from "../Stepper/Stepper";
import Responsive from "../Responsive/Responsive";
//import CardSlider from "../CardSlider";
import CardReview from '../CardReview';
import AppCardSlider from "../AppCardSlider/AppCardSlider";

//import Card
//import { Routes, Route } from 'react-router-dom';

class Main extends Component{
    
    render(){

        return(
            <>
            < Stepper ></Stepper>
            < Responsive ></Responsive>
            <br></br>
            < AppCardSlider ></AppCardSlider>
            <CardReview />
            </>
        ); 
    }
}
export default Main; 