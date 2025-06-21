'use client';
import { Box, Typography, Divider } from '@mui/material';

export const SobreMi = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1000px',
        mx: 'auto',
        px: 2,
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        color: '#111', // texto negro por defecto
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        sx={{ color: 'red', mb: 4 }}
      >
        Sobre mí
      </Typography>

      <Box>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'red', mb: 2 }}>
          Quién soy
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
          Soy <strong style={{ color: 'red' }}>Luca Simonazzi</strong>, desarrollador frontend y estudiante de Licenciatura en Sistemas.
          Me apasiona crear experiencias web atractivas, funcionales y accesibles, combinando diseño y tecnología.
          Siempre busco aprender y mejorar, enfrentando nuevos desafíos con entusiasmo.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: 'red' }} />

      <Box>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'red', mb: 2 }}>
          Intereses
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
          - Desarrollo de interfaces modernas con <strong style={{ color: 'red' }}>React</strong> y <strong style={{ color: 'red' }}>Next.js</strong> <br />
          - Diseño visual y experiencia de usuario (UX) <br />
          - Aprendizaje constante de nuevas tecnologías <br />
          - Optimización de rendimiento y buenas prácticas de código
        </Typography>
      </Box>

      <Divider sx={{ borderColor: 'red' }} />

      <Box>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'red', mb: 2 }}>
          Hobbies
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
          Cuando no estoy programando, disfruto entrenar en el gimnasio, seguir el mundo del <strong style={{ color: 'red' }}>fútbol</strong> y de la <strong style={{ color: 'red' }}>UFC</strong>, y compartir buenos momentos con un mate siempre cerca.
          Creo en mantener un equilibrio entre la vida personal y profesional para potenciar la creatividad.
        </Typography>
      </Box>
    </Box>
  );
};
