import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./CardReview.css";

export default function CardReview() {
  return (
    <div className="card-container">
      <Card className="card">
        <div className="card-content-overlay">
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="div" className="card-title">
              Título Oferta 1
            </Typography>
            <Typography variant="body2" color="text.secondary" className="card-description">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            <CardActions className="card-actions">
            <Button size="small" color="primary">
              Conoce más
            </Button>
          </CardActions>
          </CardContent>
        </div>
        <CardActionArea>
          <CardMedia
            component="img"
            className="card-media"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKQwWLhTrncBIivK76fokVNDNqxTNclulZw&s"
            alt="Oferta 1"
          />
        </CardActionArea>
      </Card>

      <Card className="card">
        <div className="card-content-overlay">
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="div" className="card-title">
              Título Oferta 2
            </Typography>
            <Typography variant="body2" color="text.secondary" className="card-description">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          <CardActions className="card-actions">
            <Button size="small" color="primary">
              Conoce más
            </Button>
          </CardActions>
          </CardContent>
        </div>
        <CardActionArea>
          <CardMedia
            component="img"
            className="card-media"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_XIHkcPxLWIpqbCBTrqLRDroIuCosa5o6g&s"
            alt="Oferta 2"
          />
        </CardActionArea>
      </Card>
    </div>
  );
}

// dentro de etiqueta card -> sx={{ maxWidth: 345 }}
// Adaptar un botó  
// style={{ width: "150px", height: "50px", fontSize: "16px" }}
