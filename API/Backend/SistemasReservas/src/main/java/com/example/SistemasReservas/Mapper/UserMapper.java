package com.example.SistemasReservas.Mapper;

 
import com.example.SistemasReservas.DTO.UserDTO;
import com.example.SistemasReservas.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserDTO toDTO(User user);

    User toEntity(UserDTO userDTO);
}