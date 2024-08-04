package com.example.SistemasReservas.dto;

import lombok.Data;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

@Schema(description = "Modelo CreateCustomerDTO para crear un cliente")
@Data
public class CreateCustomerDTO {
    @Schema(description = "Nombre del Cliente")
    @NotBlank(message = "El nombre del cliente es obligatorio")
    private String firstName;

    @NotBlank(message = "El apellido del cliente es obligatorio")
    private String lastName;

    @Email(message = "El correo electrónico debe ser válido")
    private String email;

    @Pattern(regexp = "^(\\d{3}[-]?){2}\\d{4}$", message = "El teléfono debe ser de 10 dígitos")
    private String phone;

    private String address;
    
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime registrationDate;
}
