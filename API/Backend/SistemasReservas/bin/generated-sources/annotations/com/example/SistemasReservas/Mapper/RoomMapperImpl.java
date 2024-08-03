package com.example.SistemasReservas.Mapper;

import com.example.SistemasReservas.DTO.RoomDTO;
import com.example.SistemasReservas.model.Room;
import com.example.SistemasReservas.model.RoomType;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-08-02T13:14:11-0600",
    comments = "version: 1.5.3.Final, compiler: Eclipse JDT (IDE) 3.39.0.v20240725-1906, environment: Java 17.0.11 (Eclipse Adoptium)"
)
@Component
public class RoomMapperImpl implements RoomMapper {

    @Override
    public RoomDTO toDTO(Room room) {
        if ( room == null ) {
            return null;
        }

        RoomDTO roomDTO = new RoomDTO();

        roomDTO.setRoomTypeId( roomRoomTypeRoomTypeId( room ) );
        roomDTO.setDescription( room.getDescription() );
        roomDTO.setPricePerNight( room.getPricePerNight() );
        roomDTO.setRoomId( room.getRoomId() );
        roomDTO.setRoomNumber( room.getRoomNumber() );

        return roomDTO;
    }

    @Override
    public Room toEntity(RoomDTO roomDTO) {
        if ( roomDTO == null ) {
            return null;
        }

        Room room = new Room();

        room.setRoomType( roomDTOToRoomType( roomDTO ) );
        room.setDescription( roomDTO.getDescription() );
        room.setPricePerNight( roomDTO.getPricePerNight() );
        room.setRoomId( roomDTO.getRoomId() );
        room.setRoomNumber( roomDTO.getRoomNumber() );

        return room;
    }

    private Integer roomRoomTypeRoomTypeId(Room room) {
        if ( room == null ) {
            return null;
        }
        RoomType roomType = room.getRoomType();
        if ( roomType == null ) {
            return null;
        }
        Integer roomTypeId = roomType.getRoomTypeId();
        if ( roomTypeId == null ) {
            return null;
        }
        return roomTypeId;
    }

    protected RoomType roomDTOToRoomType(RoomDTO roomDTO) {
        if ( roomDTO == null ) {
            return null;
        }

        RoomType roomType = new RoomType();

        roomType.setRoomTypeId( roomDTO.getRoomTypeId() );

        return roomType;
    }
}
