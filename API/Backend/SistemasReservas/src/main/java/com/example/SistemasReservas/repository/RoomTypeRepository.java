package com.example.SistemasReservas.repository;

import com.example.SistemasReservas.model.Room;
import com.example.SistemasReservas.model.RoomType;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomTypeRepository extends JpaRepository<RoomType, Integer> {
}