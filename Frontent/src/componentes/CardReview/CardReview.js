import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CardReview() {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Título Oferta 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary"> 
          Conoce más
        </Button>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_XIHkcPxLWIpqbCBTrqLRDroIuCosa5o6g&s"
          alt="Oferta 1"
          style={{ width: "100%", height: "auto" }} 
        />
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsjjSpDrA797VT8Rszqb16GwXhTkxTcHCyJQ&s"
          alt="Oferta 2"
          style={{ width: "100%", height: "auto" }} 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Título Oferta 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Conoce más
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}

// Adaptar un botó  
// style={{ width: "150px", height: "50px", fontSize: "16px" }}
