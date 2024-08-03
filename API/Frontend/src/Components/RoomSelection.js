import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const RoomTypeComponent = () => {
    const [roomTypes, setRoomTypes] = useState([]);
    const [selectedRooms, setSelectedRooms] = useState([]);
    const [numRooms, setNumRooms] = useState(1); // Ajusta el número según tus necesidades
    const [openDialog, setOpenDialog] = useState(false);
    const [adults, setAdults] = useState([]);
    const [children, setChildren] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/roomtypes')
            .then(response => response.json())
            .then(data => setRoomTypes(data));
    }, []);

    const handleSelectRoom = (room, price) => {
        if (selectedRooms.length < numRooms) {
            setSelectedRooms([...selectedRooms, { ...room, selectedPrice: price }]);
            setAdults([...adults, 0]);
            setChildren([...children, 0]);
        }
    };

    const handleConfirmSelection = () => {
        // Lógica para manejar la confirmación de la selección
        setOpenDialog(false);
    };

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                Seleccione el tipo de habitación que desee ({selectedRooms.length}/{numRooms})
            </Typography>
            <Grid container spacing={4}>
                {roomTypes.map((room, index) => (
                    <Grid item xs={12} key={index}>
                        <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ flex: 1 }}>
                                <Carousel navButtonsAlwaysVisible>
                                    {room.images.map((image, idx) => (
                                        <img
                                            key={idx}
                                            src={image}
                                            alt={`Slide ${idx}`}
                                            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                                        />
                                    ))}
                                </Carousel>
                            </Box>
                            <Box sx={{ flex: 1, p: 2 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {room.roomTypeName}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                                    {room.description}
                                </Typography>
                                {room.prices.map((price, idx) => (
                                    <Box key={idx} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                        <Typography variant="body1">{price.label} - {price.amount} MXN</Typography>
                                        <Button variant="outlined" color="primary" onClick={() => handleSelectRoom(room, price)}>
                                            Escoger
                                        </Button>
                                    </Box>
                                ))}
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Confirmación de Habitaciones</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">Ha seleccionado las siguientes habitaciones:</Typography>
                    <ul>
                        {selectedRooms.map((room, index) => (
                            <li key={index}>
                                {room.roomTypeName} - {room.selectedPrice.label} - {room.selectedPrice.amount} MXN
                                - Adultos: {adults[index]}, Niños: {children[index]}
                            </li>
                        ))}
                    </ul>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
                    <Button onClick={handleConfirmSelection} variant="contained" color="primary">
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default RoomTypeComponent;
