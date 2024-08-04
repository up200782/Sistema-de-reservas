package com.example.SistemasReservas.Mapper;

import com.example.SistemasReservas.DTO.ReservationDTO;
import com.example.SistemasReservas.model.Reservation;
import com.example.SistemasReservas.model.Room;
import com.example.SistemasReservas.model.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-08-04T03:03:43-0600",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.7.jar, environment: Java 17.0.10 (Oracle Corporation)"
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
        reservationDTO.setReservationId( reservation.getReservationId() );
        reservationDTO.setCheckInDate( reservation.getCheckInDate() );
        reservationDTO.setCheckOutDate( reservation.getCheckOutDate() );
        reservationDTO.setTotalCost( reservation.getTotalCost() );
        if ( reservation.getStatus() != null ) {
            reservationDTO.setStatus( reservation.getStatus().name() );
        }

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
        reservation.setReservationId( reservationDTO.getReservationId() );
        reservation.setCheckInDate( reservationDTO.getCheckInDate() );
        reservation.setCheckOutDate( reservationDTO.getCheckOutDate() );
        reservation.setTotalCost( reservationDTO.getTotalCost() );
        if ( reservationDTO.getStatus() != null ) {
            reservation.setStatus( Enum.valueOf( Reservation.Status.class, reservationDTO.getStatus() ) );
        }

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
