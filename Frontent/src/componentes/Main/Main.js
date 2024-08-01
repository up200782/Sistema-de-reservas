import React, { Component } from "react";
import Header from "../Header";
import Stepper from "../Stepper/Stepper";
import Responsive from "../Responsive/Responsive";
//import CardSlider from "../CardSlider";
import CardReview from '../CardReview';
import AppCardSlider from "../AppCardSlider/AppCardSlider";
import Form from "../Form";

//import Card
//import { Routes, Route } from 'react-router-dom';

class Main extends Component{
    
    render(){

        return(
            <>
            < Header ></Header>
            < Stepper ></Stepper>
            < Responsive ></Responsive>
            <br></br>
            < AppCardSlider ></AppCardSlider>
            <CardReview />
            < Form >S</Form>
            </>
        ); 
    }
}
export default Main; 