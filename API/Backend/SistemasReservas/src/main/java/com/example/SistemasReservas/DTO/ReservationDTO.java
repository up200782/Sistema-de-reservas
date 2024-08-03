package com.example.SistemasReservas.DTO;

import lombok.Data;
import java.time.LocalDate;

@Data
public class ReservationDTO {
    private Integer reservationId;
    private Integer userId;
    private Integer roomId;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private Double totalCost;
    private String status;
}