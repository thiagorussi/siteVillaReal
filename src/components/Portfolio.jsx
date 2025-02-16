import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from "@mui/material"

const portfolioItems = [
    {
        title: "CEO Transformação",
        description: "Como ajudamos um CEO a se reposicionar no mercado após uma mudança de carreira.",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        title: "Executiva em Ascensão",
        description: "Estratégia de Personal Branding para uma executiva em rápida ascensão em sua empresa.",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        title: "Empreendedor Tech",
        description: "Construção da marca pessoal de um empreendedor do setor de tecnologia.",
        image: "/placeholder.svg?height=200&width=300",
    },
]

export default function Portfolio() {
    return (
        <Box sx={{ bgcolor: "background.default", py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" color="text.primary" gutterBottom>
                    Portfólio
                </Typography>
                <Grid container spacing={4}>
                    {portfolioItems.map((item) => (
                        <Grid item key={item.title} xs={12} sm={6} md={4}>
                            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                <CardMedia component="img" sx={{ height: 200 }} image={item.image} alt={item.title} />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography>{item.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}