import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import "./app.css";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import SportsMmaIcon from '@mui/icons-material/SportsMma';

export const Header = () => {
  const isMobile = useMediaQuery("(max-width:900px)", { noSsr: true });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

   const isLargeMenu = useMediaQuery('(max-width: 999px) and (min-width: 850px)');
    const isSmallMenu = useMediaQuery('(max-width: 849px) and (min-width: 700px)');
    const isExtraSmallMenu = useMediaQuery('(max-width: 799px) and (min-width: 550px)');
    const isExtraExtraSmallMenu = useMediaQuery('(max-width: 549px) and (min-width: 450px)');
    const isExtraExtraExtraSmallMenu = useMediaQuery('(max-width: 449px) and (min-width: 320px)');
    let marginLargeValueMenu;
    if (isLargeMenu) {
        marginLargeValueMenu = "25%";
    } else if (isSmallMenu) {
        marginLargeValueMenu = "30%";
    } else if (isExtraSmallMenu) {
        marginLargeValueMenu = "24%";
    } else if (isExtraExtraSmallMenu) {
        marginLargeValueMenu = "14%";
    } else if (isExtraExtraExtraSmallMenu) {
        marginLargeValueMenu = "5%";
    }

  // logica de navegacion
  const navigate = useNavigate();
  const redirect = (ruta: string) => {
    navigate(ruta);
  };

  return (
    <>
      {isMobile ? (
        <>
          <Box
            sx={{
              width: "100%",
              height: "3.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0",
              marginBottom: "-10px",
              boxSizing: "border-box",
              backgroundColor: "black",
            }}
          >

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SportsMmaIcon sx={{ color: 'white', fontSize: '2.5rem', marginLeft: '2rem' }} className="logo"/>
              <Typography variant="h5" color="red">El Precio del Ring</Typography>
            </Box>


            <IconButton onClick={() => setIsDrawerOpen(true)}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>

          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            PaperProps={{
              sx: {
                backgroundColor: "black",
                color: "black",
                width: "40%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                padding: "1rem",
                marginTop: "0.5rem",
              }}
            >
              <SportsMmaIcon sx={{ color: 'red', fontSize: '2.5rem'  }} className="logo"/>

              <IconButton
                sx={{
                  marginLeft:marginLargeValueMenu ,
                }}
              >
                <CloseIcon
                  sx={{ color: "white" }}
                  onClick={() => setIsDrawerOpen(false)}
                />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "left",
                marginTop: "2rem",
              }}
            >
            <Button className="boton-menu" onClick={() => { redirect("/blog"); setIsDrawerOpen(false); }}>Home</Button>
<Button className="boton-menu" onClick={() => { redirect("/blog/sobre-mi"); setIsDrawerOpen(false); }}>Sobre mí</Button>
<Button className="boton-menu" onClick={() => { redirect("/blog/publicaciones"); setIsDrawerOpen(false); }}>Publicaciones</Button>
<Button className="boton-menu" onClick={() => { redirect("/blog/contacto"); setIsDrawerOpen(false); }}>Contacto</Button>

            </Box>
          </Drawer>
        </>
      ) : (
        <Box
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: "space-between", // o "flex-start" si querés que el logo quede pegado a la izquierda
    alignItems: "center",
    backgroundColor: "black",
    boxSizing: "border-box",
    padding: "0 2rem",
    height: "3rem"
  }}
>( , , ).

           <Box sx={{ display: "flex", alignItems: "center" }}>
              <SportsMmaIcon sx={{ color: 'white', fontSize: '2.5rem', marginLeft: '2rem' }} className="logo"/>
              <Typography variant="h5" color="red">El Precio del Ring</Typography>
            </Box>
          <Box sx={{ marginLeft: "40%" }}>
          <Button
  variant="text"
  className="boton-menu"
  onClick={() => redirect("/blog")}
>
  Home
</Button>
<Button
  variant="text"
  className="boton-menu"
  onClick={() => redirect("/blog/sobre-mi")}
>
  Sobre mí
</Button>
<Button
  variant="text"
  className="boton-menu"
  onClick={() => redirect("/blog/publicaciones")}
>
  Publicaciones
</Button>
<Button
  variant="text"
  className="boton-menu"
  onClick={() => redirect("/blog/contacto")}
>
  Contacto
</Button>
          </Box>
        </Box>
      )}
    </>
  );
};
