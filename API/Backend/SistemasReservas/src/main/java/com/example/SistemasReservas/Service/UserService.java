package com.example.SistemasReservas.Service;

import com.example.SistemasReservas.DTO.UserDTO;
import com.example.SistemasReservas.exception.ResourceNotFoundException;
import com.example.SistemasReservas.Mapper.UserMapper;
import com.example.SistemasReservas.model.User;
import com.example.SistemasReservas.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
                .map(userMapper::toDTO)
                .collect(Collectors.toList());
    }

    public ResponseEntity<UserDTO> getUserById(Integer id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario con ID " + id + " no encontrado"));
        return ResponseEntity.ok(userMapper.toDTO(user));
    }

    public ResponseEntity<UserDTO> createUser(UserDTO userDTO) {
        User user = userMapper.toEntity(userDTO);
        User savedUser = userRepository.save(user);
        return new ResponseEntity<>(userMapper.toDTO(savedUser), HttpStatus.CREATED);
    }

    public ResponseEntity<UserDTO> updateUser(Integer id, UserDTO userDTO) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario con ID " + id + " no encontrado"));

        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPhoneNumber(userDTO.getPhoneNumber());
        user.setPasswordHash(userDTO.getPasswordHash());

        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(userMapper.toDTO(updatedUser));
    }

    public ResponseEntity<Void> deleteUser(Integer id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario con ID " + id + " no encontrado"));
        userRepository.delete(user);
        return ResponseEntity.noContent().build();
    }
}