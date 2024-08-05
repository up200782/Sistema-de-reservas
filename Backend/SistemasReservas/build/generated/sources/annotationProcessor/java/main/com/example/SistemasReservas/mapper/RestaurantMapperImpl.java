package com.example.SistemasReservas.mapper;

import com.example.SistemasReservas.dto.CreateRestaurantDTO;
import com.example.SistemasReservas.dto.RestaurantDTO;
import com.example.SistemasReservas.model.Restaurant;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-08-04T19:38:19-0600",
    comments = "version: 1.5.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.7.jar, environment: Java 17.0.10 (Oracle Corporation)"
)
@Component
public class RestaurantMapperImpl implements RestaurantMapper {

    @Override
    public RestaurantDTO toRestaurantDTO(Restaurant restaurant) {
        if ( restaurant == null ) {
            return null;
        }

        RestaurantDTO restaurantDTO = new RestaurantDTO();

        restaurantDTO.setRestaurantId( restaurant.getRestaurantId() );
        restaurantDTO.setName( restaurant.getName() );
        restaurantDTO.setDescription( restaurant.getDescription() );
        restaurantDTO.setImageUrl( restaurant.getImageUrl() );
        restaurantDTO.setOpenTime( restaurant.getOpenTime() );
        restaurantDTO.setCloseTime( restaurant.getCloseTime() );

        return restaurantDTO;
    }

    @Override
    public Restaurant toRestaurant(CreateRestaurantDTO createRestaurantDTO) {
        if ( createRestaurantDTO == null ) {
            return null;
        }

        Restaurant restaurant = new Restaurant();

        restaurant.setName( createRestaurantDTO.getName() );
        restaurant.setDescription( createRestaurantDTO.getDescription() );
        restaurant.setImageUrl( createRestaurantDTO.getImageUrl() );
        restaurant.setOpenTime( createRestaurantDTO.getOpenTime() );
        restaurant.setCloseTime( createRestaurantDTO.getCloseTime() );

        return restaurant;
    }
}
