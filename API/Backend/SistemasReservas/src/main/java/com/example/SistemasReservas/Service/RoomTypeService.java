package com.example.SistemasReservas.Service;
import com.example.SistemasReservas.DTO.RoomTypeDTO;
import com.example.SistemasReservas.exception.ResourceNotFoundException;
import com.example.SistemasReservas.Mapper.RoomTypeMapper;
import com.example.SistemasReservas.model.RoomType;
import com.example.SistemasReservas.model.RoomImage;
import com.example.SistemasReservas.repository.RoomTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RoomTypeService {

    @Autowired
    private RoomTypeRepository roomTypeRepository;

    public List<RoomType> getAllRoomTypes() {
        return roomTypeRepository.findAll();
    }

    public ResponseEntity<RoomType> getRoomTypeById(Integer id) {
        RoomType roomType = roomTypeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tipo de habitación con ID " + id + " no encontrado"));
        return ResponseEntity.ok(roomType);
    }

    public ResponseEntity<RoomType> createRoomType(RoomType roomType) {
        RoomType savedRoomType = roomTypeRepository.save(roomType);
        return new ResponseEntity<>(savedRoomType, HttpStatus.CREATED);
    }

    public ResponseEntity<RoomType> updateRoomType(Integer id, RoomType roomTypeDetails) {
        RoomType roomType = roomTypeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tipo de habitación con ID " + id + " no encontrado"));

        roomType.setRoomTypeName(roomTypeDetails.getRoomTypeName());
        roomType.setDescription(roomTypeDetails.getDescription());
        roomType.setImages(roomTypeDetails.getImages());
        roomType.setPrices(roomTypeDetails.getPrices());

        RoomType updatedRoomType = roomTypeRepository.save(roomType);
        return ResponseEntity.ok(updatedRoomType);
    }

    public ResponseEntity<Void> deleteRoomType(Integer id) {
        RoomType roomType = roomTypeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tipo de habitación con ID " + id + " no encontrado"));
        roomTypeRepository.delete(roomType);
        return ResponseEntity.noContent().build();
    }
}