package main.java.com.example.SistemasReservas.Service;

import com.example.SistemasReservas.model.RoomImage;

import java.util.List;

public interface ImageService {
    List<RoomImage> getImagesByRoomTypeId(Long roomTypeId);
}
