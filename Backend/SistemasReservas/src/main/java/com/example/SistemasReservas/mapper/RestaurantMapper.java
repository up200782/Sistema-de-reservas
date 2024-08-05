package com.example.SistemasReservas.mapper;

import com.example.SistemasReservas.dto.CreateRestaurantDTO;
import com.example.SistemasReservas.dto.RestaurantDTO;
import com.example.SistemasReservas.model.Restaurant;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RestaurantMapper {

    RestaurantDTO toRestaurantDTO(Restaurant restaurant);

    Restaurant toRestaurant(CreateRestaurantDTO createRestaurantDTO);
}
