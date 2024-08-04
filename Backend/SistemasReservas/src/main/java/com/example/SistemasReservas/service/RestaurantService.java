package com.example.SistemasReservas.service;

import com.example.SistemasReservas.dto.CreateRestaurantDTO;
import com.example.SistemasReservas.dto.RestaurantDTO;
import com.example.SistemasReservas.exception.ExcepcionRecursoNoEncontrado;
import com.example.SistemasReservas.mapper.RestaurantMapper;
import com.example.SistemasReservas.model.Restaurant;
import com.example.SistemasReservas.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private RestaurantMapper restaurantMapper;

    public List<RestaurantDTO> getAllRestaurants() {
        return restaurantRepository.findAll().stream()
                .map(restaurantMapper::toRestaurantDTO)
                .collect(Collectors.toList());
    }

    public RestaurantDTO getRestaurantById(Integer id) throws ExcepcionRecursoNoEncontrado {
        return restaurantRepository.findById(id)
                .map(restaurantMapper::toRestaurantDTO)
                .orElseThrow(() -> new ExcepcionRecursoNoEncontrado("Restaurante no encontrado con id " + id));
    }

    public RestaurantDTO createRestaurant(CreateRestaurantDTO createRestaurantDTO) {
        Restaurant restaurant = restaurantMapper.toRestaurant(createRestaurantDTO);
        restaurant = restaurantRepository.save(restaurant);
        return restaurantMapper.toRestaurantDTO(restaurant);
    }

    public RestaurantDTO updateRestaurant(Integer id, CreateRestaurantDTO createRestaurantDTO) throws ExcepcionRecursoNoEncontrado {
        Restaurant restaurant = restaurantRepository.findById(id)
                .orElseThrow(() -> new ExcepcionRecursoNoEncontrado("Restaurante no encontrado con id " + id));
        
        restaurant.setName(createRestaurantDTO.getName());
        restaurant.setDescription(createRestaurantDTO.getDescription());
        restaurant.setImageUrl(createRestaurantDTO.getImageUrl());
        restaurant.setOpenTime(createRestaurantDTO.getOpenTime());
        restaurant.setCloseTime(createRestaurantDTO.getCloseTime());

        return restaurantMapper.toRestaurantDTO(restaurantRepository.save(restaurant));
    }

    public void deleteRestaurant(Integer id) {
        restaurantRepository.deleteById(id);
    }
}
