import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Fab
      color="primary"
      size="small"
      onClick={scrollToTop}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        display: visible ? 'inline-flex' : 'none',
      }}
    >
      <KeyboardArrowUp />
    </Fab>
  );
}

export default ScrollToTopButton;
