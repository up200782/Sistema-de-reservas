package main.java.com.example.SistemasReservas.Serviceimpl;

import com.example.SistemasReservas.model.RoomImage;
import com.example.SistemasReservas.repository.ImageRepository;
import com.example.SistemasReservas.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageServiceImpl implements ImageService {

    @Autowired
    private ImageRepository imageRepository;

    @Override
    public List<RoomImage> getImagesByRoomTypeId(Long roomTypeId) {
        return imageRepository.findByRoomTypeId(roomTypeId);
    }
}

