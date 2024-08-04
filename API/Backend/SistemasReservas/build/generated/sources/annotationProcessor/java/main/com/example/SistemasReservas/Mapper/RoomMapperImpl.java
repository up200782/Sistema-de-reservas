package com.example.SistemasReservas.Mapper;

import com.example.SistemasReservas.DTO.RoomDTO;
import com.example.SistemasReservas.model.Room;
import com.example.SistemasReservas.model.RoomType;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-08-04T03:03:43-0600",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.7.jar, environment: Java 17.0.10 (Oracle Corporation)"
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
        roomDTO.setRoomId( room.getRoomId() );
        roomDTO.setRoomNumber( room.getRoomNumber() );
        roomDTO.setDescription( room.getDescription() );
        roomDTO.setPricePerNight( room.getPricePerNight() );

        return roomDTO;
    }

    @Override
    public Room toEntity(RoomDTO roomDTO) {
        if ( roomDTO == null ) {
            return null;
        }

        Room room = new Room();

        room.setRoomType( roomDTOToRoomType( roomDTO ) );
        room.setRoomId( roomDTO.getRoomId() );
        room.setRoomNumber( roomDTO.getRoomNumber() );
        room.setDescription( roomDTO.getDescription() );
        room.setPricePerNight( roomDTO.getPricePerNight() );

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
