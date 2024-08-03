package com.example.SistemasReservas.DTO;

 

import lombok.Data;


@Data
public class RoomDTO {
    private Integer roomId;
    private String roomNumber;
    private Integer roomTypeId;
    private String description;
    private Double pricePerNight;
}