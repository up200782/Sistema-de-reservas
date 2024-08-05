package com.example.SistemasReservas.dto;

public class CustomerStatisticsDTO {
    private String lastName;
    private Long total;

    public CustomerStatisticsDTO(String lastName, Long total) {
        this.lastName = lastName;
        this.total = total;
    }

    // Getters y Setters
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }
}
