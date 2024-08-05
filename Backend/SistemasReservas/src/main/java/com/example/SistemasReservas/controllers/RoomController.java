package com.example.SistemasReservas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.SistemasReservas.model.Room;
import com.example.SistemasReservas.service.RoomService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

@Tag(name = "Endpoints de Habitaciones", description = "CRUD de habitaciones")
@RestController
@RequestMapping("/api/rooms")
@CrossOrigin(origins = "http://localhost:3000")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @Operation(summary = "Obtener todas las habitaciones")
    @GetMapping
    public List<Room> getAllRooms() {
        return roomService.getAllRooms();
    }

    @Operation(summary = "Obtener una habitación por ID")
    @GetMapping("/{id}")
    public ResponseEntity<Room> getRoomById(@PathVariable Integer id) {
        Room room = roomService.getRoomById(id);
        return room == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(room);
    }

    @Operation(summary = "Crear una nueva habitación")
    @PostMapping
    public ResponseEntity<Room> createRoom(@RequestBody Room room) {
        Room savedRoom = roomService.saveRoom(room);
        return new ResponseEntity<>(savedRoom, HttpStatus.CREATED);
    }

    @Operation(summary = "Actualizar una habitación existente")
    @PutMapping("/{id}")
    public ResponseEntity<Room> updateRoom(@PathVariable Integer id, @RequestBody Room roomDetails) {
        Room updatedRoom = roomService.updateRoom(id, roomDetails);
        return updatedRoom == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(updatedRoom);
    }

    @Operation(summary = "Eliminar una habitación")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRoom(@PathVariable Integer id) {
        roomService.deleteRoom(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Obtener habitaciones activas por estado")
    @GetMapping("/active-rooms")
    public List<Room> getActiveRooms(@RequestParam String status) {
        return roomService.findActiveRooms(status);
    }

}
