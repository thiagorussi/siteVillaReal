import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from "@mui/material";
import React from 'react';

// Depoimentos de clientes
const testimonials = [
    {
        name: "Carlos Andrade",
        position: "CEO da TechVision",
        testimony: "Graças à consultoria, minha marca pessoal se fortaleceu e meu networking se expandiu como nunca!",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg", // Foto de perfil fictícia
    },
    {
        name: "Juliana Mendes",
        position: "Executiva de Estratégia",
        testimony: "A experiência foi transformadora! Hoje sou mais reconhecida no mercado e minhas oportunidades triplicaram.",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
        name: "Eduardo Silva",
        position: "Empreendedor Digital",
        testimony: "Meu posicionamento no mercado foi completamente reformulado. Isso trouxe credibilidade e crescimento exponencial.",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
];

// Logos das empresas atendidas
const companyLogos = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" },
];

export default function Testimonials() {
    return (
        <Box sx={{ bgcolor: "background.default", py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" color="text.primary" gutterBottom>
                    Cases de Sucesso
                </Typography>
                <Grid container spacing={4}>
                    {testimonials.map((item, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", p: 3 }}>
                                <Avatar src={item.avatar} alt={item.name} sx={{ width: 80, height: 80, mb: 2 }} />
                                <Typography variant="h6" align="center">
                                    {item.name}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" align="center">
                                    {item.position}
                                </Typography>
                                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                                    <Typography>"{item.testimony}"</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Seção das logos das empresas atendidas */}
                <Box sx={{ mt: 6, textAlign: "center" }}>
                    <Typography variant="h4" align="center" color="text.primary" mb={4} gutterBottom>
                        Empresas que confiaram no nosso trabalho
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {companyLogos.map((company, index) => (
                            <Grid item key={index} xs={6} sm={3} md={2}>
                                <Box
                                    component="img"
                                    src={company.logo}
                                    alt={company.name}
                                    sx={{ width: "100%", maxHeight: 60, objectFit: "contain" }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
