package com.example.SistemasReservas.Mapper;

 
import com.example.SistemasReservas.DTO.RoomDTO;
import com.example.SistemasReservas.model.Room;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface RoomMapper {
    RoomMapper INSTANCE = Mappers.getMapper(RoomMapper.class);

    @Mapping(source = "roomType.roomTypeId", target = "roomTypeId")
    RoomDTO toDTO(Room room);

    @Mapping(source = "roomTypeId", target = "roomType.roomTypeId")
    Room toEntity(RoomDTO roomDTO);
}