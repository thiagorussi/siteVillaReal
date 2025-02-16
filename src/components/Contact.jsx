import { Box, Typography, Container, Grid, TextField, Button } from "@mui/material"

export default function Contact() {
    return (
        <Box sx={{ bgcolor: "background.default", py: 8 }}>
            <Container maxWidth="md">
                <Typography variant="h2" align="center" color="text.primary" gutterBottom>
                    Entre em Contato
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Agende sua consulta gratuita ou tire suas dúvidas
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth id="name" label="Nome" name="name" autoComplete="name" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth id="email" label="E-mail" name="email" autoComplete="email" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required fullWidth id="subject" label="Assunto" name="subject" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required fullWidth multiline rows={4} id="message" label="Mensagem" name="message" />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Enviar Mensagem
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}