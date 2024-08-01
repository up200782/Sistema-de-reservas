package com.example.SistemasReservas.mapper;

import com.example.SistemasReservas.dto.ReservationDTO;
import com.example.SistemasReservas.model.Reservation;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ReservationMapper {

    @Mapping(source = "customer.customerId", target = "customerId")
    @Mapping(source = "customer.firstName", target = "customerFirstName") // Asegúrate de que estos campos existan en ReservationDTO
    @Mapping(source = "customer.lastName", target = "customerLastName")
    @Mapping(source = "customer.email", target = "customerEmail")
    @Mapping(source = "customer.phone", target = "customerPhone")
    @Mapping(source = "customer.address", target = "customerAddress")
    @Mapping(source = "customer.registrationDate", target = "customerRegistrationDate")
    ReservationDTO toDTO(Reservation reservation);

    @Mapping(source = "customerId", target = "customer.customerId")
    @Mapping(source = "customerFirstName", target = "customer.firstName")
    @Mapping(source = "customerLastName", target = "customer.lastName")
    @Mapping(source = "customerEmail", target = "customer.email")
    @Mapping(source = "customerPhone", target = "customer.phone")
    @Mapping(source = "customerAddress", target = "customer.address")
    @Mapping(source = "customerRegistrationDate", target = "customer.registrationDate")
    Reservation toModel(ReservationDTO reservationDTO);
}
