import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Info, Award } from 'lucide-react'; // Ícones mais sofisticados
import Flor from "/public/flor.png";

const primaryColor = '#4B5FF7'; // Azul elegante para o "Depois"
const neutralColor = '#444'; // Cinza escuro para o "Antes" (mais neutro)

const MotionTypography = motion(Typography);
const MotionPaper = motion(Paper);

const beforePoints = [
    'Pouca visibilidade e impacto.',
    'Dificuldade em atrair clientes certos.',
    'Seu trabalho não é valorizado.',
];

const afterPoints = [
    'Reconhecimento e influência.',
    'Oportunidades premium chegam até você.',
    'Seus clientes pagam pelo seu valor.',
];

export default function TransformationSection() {
    return (
        <Box
            sx={{
                py: { xs: 10, md: 16 },
                background: `linear-gradient(135deg, ${primaryColor}05 0%, ${primaryColor}12 100%)`,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={8} justifyContent="center">
                    {/* Título Principal */}
                    <Grid item xs={12} textAlign="center">
                        <MotionTypography
                            variant="h2"
                            sx={{
                                mb: 3,
                                fontSize: { xs: '2.2rem', md: '3.8rem' },
                                fontWeight: 700,
                                letterSpacing: '-0.5px',
                                background: "black",
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            Eleve Sua Marca Pessoal a Outro Patamar
                        </MotionTypography>
                        <MotionTypography
                            variant="h5"
                            color="text.secondary"
                            sx={{
                                mb: 6,
                                maxWidth: '800px',
                                mx: 'auto',
                                fontSize: { xs: '1.1rem', md: '1.4rem' },
                                lineHeight: 1.6,
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Descubra como o Personal Branding pode redefinir sua trajetória, posicioná-lo estrategicamente e atrair oportunidades de alto nível.
                        </MotionTypography>
                    </Grid>

                    {/* Imagem ilustrativa */}
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                position: 'relative',
                                height: { xs: '250px', sm: '350px', md: '450px' },
                                mb: 6,
                                mx: 'auto',
                                maxWidth: '1000px',
                            }}
                        >
                            <img
                                src={Flor}
                                alt="Transformação pelo Personal Branding"
                                style={{
                                    objectFit: "contain",
                                    objectPosition: "center",
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Comparação Antes x Depois */}
                    <Grid item xs={12} md={6}>
                        <MotionPaper
                            elevation={6}
                            sx={{
                                bgcolor: 'white',
                                borderRadius: '16px',
                                p: { xs: 6, md: 7 },
                                border: `2px solid ${neutralColor}`,
                                transition: 'transform 0.3s ease-in-out',
                                "&:hover": { transform: "translateY(-5px)" },
                                textAlign: "center"
                            }}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* Ícone de referência no topo */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                                <Info size={50} color={neutralColor} />
                            </Box>

                            {/* Título Centralizado */}
                            <Typography
                                variant="h5"
                                sx={{
                                    color: neutralColor,
                                    fontWeight: 800,
                                    mb: 4,
                                    textAlign: 'center',
                                    fontSize: { xs: '1.7rem', md: '1.9rem' },
                                }}
                            >
                                Antes do Personal Branding
                            </Typography>

                            {beforePoints.map((point, index) => (
                                <Typography
                                    key={index}
                                    sx={{
                                        fontSize: {xs: "1rem", md: "1.2rem"}, // Dynamic font size
                                        color: "#333",
                                        mb: 2,
                                        lineHeight: 1.4,
                                        overflowWrap: "break-word", // Ensures long words break
                                        wordWrap: "break-word",  // Legacy support for wordWrap property
                                        hyphens: "auto"       // Enable hyphenation for cleaner wrapping
                                    }}
                                >
                                    {point}
                                </Typography>
                            ))}
                        </MotionPaper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <MotionPaper
                            elevation={6}
                            sx={{
                                bgcolor: primaryColor,
                                color: 'white',
                                borderRadius: '16px',
                                p: { xs: 6, md: 7 },
                                transition: 'transform 0.3s ease-in-out',
                                "&:hover": { transform: "translateY(-5px)" },
                                textAlign: "center"
                            }}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* Ícone de referência no topo */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                                <Award size={50} color="white" />
                            </Box>

                            {/* Título Centralizado */}
                            <Typography
                                variant="h5"
                                sx={{
                                    color: 'white',
                                    fontWeight: 800,
                                    mb: 4,
                                    textAlign: 'center',
                                    fontSize: { xs: '1.7rem', md: '1.9rem' },
                                }}
                            >
                                Depois do Personal Branding
                            </Typography>

                            {afterPoints.map((point, index) => (
                                <Typography
                                    key={index}
                                    sx={{
                                        fontSize: {xs: "1rem", md: "1.2rem"},  // Dynamic font size
                                        color: "white",
                                        mb: 2,
                                        fontWeight: 500,
                                        lineHeight: 1.4,
                                        overflowWrap: "break-word",  // Ensures long words break
                                        wordWrap: "break-word",   // Legacy support for wordWrap property
                                        hyphens: "auto"        // Enable hyphenation for cleaner wrapping
                                    }}
                                >
                                    {point}
                                </Typography>
                            ))}
                        </MotionPaper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}