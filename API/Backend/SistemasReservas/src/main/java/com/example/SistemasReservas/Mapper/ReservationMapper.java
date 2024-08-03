package com.example.SistemasReservas.Mapper;
 
import com.example.SistemasReservas.DTO.ReservationDTO;
import com.example.SistemasReservas.model.Reservation;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ReservationMapper {
    ReservationMapper INSTANCE = Mappers.getMapper(ReservationMapper.class);

    @Mapping(source = "user.userId", target = "userId")
    @Mapping(source = "room.roomId", target = "roomId")
    ReservationDTO toDTO(Reservation reservation);

    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "roomId", target = "room.roomId")
    Reservation toEntity(ReservationDTO reservationDTO);
}