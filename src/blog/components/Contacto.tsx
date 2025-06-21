import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

export const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const formData = { name, email, message };

    const response = await fetch("https://formspree.io/f/manozrnr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setName("");
      setEmail("");
      setMessage("");
      setIsSent(true);
    } else {
      alert("Hubo un error al enviar el mensaje.");
    }

    setIsSending(false);
    setTimeout(() => {
      setIsSent(false);
      navigate("/blog/publicaciones");
    }, 3000);
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#f44336" },
      "&:hover fieldset": { borderColor: "#ff7961" },
      "&.Mui-focused fieldset": { borderColor: "#f44336" },
    },
    "& input, & textarea": {
      color: "white",
    },
    "& input:-webkit-autofill, & textarea:-webkit-autofill": {
      boxShadow: "0 0 0 1000px #121212 inset",
      WebkitTextFillColor: "white",
      caretColor: "white",
    },
    "& input:-webkit-autofill:focus, & textarea:-webkit-autofill:focus": {
      boxShadow: "0 0 0 1000px #121212 inset",
      WebkitTextFillColor: "white",
    },
    "& input:-webkit-autofill:hover, & textarea:-webkit-autofill:hover": {
      boxShadow: "0 0 0 1000px #121212 inset",
      WebkitTextFillColor: "white",
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        minHeight: "100vh",
        padding: "0rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      {isSent ? (
        <Box
          sx={{
            backgroundColor: "#1e1e1e",
            color: "#ffffff",
            border: "1px solid #f44336",
            padding: "1.5rem 2rem",
            borderRadius: "0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            fontWeight: 500,
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.4)",
            animation: "fadeIn 0.4s ease-out",
            marginTop: "10rem",
            marginBottom: "20rem",
          }}
        >
          <DoneIcon sx={{ color: "#f44336" }} />
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            ¡Tu mensaje fue enviado exitosamente!
          </Typography>
        </Box>
      ) : (
        <>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: 3, textAlign: "center", color: "red" }}
          >
            Contactame
          </Typography>

          <Typography sx={{ mb: 4, color: "red", textAlign: "center" }}>
            ¿Tenés una idea o proyecto? ¡Mandame un mensaje y lo charlamos!
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <TextField
              name="name"
              label="Nombre"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              InputLabelProps={{ style: { color: "#ccc" } }}
              sx={textFieldStyles}
            />

            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputLabelProps={{ style: { color: "#ccc" } }}
              sx={textFieldStyles}
            />

            <TextField
              name="message"
              label="Mensaje"
              variant="outlined"
              multiline
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              InputLabelProps={{ style: { color: "#ccc" } }}
              sx={textFieldStyles}
            />

            <Button
              type="submit"
              variant="contained"
              disabled={isSending}
              sx={{
                backgroundColor: "#f44336",
                fontWeight: "bold",
                borderRadius: "2rem",
                "&:hover": {
                  backgroundColor: isSending ? "#f44336" : "#d32f2f",
                },
              }}
            >
              {isSending ? "Enviando..." : "Enviar"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
