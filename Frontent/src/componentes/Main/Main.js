import React, { Component } from "react";
import Header from "../Header";
import Stepper from "../Stepper/Stepper";
import Responsive from "../Responsive/Responsive";
//import CardSlider from "../CardSlider";
import CardReview from '../CardReview';
import AppCardSlider from "../AppCardSlider/AppCardSlider";
//import BasicDatePicker from "../BasicDatePicker";
import ReservationBar from "../ReservationBar.js";
import RoomOptions from "../RoomOptions/RoomOptions.js";
import Reserva from "../Reserva/Reserva.js";
import Habitaciones from "../Habitaciones/Habitaciones.js";

//import Card
//import { Routes, Route } from 'react-router-dom';

class Main extends Component{

    /*state = {
        Calendario: {},
      }*/
    
    render(){

        return(
            <>
            < Header ></Header>
            <ReservationBar></ReservationBar>
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