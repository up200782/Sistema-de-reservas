package com.example.SistemasReservas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SistemasReservas.model.Room;

import com.example.SistemasReservas.repository.RoomRepository;

import java.util.List;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

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
        Room room = roomRepository.findById(id).orElse(null);
        if (room != null) {
            room.setRoomNumber(roomDetails.getRoomNumber());
            room.setRoomType(roomDetails.getRoomType());
            room.setPrice(roomDetails.getPrice());
            room.setStatus(roomDetails.getStatus());
            return roomRepository.save(room);
        }
        return null;
    }

    public void deleteRoom(Integer id) {
        roomRepository.deleteById(id);
    }
}

