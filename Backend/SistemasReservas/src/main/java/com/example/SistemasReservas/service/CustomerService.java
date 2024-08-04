package com.example.SistemasReservas.service;

import com.example.SistemasReservas.dto.CreateCustomerDTO;
import com.example.SistemasReservas.dto.CustomerDTO;
import com.example.SistemasReservas.dto.CustomerReservationDTO;
import com.example.SistemasReservas.exception.ExcepcionRecursoNoEncontrado;
import com.example.SistemasReservas.mapper.CustomerMapper;
import com.example.SistemasReservas.model.Customer;
import com.example.SistemasReservas.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private CustomerMapper customerMapper;

    // Método que convierte los nombres de un cliente a mayúsculas
    private Customer convertNamesToUpperCase(Customer customer) {
        if (customer != null) {
            customer.setFirstName(
                customer.getFirstName() != null ? customer.getFirstName().toUpperCase() : null
            );
            customer.setLastName(
                customer.getLastName() != null ? customer.getLastName().toUpperCase() : null
            );
        }
        return customer;
    }

    public List<Customer> findAll() {
        // Convertir los nombres a mayúsculas al obtener todos los clientes
        return customerRepository.findAll().stream()
                .map(this::convertNamesToUpperCase) // Aplicar conversión a mayúsculas
                .collect(Collectors.toList());
    }

    public List<CustomerDTO> findAllDto() {
        // Convertir los nombres a mayúsculas y luego a DTO al obtener todos los clientes
        return customerRepository.findAll().stream()
                .map(this::convertNamesToUpperCase) // Convertir nombres a mayúsculas
                .map(customerMapper::toCustomerDTO) // Convertir a DTO
                .collect(Collectors.toList());
    }

    public Customer getCustomer(long customerId) throws ExcepcionRecursoNoEncontrado {
        // Obtener un cliente por ID y convertir los nombres a mayúsculas
        return customerRepository.findById(customerId)
                .map(this::convertNamesToUpperCase) // Convertir nombres a mayúsculas
                .orElseThrow(() -> new ExcepcionRecursoNoEncontrado("Customer not found with id " + customerId));
    }

    public CustomerDTO getCustomerDTO(long customerId) throws ExcepcionRecursoNoEncontrado {
        // Obtener un cliente como DTO
        Customer customer = getCustomer(customerId);
        return customerMapper.toCustomerDTO(customer);
    }

    public Customer save(Customer customer) {
        // Convertir nombres a mayúsculas antes de guardar un cliente
        customer = convertNamesToUpperCase(customer);
        return customerRepository.save(customer);
    }

    public CustomerDTO saveDTO(CreateCustomerDTO createCustomerDTO) {
        // Convertir nombres a mayúsculas antes de guardar un cliente como DTO
        Customer customer = customerMapper.toCustomer(createCustomerDTO);
        customer = convertNamesToUpperCase(customer); // Convertir a mayúsculas antes de guardar
        customer = customerRepository.save(customer);
        return customerMapper.toCustomerDTO(customer);
    }

    public void delete(long customerId) {
        // Eliminar un cliente por ID
        customerRepository.deleteById(customerId);
    }

    public void update(long customerId, Customer customerDetails) throws ExcepcionRecursoNoEncontrado {
        // Actualizar un cliente existente
        Customer customer = getCustomer(customerId);
        customer.setFirstName(customerDetails.getFirstName().toUpperCase()); // Convertir a mayúsculas
        customer.setLastName(customerDetails.getLastName().toUpperCase()); // Convertir a mayúsculas
        customer.setEmail(customerDetails.getEmail());
        customer.setPhone(customerDetails.getPhone());
        customer.setAddress(customerDetails.getAddress());
        customerRepository.save(customer);
    }

    public CustomerReservationDTO findByIdWithReservations(long customerId) throws ExcepcionRecursoNoEncontrado {
        // Obtener un cliente y sus reservas
        Customer customer = getCustomer(customerId);
        return customerMapper.toCustomerReservationDTO(customer);
    }

    // Método para obtener nombres de usuarios en mayúsculas
    public List<String> getUpperCaseUserNames(List<Customer> customers) {
        return customers.stream()
                .map(customer -> customer.getFirstName().toUpperCase()) 
                .collect(Collectors.toList());
    }
    
}
