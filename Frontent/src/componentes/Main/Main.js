import React, { Component } from "react";
import Header from "../Header";
import Stepper from "../Stepper/Stepper";
import Responsive from "../Responsive/Responsive";
//import CardSlider from "../CardSlider";
import CardReview from '../CardReview';
import AppCardSlider from "../AppCardSlider/AppCardSlider";
//import BasicDatePicker from "../BasicDatePicker";
import ReservationBar from "../ReservationBar/index.js";
import RoomOptions from "../RoomOptions/RoomOptions.js";
import Reserva from "../Reserva/Reserva.js";
import Habitaciones from "../Habitaciones/Habitaciones.js";
import { Route, Routes } from "react-router-dom";


//import Card
//import { Routes, Route } from 'react-router-dom';

class Main extends Component{

    /*state = {
        Calendario: {},
      }*/
    
    render(){

        return(
            <>
            <ReservationBar></ReservationBar>
            <Routes>
                <Route path="/reservation" element={<Reserva></Reserva>}></Route>
                {/*
                
            
            < Stepper ></Stepper>
            < Responsive ></Responsive>
            <br></br>
            < AppCardSlider ></AppCardSlider>
            <CardReview />
                */}
            </Routes>
            </>
        ); 
    }
}
export default Main; 