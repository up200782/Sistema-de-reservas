package com.example.SistemasReservas.Mapper;

import com.example.SistemasReservas.DTO.RoomTypeDTO;
import com.example.SistemasReservas.model.RoomPrice;
import com.example.SistemasReservas.model.RoomType;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-08-02T13:14:10-0600",
    comments = "version: 1.5.3.Final, compiler: Eclipse JDT (IDE) 3.39.0.v20240725-1906, environment: Java 17.0.11 (Eclipse Adoptium)"
)
@Component
public class RoomTypeMapperImpl implements RoomTypeMapper {

    @Override
    public RoomTypeDTO toDTO(RoomType roomType) {
        if ( roomType == null ) {
            return null;
        }

        RoomTypeDTO roomTypeDTO = new RoomTypeDTO();

        roomTypeDTO.setPrices( roomPriceListToPriceDTOList( roomType.getPrices() ) );
        roomTypeDTO.setImages( mapImagesToStrings( roomType.getImages() ) );
        roomTypeDTO.setDescription( roomType.getDescription() );
        roomTypeDTO.setRoomTypeId( roomType.getRoomTypeId() );
        roomTypeDTO.setRoomTypeName( roomType.getRoomTypeName() );

        return roomTypeDTO;
    }

    @Override
    public RoomType toEntity(RoomTypeDTO roomTypeDTO) {
        if ( roomTypeDTO == null ) {
            return null;
        }

        RoomType roomType = new RoomType();

        roomType.setPrices( priceDTOListToRoomPriceList( roomTypeDTO.getPrices() ) );
        roomType.setImages( mapStringsToImages( roomTypeDTO.getImages() ) );
        roomType.setDescription( roomTypeDTO.getDescription() );
        roomType.setRoomTypeId( roomTypeDTO.getRoomTypeId() );
        roomType.setRoomTypeName( roomTypeDTO.getRoomTypeName() );

        return roomType;
    }

    protected RoomTypeDTO.PriceDTO roomPriceToPriceDTO(RoomPrice roomPrice) {
        if ( roomPrice == null ) {
            return null;
        }

        RoomTypeDTO.PriceDTO priceDTO = new RoomTypeDTO.PriceDTO();

        priceDTO.setAmount( roomPrice.getAmount() );
        priceDTO.setLabel( roomPrice.getLabel() );

        return priceDTO;
    }

    protected List<RoomTypeDTO.PriceDTO> roomPriceListToPriceDTOList(List<RoomPrice> list) {
        if ( list == null ) {
            return null;
        }

        List<RoomTypeDTO.PriceDTO> list1 = new ArrayList<RoomTypeDTO.PriceDTO>( list.size() );
        for ( RoomPrice roomPrice : list ) {
            list1.add( roomPriceToPriceDTO( roomPrice ) );
        }

        return list1;
    }

    protected RoomPrice priceDTOToRoomPrice(RoomTypeDTO.PriceDTO priceDTO) {
        if ( priceDTO == null ) {
            return null;
        }

        RoomPrice roomPrice = new RoomPrice();

        roomPrice.setAmount( priceDTO.getAmount() );
        roomPrice.setLabel( priceDTO.getLabel() );

        return roomPrice;
    }

    protected List<RoomPrice> priceDTOListToRoomPriceList(List<RoomTypeDTO.PriceDTO> list) {
        if ( list == null ) {
            return null;
        }

        List<RoomPrice> list1 = new ArrayList<RoomPrice>( list.size() );
        for ( RoomTypeDTO.PriceDTO priceDTO : list ) {
            list1.add( priceDTOToRoomPrice( priceDTO ) );
        }

        return list1;
    }
}
