import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LogoOriginal from "/public/logoOriginal.png";
import LogoBranco from "/public/logoBranco.png";

const MotionBox = motion(Box);

export default function Header() {
    const [scrolled, setScrolled] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleMenuToggle = (event) => {
        setMenuOpen((prev) => !prev);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AppBar
            position="fixed"
            elevation={scrolled ? 4 : 0}
            sx={{
                bgcolor: scrolled ? "rgba(255,255,255,0.9)" : "transparent",
                backdropFilter: scrolled ? "blur(10px)" : "none",
                transition: "all 0.3s ease-in-out",
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ px: { xs: 0, sm: 0 }, py: { xs: 1, sm: 2 } }}>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            fontSize: "1.75rem",
                            fontWeight: 700,
                            color: scrolled ? "primary.main" : "white",
                            transition: "color 0.3s ease-in-out",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        VillaReal
                        <img
                            src={scrolled ? LogoOriginal : LogoBranco}
                            alt="villa real logo"
                            style={{
                                width: "40px",
                                height: "40px",
                                marginLeft: "1px",


                            }}
                        />
                    </Typography>

                    {/* Menu normal para telas maiores */}
                    <MotionBox
                        sx={{
                            display: { xs: "none", md: "flex" },
                            gap: 2,
                        }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {["Início", "Cursos", "Sobre", "Blog", "Contato"].map((item) => (
                            <Button key={item} sx={{ color: "white" }}>
                                <Link to={item === "Início" ? "/" : `/${item.toLowerCase()}`} style={{ textDecoration: "none", color: "inherit" }}>
                                    {item}
                                </Link>
                            </Button>
                        ))}
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: scrolled ? "primary.main" : "white",
                                color: scrolled ? "white" : "primary.main",
                                "&:hover": {
                                    bgcolor: scrolled ? "primary.dark" : "rgba(255,255,255,0.9)",
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            Inscreva-se
                        </Button>
                    </MotionBox>

                    {/* Menu Hambúrguer para telas pequenas */}
                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuToggle}
                            sx={{ transition: "transform 0.3s", transform: menuOpen ? "rotate(180deg)" : "none" }}
                        >
                            {menuOpen ? <CloseIcon sx={{ fontSize: 35 }} /> : <MenuIcon sx={{ fontSize: 35 }} />}
                        </IconButton>
                        <Menu
                            anchorReference="anchorPosition"
                            anchorPosition={{ top: 50, left: 270 }}
                            open={menuOpen}
                            onClose={handleMenuClose}
                            sx={{ mt: "20px", width: "240px", textAlign: "center" }}
                        >
                            {["Início", "Cursos", "Sobre", "Blog", "Contato"].map((item) => (
                                <MenuItem key={item} onClick={handleMenuClose}>
                                    <Link
                                        to={item === "Início" ? "/" : `/${item.toLowerCase()}`}
                                        style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                        {item}
                                    </Link>
                                </MenuItem>
                            ))}
                            <MenuItem onClick={handleMenuClose}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: "primary.main",
                                        color: "white",
                                        width: "100%",
                                        "&:hover": {
                                            bgcolor: "primary.dark",
                                            transform: "translateY(-2px)",
                                        },
                                    }}
                                >
                                    Inscreva-se
                                </Button>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}





