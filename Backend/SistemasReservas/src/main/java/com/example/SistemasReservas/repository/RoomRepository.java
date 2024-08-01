package com.example.SistemasReservas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.SistemasReservas.model.Room;
import java.util.*;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {

    // Seleccionar todas las habitaciones activas
    @Query(value = "SELECT * FROM hotel_management.rooms WHERE status = ?1", nativeQuery = true)
    Collection<Room> findActiveRooms(String status);
}
