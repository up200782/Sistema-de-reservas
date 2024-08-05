package com.example.SistemasReservas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.SistemasReservas.model.Customer;
import java.util.*;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    // Obtener el número total de reservas por cada cliente
    @Query(value = "SELECT c.last_name, COUNT(r.reservation_id) as total_reservations " +
                   "FROM hotel_management.customers c " +
                   "JOIN hotel_management.reservations r ON c.customer_id = r.customer_id " +
                   "GROUP BY c.last_name", nativeQuery = true)
    List<Object[]> findTotalReservationsByCustomer();

    // Obtener el total de pagos por cada cliente
    @Query(value = "SELECT c.last_name, SUM(p.amount) as total_payments " +
                   "FROM hotel_management.customers c " +
                   "JOIN hotel_management.reservations r ON c.customer_id = r.customer_id " +
                   "JOIN hotel_management.payments p ON r.reservation_id = p.reservation_id " +
                   "GROUP BY c.last_name", nativeQuery = true)
    List<Object[]> findTotalPaymentsByCustomer();

    @Query(value="SELECT * FROM hotel_management.customers WHERE TRIM(LOWER(email)) = TRIM(LOWER(?1))", nativeQuery = true)
    Optional<Customer> findCustomerByEmail(String email);
}