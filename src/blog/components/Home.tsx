import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: "87vh",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#121212",
                color: "white",
                gap: "2rem",
            }}
        >
            <Typography variant="h3" fontWeight="bold" color="red">
                Bienvenido a El Precio del Ring
            </Typography>

            <Typography variant="h6" sx={{ maxWidth: "600px" }}>
                Este blog analiza los efectos neurológicos y riesgos cerebrales que sufren los atletas de deportes de combate como el boxeo, MMA y artes marciales. Buscamos generar conciencia sobre las consecuencias a largo plazo.
            </Typography>

            <Button
                variant="contained"
                color="error"
                size="large"
                onClick={() => navigate("/blog/publicaciones")}
            >
                Ver publicaciones
            </Button>
        </Box>
    );
};
