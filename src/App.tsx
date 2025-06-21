import { Button, Box, Typography } from '@mui/material'
import './App.css'

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage:
          'url("https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        padding: '2rem',
      }}
    >
      <Box
        sx={{
          width: '90%',
          maxWidth: '25rem',
          aspectRatio: '1 / 1',
          clipPath:
            'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
          backgroundColor: '#fff3db',
          boxShadow: '0 12px 36px rgba(0,0,0,0.2)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="/imagen-animada.png"
          alt="Logo"
          style={{
            width: '60%',
            objectFit: 'contain',
          }}
        />
      </Box>

      <Typography
        variant="h5"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          textShadow: '0px 0px 10px black',
          textAlign: 'center',
        }}
      >
        Luca Simonazzi - Desarrollador Frontend
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          width: '100%',
          maxWidth: '20rem',
        }}
      >
        <a
          href="IDENTIKIT/index.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', width: '100%' }}
        >
          <Button variant="contained" fullWidth color="primary">
            IDENTIKIT
          </Button>
        </a>

        <a href="/blog" style={{ textDecoration: 'none', width: '100%' }}>
          <Button variant="contained" fullWidth color="secondary">
            BLOG
          </Button>
        </a>

        <Button
          variant="contained"
          fullWidth
          color="success"
          onClick={() => window.open('https://lucasimonazzi.netlify.app', '_blank')}
        >
          PORTFOLIO
        </Button>

      </Box>
    </Box>
  )
}

export default App
