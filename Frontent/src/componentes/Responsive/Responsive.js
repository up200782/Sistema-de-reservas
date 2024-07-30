import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Responsive.css"

function Responsive() {
  //const imagePath = "D:/ISC08B/DiseñoInterfaces/Sistema-de-reservas/Frontent/src/images/";

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {[
          "https://www.mator.es/wp-content/webpc-passthru.php?src=https://www.mator.es/wp-content/uploads/2020/09/limpiezahabitaciondehotel.jpg&nocache=1",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO5aRzxcFUT-vLASuwp-2ET-Fm9zxxy3Yx6g&s",
          "https://static.abc.es/Media/201504/27/hotel12--644x362.jpg",
          "https://simex.es/wp-content/uploads/2022/07/point3d-commercial-imaging-ltd-Kqpw00namok-unsplash.jpg",
          "https://www.stanzahotel.com/wp-content/uploads/2023/10/habitacion_Sencilla_5.jpg",
          "https://emprendedores.es/wp-content/uploads/iStock-907621754-e1639556826504-1024x576.jpg",
          "https://www.sofitelbarucalablanca.com/wp-content/uploads/sites/19/2023/04/DUF_8644-v-ok-1170x780.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvpNOecuAhtb8HpOzBgPesKcEe5_NQnQExg&s"
        ].map((src, index) => (
          <div key={index}>
            <h3>{index + 1}</h3>
            <img 
              src={src} 
              alt={`Habitacion ${index + 1}`} 
              style={{ 
                width: "100%", 
                height: "200px", // Ajusta la altura deseada
                objectFit: "cover" // Ajusta el ajuste de la imagen
              }} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;

