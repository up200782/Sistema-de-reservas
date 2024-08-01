import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, Typography} from '@mui/material';

const items = [
  {
    name: "Hotel de Lujo",
    description: "Disfruta de una estancia de lujo en nuestro hotel",
    image: "/assets/Img/hotel1.jpg"
  },
  {
    name: "Habitación Doble",
    description: "Habitaciones dobles cómodas y espaciosas",
    image: "/assets/Img/hotel2.jpg"
  },
  {
    name: "Piscina",
    description: "Relájate en nuestra piscina de clase mundial",
    image: "/assets/Img/hotel3.jpg"
  }
];

function ImageCarousel() {
  return (
    <Box sx={{ mt: 2}}>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}

function Item(props) {
  return (
    <Paper sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
      <Box sx={{ flex: 1, padding: 2 }}>
        <Typography variant="h5">{props.item.name}</Typography>
        <Typography variant="body1">{props.item.description}</Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <img src={props.item.image} alt={props.item.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      </Box>
    </Paper>
  );
}

export default ImageCarousel;
