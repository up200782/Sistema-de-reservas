package com.example.SistemasReservas.mapper;

import com.example.SistemasReservas.dto.CreateCustomerDTO;
import com.example.SistemasReservas.dto.CustomerDTO;
import com.example.SistemasReservas.dto.CustomerReservationDTO;
import com.example.SistemasReservas.model.Customer;
import com.example.SistemasReservas.model.Reservation;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CustomerMapper {

    @Mappings({
        @Mapping(source = "reservations", target = "reservations") // Asegúrate de que este campo esté presente en el DTO
    })
    CustomerDTO toDTO(Customer customer);

    List<CustomerDTO> toDTO(List<Customer> customers);

    @Mappings({
        @Mapping(source = "reservations", target = "reservations") // Asegúrate de que este campo esté presente en el DTO
    })
    Customer toModel(CreateCustomerDTO data);

    // Este método debe mapear Customer con sus reservas
    @Mapping(target = "reservations", source = "reservations")
    CustomerReservationDTO toDTOWithReservations(Customer customer);

}
