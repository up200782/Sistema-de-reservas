package main.java.com.example.SistemasReservas.Controller;

import com.example.SistemasReservas.model.RoomImage;
import com.example.SistemasReservas.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/images")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @GetMapping("/room/{roomTypeId}")
    public List<RoomImage> getImagesByRoomTypeId(@PathVariable Long roomTypeId) {
        return imageService.getImagesByRoomTypeId(roomTypeId);
    }
}
