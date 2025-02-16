import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import FotoHero from "/public/FotoHero.png";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function HeroSection() {
    return (
        <>
            {/* Layout para Celular */}
            <Box
                sx={{
                    display: { xs: "block", md: "none" },
                    position: "relative",
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, #5B5FEF 0%, #8084FF 100%)",
                    paddingTop: { xs: "80px", md: "0" },
                    overflow: "hidden",
                }}
            >
                <img
                    src={FotoHero}
                    alt="Especialista em Branding Pessoal"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top center",
                        position: "absolute",
                        top: 60,
                        left: 0,
                        opacity: 0.7,
                    }}
                />

                {/* Conteúdo centralizado */}
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        minHeight: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        px: 2,
                        textAlign: "center",
                    }}
                >
                    <MotionTypography
                        variant="h2"
                        color="white"
                        sx={{ fontSize: "2.5rem", mb: 2,mt:-5, fontWeight: "bold" }}
                    >
                        Construa uma Marca Pessoal Inesquecível
                    </MotionTypography>
                    <MotionTypography
                        variant="body1"
                        color="white"
                        sx={{ fontSize: "1.2rem", mb: 3, maxWidth: 600 }}
                    >
                        Posicione-se com autoridade, conquiste relevância e amplifique seu impacto profissional com o método Personal Branding 360®.
                    </MotionTypography>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: "white",
                            color: "primary.main",
                            px: 3,
                            py: 2,
                            "&:hover": {
                                bgcolor: "rgba(255,255,255,0.9)",
                                transform: "translateY(-3px)",
                            },
                        }}
                    >
                        Comece sua jornada agora
                    </Button>

                    {/* Slogan abaixo do botão */}
                    <MotionTypography
                        variant="body2"
                        color="white"
                        sx={{ fontSize: "1rem", mt: 2, fontWeight: "bold" }}
                    >
                        Não é sorte, é branding 🧠
                    </MotionTypography>
                </MotionBox>
            </Box>

            {/* Layout para Desktop */}
            <Box
                sx={{
                    display: { xs: "none", md: "block" },
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, #5B5FEF 0%, #8084FF 100%)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Container maxWidth="lg" sx={{ position: "relative", height: "100vh" }}>
                    <Grid
                        container
                        spacing={4}
                        alignItems="center"
                        sx={{ height: "100%" }}
                    >
                        <Grid item xs={12} md={6}>
                            <MotionBox
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                sx={{ mt: 10 }}
                            >
                                <MotionTypography
                                    variant="h1"
                                    color="white"
                                    sx={{
                                        fontSize: { xs: "3rem", md: "5rem" },
                                        mb: 3,
                                        fontWeight: "bold",
                                    }}
                                >
                                    Construa uma Marca Pessoal Inesquecível
                                </MotionTypography>
                                <MotionTypography
                                    variant="body1"
                                    color="white"
                                    sx={{
                                        fontSize: { xs: "1.25rem", md: "1.5rem" },
                                        mb: 4,
                                        opacity: 0.9,
                                        maxWidth: 600,
                                    }}
                                >
                                    Posicione-se com autoridade, conquiste relevância e amplifique seu impacto profissional com o método Personal Branding 360®.
                                </MotionTypography>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        bgcolor: "white",
                                        color: "primary.main",
                                        px: { xs: 3, md: 4 },
                                        py: { xs: 1, md: 2 },
                                        "&:hover": {
                                            bgcolor: "rgba(255,255,255,0.9)",
                                            transform: "translateY(-3px)",
                                        },
                                    }}
                                >
                                    Comece sua jornada agora
                                </Button>

                                {/* Slogan abaixo do botão */}
                                <MotionTypography
                                    variant="body2"
                                    color="white"
                                    sx={{ fontSize: "1.2rem", mt: 3, fontWeight: "bold" }}
                                >
                                    Não é sorte, é branding 🧠
                                </MotionTypography>
                            </MotionBox>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <MotionBox
                                sx={{
                                    position: "relative",
                                    height: { xs: "400px", md: "700px" },
                                }}
                            >
                                <img
                                    src={FotoHero}
                                    alt="Especialista em Branding Pessoal"
                                    style={{
                                        width: "119%",
                                        height: "119%",
                                        objectFit: "contain",
                                        objectPosition: "center right",
                                        position: "absolute",
                                        bottom: 0,
                                        right: 0,
                                        transform: "translateY(18%)",
                                    }}
                                />
                            </MotionBox>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
