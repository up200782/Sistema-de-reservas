package com.example.SistemasReservas.controllers;

import com.example.SistemasReservas.dto.CreateRestaurantDTO;
import com.example.SistemasReservas.dto.RestaurantDTO;
import com.example.SistemasReservas.exception.ExcepcionRecursoNoEncontrado;
import com.example.SistemasReservas.service.RestaurantService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@Tag(name = "Endpoints de Restaurantes", description = "CRUD de restaurantes")
@RestController
@RequestMapping("/api/restaurants")
@CrossOrigin(origins = "http://localhost:3000")
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @Operation(summary = "Obtener todos los restaurantes")
    @GetMapping
    public ResponseEntity<List<RestaurantDTO>> getAllRestaurants() {
        return ResponseEntity.ok(restaurantService.getAllRestaurants());
    }

    @Operation(summary = "Obtener un restaurante por ID")
    @GetMapping("/{id}")
    public ResponseEntity<RestaurantDTO> getRestaurantById(@PathVariable Integer id) throws ExcepcionRecursoNoEncontrado {
        return ResponseEntity.ok(restaurantService.getRestaurantById(id));
    }

    @Operation(summary = "Crear un nuevo restaurante")
    @PostMapping
    public ResponseEntity<RestaurantDTO> createRestaurant(@Valid @RequestBody CreateRestaurantDTO createRestaurantDTO) {
        return new ResponseEntity<>(restaurantService.createRestaurant(createRestaurantDTO), HttpStatus.CREATED);
    }

    @Operation(summary = "Actualizar un restaurante existente")
    @PutMapping("/{id}")
    public ResponseEntity<RestaurantDTO> updateRestaurant(@PathVariable Integer id, @Valid @RequestBody CreateRestaurantDTO createRestaurantDTO) throws ExcepcionRecursoNoEncontrado {
        return ResponseEntity.ok(restaurantService.updateRestaurant(id, createRestaurantDTO));
    }

    @Operation(summary = "Eliminar un restaurante")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRestaurant(@PathVariable Integer id) {
        restaurantService.deleteRestaurant(id);
        return ResponseEntity.noContent().build();
    }
}
