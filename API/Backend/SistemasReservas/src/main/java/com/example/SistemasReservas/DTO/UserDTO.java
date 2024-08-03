package com.example.SistemasReservas.DTO;

import lombok.Data;

@Data
public class UserDTO {
    private Integer userId;
    private String name;
    private String email;
    private String phoneNumber;
    private String passwordHash;
}