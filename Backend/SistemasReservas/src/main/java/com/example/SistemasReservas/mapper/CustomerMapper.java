package com.example.SistemasReservas.mapper;

import com.example.SistemasReservas.dto.CreateCustomerDTO;
import com.example.SistemasReservas.dto.CustomerDTO;
import com.example.SistemasReservas.dto.CustomerReservationDTO;
import com.example.SistemasReservas.dto.ReservationDTO;
import com.example.SistemasReservas.model.Customer;
import com.example.SistemasReservas.model.Reservation;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CustomerMapper {

    @Mapping(source = "reservations", target = "reservations")
    CustomerDTO toCustomerDTO(Customer customer);

    Customer toCustomer(CreateCustomerDTO createCustomerDTO);

    @Mapping(source = "reservations", target = "reservations")
    CustomerReservationDTO toCustomerReservationDTO(Customer customer);

    default ReservationDTO toReservationDTO(Reservation reservation) {
        return new ReservationDTO(
                reservation.getReservationId(),
                reservation.getRoomId(),
                reservation.getReservationDate(),
                reservation.getCheckInDate(),
                reservation.getCheckOutDate(),
                reservation.getStatus()
        );
    }
}
