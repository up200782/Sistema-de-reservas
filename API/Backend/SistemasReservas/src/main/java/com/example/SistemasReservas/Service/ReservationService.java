package com.example.SistemasReservas.Service;
import com.example.SistemasReservas.DTO.ReservationDTO;
import com.example.SistemasReservas.exception.ResourceNotFoundException;
import com.example.SistemasReservas.Mapper.ReservationMapper;
import com.example.SistemasReservas.model.Reservation;
import com.example.SistemasReservas.model.User;
import com.example.SistemasReservas.model.Room;
import com.example.SistemasReservas.repository.ReservationRepository;
import com.example.SistemasReservas.repository.UserRepository;
import com.example.SistemasReservas.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private ReservationMapper reservationMapper;

    public List<ReservationDTO> getAllReservations() {
        return reservationRepository.findAll().stream()
                .map(reservationMapper::toDTO)
                .collect(Collectors.toList());
    }

    public ResponseEntity<ReservationDTO> getReservationById(Integer id) {
        Reservation reservation = reservationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Reservación con ID " + id + " no encontrada"));
        return ResponseEntity.ok(reservationMapper.toDTO(reservation));
    }

    public ResponseEntity<ReservationDTO> createReservation(ReservationDTO reservationDTO) {
        Reservation reservation = reservationMapper.toEntity(reservationDTO);
        reservation.setUser(userRepository.findById(reservationDTO.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("Usuario con ID " + reservationDTO.getUserId() + " no encontrado")));
        reservation.setRoom(roomRepository.findById(reservationDTO.getRoomId())
                .orElseThrow(() -> new ResourceNotFoundException("Habitación con ID " + reservationDTO.getRoomId() + " no encontrada")));

        Reservation savedReservation = reservationRepository.save(reservation);
        return new ResponseEntity<>(reservationMapper.toDTO(savedReservation), HttpStatus.CREATED);
    }

    public ResponseEntity<ReservationDTO> updateReservation(Integer id, ReservationDTO reservationDTO) {
        Reservation reservation = reservationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Reservación con ID " + id + " no encontrada"));

        reservation.setUser(userRepository.findById(reservationDTO.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("Usuario con ID " + reservationDTO.getUserId() + " no encontrado")));
        reservation.setRoom(roomRepository.findById(reservationDTO.getRoomId())
                .orElseThrow(() -> new ResourceNotFoundException("Habitación con ID " + reservationDTO.getRoomId() + " no encontrada")));
        reservation.setCheckInDate(reservationDTO.getCheckInDate());
        reservation.setCheckOutDate(reservationDTO.getCheckOutDate());
        reservation.setTotalCost(reservationDTO.getTotalCost());
        reservation.setStatus(Reservation.Status.valueOf(reservationDTO.getStatus()));

        Reservation updatedReservation = reservationRepository.save(reservation);
        return ResponseEntity.ok(reservationMapper.toDTO(updatedReservation));
    }

    public ResponseEntity<Void> deleteReservation(Integer id) {
        Reservation reservation = reservationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Reservación con ID " + id + " no encontrada"));
        reservationRepository.delete(reservation);
        return ResponseEntity.noContent().build();
    }
}