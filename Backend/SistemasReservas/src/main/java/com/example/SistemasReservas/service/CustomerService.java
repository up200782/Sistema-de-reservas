package com.example.SistemasReservas.service;

import com.example.SistemasReservas.dto.CreateCustomerDTO;
import com.example.SistemasReservas.dto.CustomerDTO;
import com.example.SistemasReservas.dto.CustomerReservationDTO;
import com.example.SistemasReservas.exception.ExcepcionRecursoNoEncontrado;
import com.example.SistemasReservas.model.Customer;

import java.util.List;

public interface CustomerService {
    
    List<Customer> findAll();

    List<CustomerDTO> findAllDto();

    Customer getCustomer(long customerId) throws ExcepcionRecursoNoEncontrado;

    CustomerDTO getCustomerDTO(long customerId) throws ExcepcionRecursoNoEncontrado;

    Customer save(Customer customer);

    CustomerDTO saveDTO(CreateCustomerDTO customerDTO);

    void delete(long customerId);

    void update(long customerId, Customer customerDetails) throws ExcepcionRecursoNoEncontrado;

    CustomerReservationDTO findByIdWithReservations(long customerId) throws ExcepcionRecursoNoEncontrado;
}
