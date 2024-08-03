package com.example.SistemasReservas.Service;
 
import com.example.SistemasReservas.DTO.RoomDTO;
import com.example.SistemasReservas.exception.ResourceNotFoundException;
import com.example.SistemasReservas.Mapper.RoomMapper;
import com.example.SistemasReservas.model.Room;
import com.example.SistemasReservas.model.RoomType;
import com.example.SistemasReservas.repository.RoomRepository;
import com.example.SistemasReservas.repository.RoomTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private RoomTypeRepository roomTypeRepository;

    @Autowired
    private RoomMapper roomMapper;

    public List<RoomDTO> getAllRooms() {
        return roomRepository.findAll().stream()
                .map(roomMapper::toDTO)
                .collect(Collectors.toList());
    }

    public ResponseEntity<RoomDTO> getRoomById(Integer id) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Habitación con ID " + id + " no encontrada"));
        return ResponseEntity.ok(roomMapper.toDTO(room));
    }

    public ResponseEntity<RoomDTO> createRoom(RoomDTO roomDTO) {
        Room room = roomMapper.toEntity(roomDTO);
        Room savedRoom = roomRepository.save(room);
        return new ResponseEntity<>(roomMapper.toDTO(savedRoom), HttpStatus.CREATED);
    }

    public ResponseEntity<RoomDTO> updateRoom(Integer id, RoomDTO roomDTO) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Habitación con ID " + id + " no encontrada"));

        room.setRoomNumber(roomDTO.getRoomNumber());

        // Verifica si `roomDTO.getRoomTypeId()` es realmente un `Integer`
        RoomType roomType = roomTypeRepository.findById(roomDTO.getRoomTypeId())
                .orElseThrow(() -> new ResourceNotFoundException("Tipo de habitación con ID " + roomDTO.getRoomTypeId() + " no encontrado"));
        
        room.setRoomType(roomType);
        room.setDescription(roomDTO.getDescription());
        room.setPricePerNight(roomDTO.getPricePerNight());

        Room updatedRoom = roomRepository.save(room);
        return ResponseEntity.ok(roomMapper.toDTO(updatedRoom));
    }

    public ResponseEntity<Void> deleteRoom(Integer id) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Habitación con ID " + id + " no encontrada"));
        roomRepository.delete(room);
        return ResponseEntity.noContent().build();
    }
}