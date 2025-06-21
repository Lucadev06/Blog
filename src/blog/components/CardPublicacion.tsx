'use client';
import { Box, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useState } from 'react';
import { VerMas } from './VerMas';

interface Props {
  titulo: string;
  resumen: string;
  contenido: string;
  imagen: string;
}

export const CardPublicacion = ({ titulo, resumen, contenido, imagen }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '45%', md: '45%' },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: '100%',
          height: '200px',
          objectFit: 'contain',
          backgroundColor: '#fafafa',
        }}
        image={imagen}
        alt={titulo}
      />

      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginY: 1 }}>
          {resumen}
        </Typography>
        <Button variant="outlined" color="error" onClick={() => setIsOpen(true)}>
          Leer más
        </Button>
      </CardContent>

      <VerMas
        open={isOpen}
        onClose={() => setIsOpen(false)}
        caso={{
          title: titulo,
          image: imagen,
          content: contenido,
        }}
      />
    </Box>
  );
};
