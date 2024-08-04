package com.example.SistemasReservas.dto;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;

@Data
public class CreateRestaurantDTO {
    
    @NotBlank(message = "El nombre del restaurante es obligatorio")
    private String name;

    private String description;
    private String imageUrl;
    private String openTime;
    private String closeTime;
}
