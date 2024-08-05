package com.example.SistemasReservas.dto;

import lombok.Data;

@Data
public class RestaurantDTO {
    private Integer restaurantId;
    private String name;
    private String description;
    private String imageUrl;
    private String openTime;
    private String closeTime;
}
