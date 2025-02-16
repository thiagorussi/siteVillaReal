import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from "@mui/material"

const blogPosts = [
    {
        title: "A importância do Personal Branding para executivos",
        description: "Descubra como o Personal Branding pode impulsionar sua carreira executiva.",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        title: "Estratégias de networking para fortalecer sua marca pessoal",
        description: "Aprenda técnicas eficazes de networking para expandir sua influência profissional.",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        title: "Como usar as redes sociais para construir sua autoridade no mercado",
        description: "Dicas práticas para utilizar as redes sociais a favor da sua marca pessoal.",
        image: "/placeholder.svg?height=200&width=300",
    },
]

export default function Blog() {
    return (
        <Box sx={{ bgcolor: "background.paper", py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" color="text.primary" gutterBottom>
                    Blog
                </Typography>
                <Grid container spacing={4}>
                    {blogPosts.map((post) => (
                        <Grid item key={post.title} xs={12} sm={6} md={4}>
                            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                <CardMedia component="img" sx={{ height: 200 }} image={post.image} alt={post.title} />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {post.title}
                                    </Typography>
                                    <Typography>{post.description}</Typography>
                                </CardContent>
                                <Box sx={{ p: 2 }}>
                                    <Button size="small" color="primary">
                                        Leia mais
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}