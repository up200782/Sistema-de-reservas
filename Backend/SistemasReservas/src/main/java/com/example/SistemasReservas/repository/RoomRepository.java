package com.example.SistemasReservas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.SistemasReservas.model.Room;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {

    @Query(value = "SELECT * FROM rooms WHERE status = ?1", nativeQuery = true)
    List<Room> findActiveRooms(String status);
}
