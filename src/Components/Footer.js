import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#D32F2F', color: 'white', py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body2" paragraph>
              Aquí va la dirección y otra información de contacto relevante.
            </Typography>
            <Typography variant="body2">
              Más detalles de contacto, horarios de atención, etc.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Síguenos
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link href="https://www.instagram.com/hoteles_encore/?hl=es-la" color="inherit" target="_blank" rel="noopener noreferrer">
                    <IconButton color="inherit"><InstagramIcon /></IconButton>
                    Instagram
                  </Link>
                  <Link href="https://www.hotelesencore.com/directorio" color="inherit" target="_blank" rel="noopener noreferrer">
                    <IconButton color="inherit"><WhatsAppIcon /></IconButton>
                    WhatsApp
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link href="https://x.com/hotelesencore?lang=es" color="inherit" target="_blank" rel="noopener noreferrer">
                    <IconButton color="inherit"><TwitterIcon /></IconButton>
                    Twitter
                  </Link>
                  <Link href="https://www.facebook.com/encoreags/?locale=es_LA" color="inherit" target="_blank" rel="noopener noreferrer">
                    <IconButton color="inherit"><FacebookIcon /></IconButton>
                    Facebook
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
