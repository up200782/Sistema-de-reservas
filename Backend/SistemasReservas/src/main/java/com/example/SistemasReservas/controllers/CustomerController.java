package com.example.SistemasReservas.controllers;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.SistemasReservas.dto.CreateCustomerDTO;
import com.example.SistemasReservas.dto.CustomerDTO;
import com.example.SistemasReservas.dto.CustomerReservationDTO;
import com.example.SistemasReservas.dto.CustomerStatisticsDTO; // Importa el nuevo DTO
import com.example.SistemasReservas.exception.ExcepcionRecursoNoEncontrado;
import com.example.SistemasReservas.model.Customer;
import com.example.SistemasReservas.repository.CustomerRepository; // Importa el repositorio
import com.example.SistemasReservas.service.CustomerService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

import java.util.List;
import java.util.stream.Collectors;

@Tag(name = "Endpoints de Clientes", description = "CRUD de clientes")
@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @Autowired
    private CustomerRepository customerRepository; // Inyección del repositorio

    @GetMapping("/all")
    public ResponseEntity<List<Customer>> getAllCustomers() {
        return ResponseEntity.ok(customerService.findAll());
    }

    @GetMapping("/allDto")
    @ResponseStatus(HttpStatus.OK)
    public List<CustomerDTO> findAllDto() {
        return customerService.findAllDto();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerDTO> getCustomerById(@PathVariable Long id) throws ExcepcionRecursoNoEncontrado {
        return ResponseEntity.ok(customerService.getCustomerDTO(id));
    }

    @GetMapping(params = "id")
    public ResponseEntity<Customer> getCustomerByRequestParam(@RequestParam Long id) throws ExcepcionRecursoNoEncontrado {
        return ResponseEntity.ok(customerService.getCustomer(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Customer save(@Valid @RequestBody Customer data) {
        return customerService.save(data);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public CustomerDTO save(@Valid @RequestBody CreateCustomerDTO data) {
        return customerService.saveDTO(data);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCustomer(@PathVariable Long id) {
        customerService.delete(id);
    }

    @PutMapping("/{customerId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable long customerId, @Valid @RequestBody Customer data) throws ExcepcionRecursoNoEncontrado {
        customerService.update(customerId, data);
    }

    @Operation(summary = "Obtiene las Reservaciones de un Cliente determinado")
    @GetMapping("/{idCustomer}/reservations")
    @ResponseStatus(HttpStatus.OK)
    public CustomerReservationDTO findAllCustomerReservations(@PathVariable long idCustomer) throws ExcepcionRecursoNoEncontrado {
        return customerService.findByIdWithReservations(idCustomer);
    }

    // Nuevo método para obtener el total de reservas por cliente
    @GetMapping("/totalReservations")
    public ResponseEntity<List<CustomerStatisticsDTO>> getTotalReservationsByCustomer() {
        List<Object[]> results = customerRepository.findTotalReservationsByCustomer();
        List<CustomerStatisticsDTO> statistics = results.stream()
                .map(result -> new CustomerStatisticsDTO((String) result[0], ((Number) result[1]).longValue()))
                .collect(Collectors.toList());
        return ResponseEntity.ok(statistics);
    }

    // Nuevo método para obtener el total de pagos por cliente
    @GetMapping("/totalPayments")
    public ResponseEntity<List<CustomerStatisticsDTO>> getTotalPaymentsByCustomer() {
        List<Object[]> results = customerRepository.findTotalPaymentsByCustomer();
        List<CustomerStatisticsDTO> statistics = results.stream()
                .map(result -> new CustomerStatisticsDTO((String) result[0], ((Number) result[1]).longValue()))
                .collect(Collectors.toList());
        return ResponseEntity.ok(statistics);
    }

    
    @GetMapping("valid/{email}")
public Customer validCustomerByEmail(@PathVariable String email) throws ExcepcionRecursoNoEncontrado {
    Customer customer = customerService.getCustomerByEmail(email);
    return customer;
}

}
