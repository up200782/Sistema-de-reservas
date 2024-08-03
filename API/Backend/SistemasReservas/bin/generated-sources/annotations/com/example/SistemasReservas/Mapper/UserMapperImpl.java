package com.example.SistemasReservas.Mapper;

import com.example.SistemasReservas.DTO.UserDTO;
import com.example.SistemasReservas.model.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-08-02T13:14:11-0600",
    comments = "version: 1.5.3.Final, compiler: Eclipse JDT (IDE) 3.39.0.v20240725-1906, environment: Java 17.0.11 (Eclipse Adoptium)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDTO toDTO(User user) {
        if ( user == null ) {
            return null;
        }

        UserDTO userDTO = new UserDTO();

        userDTO.setEmail( user.getEmail() );
        userDTO.setName( user.getName() );
        userDTO.setPasswordHash( user.getPasswordHash() );
        userDTO.setPhoneNumber( user.getPhoneNumber() );
        userDTO.setUserId( user.getUserId() );

        return userDTO;
    }

    @Override
    public User toEntity(UserDTO userDTO) {
        if ( userDTO == null ) {
            return null;
        }

        User user = new User();

        user.setEmail( userDTO.getEmail() );
        user.setName( userDTO.getName() );
        user.setPasswordHash( userDTO.getPasswordHash() );
        user.setPhoneNumber( userDTO.getPhoneNumber() );
        user.setUserId( userDTO.getUserId() );

        return user;
    }
}
