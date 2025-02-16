import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from "@mui/material"

const blogPosts = [
    {
        title: "A importância do Personal Branding para executivos",
        description: "Descubra como o Personal Branding pode impulsionar sua carreira executiva.",
        image: "https://media.istockphoto.com/id/1496947590/pt/foto/human-resources-officer-looking-for-leader-which-is-able-to-leave-his-comfort-zone-and-get-out.jpg?s=612x612&w=0&k=20&c=wUfEct2jZi6Cr1dS8uG04lTPpHWQvAKVAw4YI1xAH_g=",
    },
    {
        title: "Estratégias de networking para fortalecer sua marca pessoal",
        description: "Aprenda técnicas eficazes de networking para expandir sua influência profissional.",
        image: "https://media.istockphoto.com/id/1147141252/pt/vetorial/personal-development-personal-and-career-growth-progress-and-potential-concepts-isolated.jpg?s=612x612&w=0&k=20&c=o-M0FFJb8_gy-wYmAKao9nlhfyogn7zyKrY3gllFTyw=",
    },
    {
        title: "Como usar as redes sociais para construir sua autoridade no mercado",
        description: "Dicas práticas para utilizar as redes sociais a favor da sua marca pessoal.",
        image: "https://media.istockphoto.com/id/1067478500/pt/foto/business-talents-finding-recruitment-for-hr-human-resource-concept-colorful-arrows-pointing-to.jpg?s=612x612&w=0&k=20&c=5V-Gb9RJOC3TlBeqCUaOcLS9rPledZoQVnQOiUo6RMk=",
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