package com.example.SistemasReservas.mapper;

import com.example.SistemasReservas.dto.CreateCustomerDTO;
import com.example.SistemasReservas.dto.CustomerDTO;
import com.example.SistemasReservas.dto.CustomerReservationDTO;
import com.example.SistemasReservas.dto.ReservationDTO;
import com.example.SistemasReservas.model.Customer;
import com.example.SistemasReservas.model.Reservation;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-08-04T19:38:20-0600",
    comments = "version: 1.5.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.7.jar, environment: Java 17.0.10 (Oracle Corporation)"
)
@Component
public class CustomerMapperImpl implements CustomerMapper {

    @Override
    public CustomerDTO toCustomerDTO(Customer customer) {
        if ( customer == null ) {
            return null;
        }

        CustomerDTO customerDTO = new CustomerDTO();

        customerDTO.setReservations( reservationListToReservationDTOList( customer.getReservations() ) );
        if ( customer.getCustomerId() != null ) {
            customerDTO.setCustomerId( customer.getCustomerId().longValue() );
        }
        customerDTO.setFirstName( customer.getFirstName() );
        customerDTO.setLastName( customer.getLastName() );
        customerDTO.setEmail( customer.getEmail() );
        customerDTO.setPhone( customer.getPhone() );
        customerDTO.setAddress( customer.getAddress() );
        customerDTO.setRegistrationDate( customer.getRegistrationDate() );

        return customerDTO;
    }

    @Override
    public Customer toCustomer(CreateCustomerDTO createCustomerDTO) {
        if ( createCustomerDTO == null ) {
            return null;
        }

        Customer customer = new Customer();

        customer.setFirstName( createCustomerDTO.getFirstName() );
        customer.setLastName( createCustomerDTO.getLastName() );
        customer.setEmail( createCustomerDTO.getEmail() );
        customer.setPhone( createCustomerDTO.getPhone() );
        customer.setAddress( createCustomerDTO.getAddress() );
        customer.setRegistrationDate( createCustomerDTO.getRegistrationDate() );

        return customer;
    }

    @Override
    public CustomerReservationDTO toCustomerReservationDTO(Customer customer) {
        if ( customer == null ) {
            return null;
        }

        CustomerReservationDTO customerReservationDTO = new CustomerReservationDTO();

        customerReservationDTO.setReservations( reservationListToReservationDTOList( customer.getReservations() ) );
        customerReservationDTO.setCustomerId( customer.getCustomerId() );
        customerReservationDTO.setFirstName( customer.getFirstName() );
        customerReservationDTO.setLastName( customer.getLastName() );
        customerReservationDTO.setEmail( customer.getEmail() );
        customerReservationDTO.setPhone( customer.getPhone() );
        customerReservationDTO.setAddress( customer.getAddress() );

        return customerReservationDTO;
    }

    protected List<ReservationDTO> reservationListToReservationDTOList(List<Reservation> list) {
        if ( list == null ) {
            return null;
        }

        List<ReservationDTO> list1 = new ArrayList<ReservationDTO>( list.size() );
        for ( Reservation reservation : list ) {
            list1.add( toReservationDTO( reservation ) );
        }

        return list1;
    }
}
