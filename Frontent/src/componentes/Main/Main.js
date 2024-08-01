import React, { Component } from "react";
import Login from "../Login";
import Header from "../Header";
import Stepper from "../Stepper/Stepper";
import Responsive from "../Responsive/Responsive";
//import CardSlider from "../CardSlider";
import CardReview from '../CardReview';
import AppCardSlider from "../AppCardSlider/AppCardSlider";
<<<<<<< HEAD
import Reserva from "../Form/Reserva";
=======
//import BasicDatePicker from "../BasicDatePicker";
import ReservationBar from "../ReservationBar/index.js";
import RoomOptions from "../RoomOptions/RoomOptions.js";
import Reserva from "../Reserva/Reserva.js";
import Habitaciones from "../Habitaciones/Habitaciones.js";
import { Route, Routes } from "react-router-dom";

>>>>>>> 9ddaff738036f5f8503fbad9b469655f6667c11c

//import Card
//import { Routes, Route } from 'react-router-dom';

class Main extends Component{

    /*state = {
        Calendario: {},
      }*/
    
    render(){

        return(
            <>
<<<<<<< HEAD
            < Login ></Login>
            < Header ></Header>
=======
            <ReservationBar></ReservationBar>
            <Routes>
                <Route path="/reservation" element={<Reserva></Reserva>}></Route>
                {/*
                
            
>>>>>>> 9ddaff738036f5f8503fbad9b469655f6667c11c
            < Stepper ></Stepper>
            < Responsive ></Responsive>
            <br></br>
            < AppCardSlider ></AppCardSlider>
            <CardReview />
<<<<<<< HEAD
            < Reserva ></ Reserva>
=======
                */}
            </Routes>
>>>>>>> 9ddaff738036f5f8503fbad9b469655f6667c11c
            </>
        ); 
    }
}
export default Main; 