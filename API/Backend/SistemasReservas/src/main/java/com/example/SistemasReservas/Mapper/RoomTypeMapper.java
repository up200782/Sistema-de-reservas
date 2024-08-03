package com.example.SistemasReservas.Mapper;

 
import com.example.SistemasReservas.DTO.RoomTypeDTO;
import com.example.SistemasReservas.model.RoomType;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.example.SistemasReservas.DTO.RoomTypeDTO;
import com.example.SistemasReservas.model.RoomType;
import com.example.SistemasReservas.model.RoomImage;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface RoomTypeMapper {
    RoomTypeMapper INSTANCE = Mappers.getMapper(RoomTypeMapper.class);

    @Mapping(source = "prices", target = "prices")
    @Mapping(source = "images", target = "images")
    RoomTypeDTO toDTO(RoomType roomType);

    @Mapping(source = "prices", target = "prices")
    @Mapping(source = "images", target = "images")
    RoomType toEntity(RoomTypeDTO roomTypeDTO);

    default List<String> mapImagesToStrings(List<RoomImage> images) {
        return images.stream()
                .map(RoomImage::getImageUrl)
                .collect(Collectors.toList());
    }

    default List<RoomImage> mapStringsToImages(List<String> imageUrls) {
        return imageUrls.stream()
                .map(url -> {
                    RoomImage image = new RoomImage();
                    image.setImageUrl(url);
                    return image;
                })
                .collect(Collectors.toList());
    }
}