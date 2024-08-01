package com.example.SistemasReservas.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "reservations")

public class Reservation {
     @Id
     @Column(name = "reservation_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer reservationId;

    //Necesito que Nelly termine la configuración de Customers
    
    @JoinColumn(name = "customer_id", nullable = false)
    @ManyToOne
    @Column(name = "customer_id")
    private Integer customerId;
    

   // @ManyToOne
   // @JoinColumn(name = "room_id", nullable = false)
   //Cuando termine de proramar todo la descomento
   @Column(name = "room_id")
    private Integer roomId;

    @Column(name = "reservation_date", updatable = false, nullable = false)
    private LocalDateTime reservationDate;

    @Column(nullable = false)
    private LocalDate checkInDate;

    @Column(nullable = false)
    private LocalDate checkOutDate;

    @Column(nullable = false)
    private String status;
    
}
