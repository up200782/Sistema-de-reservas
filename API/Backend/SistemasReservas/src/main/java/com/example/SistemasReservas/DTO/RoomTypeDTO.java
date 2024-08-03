package com.example.SistemasReservas.DTO;

 import lombok.Data;
 import java.util.List;
 
 @Data
 public class RoomTypeDTO {
     private Integer roomTypeId;
     private String roomTypeName;
     private String description;
     private List<String> images;
     private List<PriceDTO> prices;
 
     @Data
     public static class PriceDTO {
         private String label;
         private Double amount;
     }
 }