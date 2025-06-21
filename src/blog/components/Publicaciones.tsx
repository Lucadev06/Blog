'use client';
import { Box, Typography } from '@mui/material';
import { publicaciones } from './utils/cases';
import { CardPublicacion } from './CardPublicacion';

export const Publicaciones = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f2f2f2', minHeight: '100vh' }}>
      <Typography
        variant="h4"
        gutterBottom
        fontWeight="bold"
        textAlign="center"
        sx={{ color: '#111' }}
      >
        Publicaciones
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center',
        }}
      >
        {publicaciones.map((pub) => (
          <CardPublicacion
            key={pub.id}
            titulo={pub.titulo}
            resumen={pub.resumen}
            contenido={pub.contenido}
            imagen={pub.imagen}
          />
        ))}
      </Box>
    </Box>
  );
};
