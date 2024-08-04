package com.example.SistemasReservas.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerReservationDTO {
    private Integer customerId;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String address;
    private List<ReservationDTO> reservations;
}
