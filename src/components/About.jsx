import { Box, Typography, Container, Grid, Paper } from "@mui/material"

export default function About() {
    return (
        <Box sx={{ bgcolor: "background.paper", py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" color="text.primary" gutterBottom>
                    Sobre [Nome do Especialista]
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
                            <Typography variant="h5" gutterBottom>
                                Minha Missão
                            </Typography>
                            <Typography variant="body1">
                                Ajudar executivos ambiciosos a construir uma marca pessoal autêntica e poderosa, que os destaque no
                                mercado e impulsione suas carreiras.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
                            <Typography variant="h5" gutterBottom>
                                Minha Experiência
                            </Typography>
                            <Typography variant="body1">
                                Com mais de [X] anos de experiência em Personal Branding, já ajudei centenas de executivos a alcançarem
                                seus objetivos profissionais através de uma imagem profissional sólida e um posicionamento estratégico.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}