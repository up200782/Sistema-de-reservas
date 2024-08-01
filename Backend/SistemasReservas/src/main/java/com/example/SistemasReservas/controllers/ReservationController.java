package com.example.SistemasReservas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.SistemasReservas.model.Reservation;
import com.example.SistemasReservas.service.ReservatioService;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@RequestMapping("/api/reservations")
public class ReservationController {
    
    @Autowired  
    private ReservationService reservationService;

    @GetMapping //listo 
    public List<Reservation> getAllReservations() {
        return Reservation.getAllReservations();
    }
    
    @GetMapping("/{id}") //listo 
    public ResponseEntity<Reservation> getReservationById(@PathVariable Integer id) {
        Reservation reservation = reservationService.getReservationById(id);
        if (reservation == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(reservation);
    }

    @PostMapping //listo 
    public ResponseEntity<Reservation> createReservation(@RequestBody Reservation reservation) {
        Reservation savedReservation = reservationService.saveReservation(reservation);
        return ResponseEntity.ok(savedReservation);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Reservation> updateReservation(@PathVariable Integer id, @RequestBody Reservation reservationDetails) {
        Reservation updatedReservation = reservationService.updateReservation(id, reservationDetails);
        if (updatedReservation == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedReservation);
    }
   
}
