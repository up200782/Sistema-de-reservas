package com.example.SistemasReservas.Mapper;

import com.example.SistemasReservas.DTO.ReservationDTO;
import com.example.SistemasReservas.model.Reservation;
import com.example.SistemasReservas.model.Room;
import com.example.SistemasReservas.model.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-08-02T13:14:11-0600",
    comments = "version: 1.5.3.Final, compiler: Eclipse JDT (IDE) 3.39.0.v20240725-1906, environment: Java 17.0.11 (Eclipse Adoptium)"
)
@Component
public class ReservationMapperImpl implements ReservationMapper {

    @Override
    public ReservationDTO toDTO(Reservation reservation) {
        if ( reservation == null ) {
            return null;
        }

        ReservationDTO reservationDTO = new ReservationDTO();

        reservationDTO.setUserId( reservationUserUserId( reservation ) );
        reservationDTO.setRoomId( reservationRoomRoomId( reservation ) );
        reservationDTO.setCheckInDate( reservation.getCheckInDate() );
        reservationDTO.setCheckOutDate( reservation.getCheckOutDate() );
        reservationDTO.setReservationId( reservation.getReservationId() );
        if ( reservation.getStatus() != null ) {
            reservationDTO.setStatus( reservation.getStatus().name() );
        }
        reservationDTO.setTotalCost( reservation.getTotalCost() );

        return reservationDTO;
    }

    @Override
    public Reservation toEntity(ReservationDTO reservationDTO) {
        if ( reservationDTO == null ) {
            return null;
        }

        Reservation reservation = new Reservation();

        reservation.setUser( reservationDTOToUser( reservationDTO ) );
        reservation.setRoom( reservationDTOToRoom( reservationDTO ) );
        reservation.setCheckInDate( reservationDTO.getCheckInDate() );
        reservation.setCheckOutDate( reservationDTO.getCheckOutDate() );
        reservation.setReservationId( reservationDTO.getReservationId() );
        if ( reservationDTO.getStatus() != null ) {
            reservation.setStatus( Enum.valueOf( Reservation.Status.class, reservationDTO.getStatus() ) );
        }
        reservation.setTotalCost( reservationDTO.getTotalCost() );

        return reservation;
    }

    private Integer reservationUserUserId(Reservation reservation) {
        if ( reservation == null ) {
            return null;
        }
        User user = reservation.getUser();
        if ( user == null ) {
            return null;
        }
        Integer userId = user.getUserId();
        if ( userId == null ) {
            return null;
        }
        return userId;
    }

    private Integer reservationRoomRoomId(Reservation reservation) {
        if ( reservation == null ) {
            return null;
        }
        Room room = reservation.getRoom();
        if ( room == null ) {
            return null;
        }
        Integer roomId = room.getRoomId();
        if ( roomId == null ) {
            return null;
        }
        return roomId;
    }

    protected User reservationDTOToUser(ReservationDTO reservationDTO) {
        if ( reservationDTO == null ) {
            return null;
        }

        User user = new User();

        user.setUserId( reservationDTO.getUserId() );

        return user;
    }

    protected Room reservationDTOToRoom(ReservationDTO reservationDTO) {
        if ( reservationDTO == null ) {
            return null;
        }

        Room room = new Room();

        room.setRoomId( reservationDTO.getRoomId() );

        return room;
    }
}
