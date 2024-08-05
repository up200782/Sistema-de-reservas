import React from 'react';
import { Box } from '@mui/material';

function Map() {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.2443731024677!2d-102.29358648468083!3d21.842583885555875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429edb73fb3d299%3A0x53e363de1c2dcc8f!2sRamada%20Encore%20By%20Wyndham%20Aguascalientes!5e0!3m2!1sen!2smx!4v1691310065261!5m2!1sen!2smx";

  return (
    <Box sx={{ width: '100%', height: '400px', border: 0 }}>
      <iframe
        title="mapa"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        src={mapSrc}
        style={{ border: 0 }}
      ></iframe>
    </Box>
  );
}

export default Map;
