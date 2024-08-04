package com.example.SistemasReservas.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReservationDTO {
    private Integer reservationId;
    private Integer roomId;
    private LocalDateTime reservationDate;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private String status;
}
