package com.example.SistemasReservas.service;

import com.example.SistemasReservas.model.Room;
import com.example.SistemasReservas.repository.RoomRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RoomService {

    private final RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public Room getRoomById(Integer id) {
        return roomRepository.findById(id).orElse(null);
    }

    public Room saveRoom(Room room) {
        return roomRepository.save(room);
    }

    public Room updateRoom(Integer id, Room roomDetails) {
        return roomRepository.findById(id).map(room -> {
            room.setRoomNumber(roomDetails.getRoomNumber());
            room.setRoomType(roomDetails.getRoomType());
            room.setPrice(roomDetails.getPrice());
            room.setStatus(roomDetails.getStatus());
            room.setImageUrl(roomDetails.getImageUrl());
            room.setDescription(roomDetails.getDescription()); // Actualizar la descripción
            return roomRepository.save(room);
        }).orElse(null);
    }

    public void deleteRoom(Integer id) {
        roomRepository.deleteById(id);
    }

    public List<Room> findActiveRooms(String status) {
        return roomRepository.findActiveRooms(status);
    }
}
