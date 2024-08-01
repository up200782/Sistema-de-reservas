import React, { Component } from "react";
import Login from "../Login";
import Header from "../Header";
import Stepper from "../Stepper/Stepper";
import Responsive from "../Responsive/Responsive";
//import CardSlider from "../CardSlider";
import CardReview from '../CardReview';
import AppCardSlider from "../AppCardSlider/AppCardSlider";
import Reserva from "../Form/Reserva";

//import Card
//import { Routes, Route } from 'react-router-dom';

class Main extends Component{
    
    render(){

        return(
            <>
            < Login ></Login>
            < Header ></Header>
            < Stepper ></Stepper>
            < Responsive ></Responsive>
            <br></br>
            < AppCardSlider ></AppCardSlider>
            <CardReview />
            < Reserva ></ Reserva>
            </>
        ); 
    }
}
export default Main; 