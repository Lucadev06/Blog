
import {Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        gap: "1rem",
        backgroundColor: "black", // Fondo gris claro
      }}
    >
      <Typography variant="body1" sx={{ color: "white" }}>
        2025 © Luca Simonazzi
      </Typography>
    </Box>
  );
}
