package com.example.SistemasReservas.service.impl;

import com.example.SistemasReservas.dto.CreateCustomerDTO;
import com.example.SistemasReservas.dto.CustomerDTO;
import com.example.SistemasReservas.dto.CustomerReservationDTO;
import com.example.SistemasReservas.exception.ExcepcionRecursoNoEncontrado;
import com.example.SistemasReservas.mapper.CustomerMapper;
import com.example.SistemasReservas.model.Customer;
import com.example.SistemasReservas.repository.CustomerRepository;
import com.example.SistemasReservas.service.CustomerService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {
    
    private final CustomerRepository customerRepository;
    private final CustomerMapper customerMapper;

    public CustomerServiceImpl(CustomerRepository customerRepository, CustomerMapper customerMapper) {
        this.customerRepository = customerRepository;
        this.customerMapper = customerMapper;
    }

    @Override
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public List<CustomerDTO> findAllDto() {
        List<Customer> customers = customerRepository.findAll();
        return customerMapper.toDTO(customers);
    }

    @Override
    public Customer getCustomer(long customerId) throws ExcepcionRecursoNoEncontrado {
        return customerRepository.findById(customerId)
                .orElseThrow(() -> new ExcepcionRecursoNoEncontrado("Customer not found: " + customerId));
    }

    @Override
    public CustomerDTO getCustomerDTO(long customerId) throws ExcepcionRecursoNoEncontrado {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new ExcepcionRecursoNoEncontrado("Customer not found: " + customerId));
        return customerMapper.toDTO(customer);
    }

    @Override
    @Transactional
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    @Transactional
    public CustomerDTO saveDTO(CreateCustomerDTO customerDTO) {
        Customer customer = customerMapper.toModel(customerDTO);
        Customer savedCustomer = customerRepository.save(customer);
        return customerMapper.toDTO(savedCustomer);
    }

    @Override
    @Transactional
    public void delete(long customerId) {
        customerRepository.deleteById(customerId);
    }

    @Override
    @Transactional
    public void update(long customerId, Customer customerDetails) throws ExcepcionRecursoNoEncontrado {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new ExcepcionRecursoNoEncontrado("Customer not found: " + customerId));

        customer.setFirstName(customerDetails.getFirstName());
        customer.setLastName(customerDetails.getLastName());
        customer.setEmail(customerDetails.getEmail());
        customer.setPhone(customerDetails.getPhone());
        customer.setAddress(customerDetails.getAddress());

        customerRepository.save(customer);
    }

    @Override
    public CustomerReservationDTO findByIdWithReservations(long customerId) throws ExcepcionRecursoNoEncontrado {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new ExcepcionRecursoNoEncontrado("Customer not found: " + customerId));
        return customerMapper.toDTOWithReservations(customer);
    }

}
