import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from "@mui/material"

const services = [
    {
        title: "Consultoria de Imagem",
        description: "Análise e orientação para criar uma imagem profissional alinhada com seus objetivos.",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        title: "Estratégia de Posicionamento",
        description: "Desenvolvimento de uma estratégia para posicionar você como referência em seu setor.",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        title: "Gestão de Redes Sociais",
        description: "Criação e gerenciamento de conteúdo para fortalecer sua presença online.",
        image: "/placeholder.svg?height=200&width=300",
    },
]

export default function Services() {
    return (
        <Box sx={{ bgcolor: "background.paper", py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" color="text.primary" gutterBottom>
                    Nossos Serviços
                </Typography>
                <Grid container spacing={4}>
                    {services.map((service) => (
                        <Grid item key={service.title} xs={12} sm={6} md={4}>
                            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                <CardMedia component="img" sx={{ height: 200 }} image={service.image} alt={service.title} />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {service.title}
                                    </Typography>
                                    <Typography>{service.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}