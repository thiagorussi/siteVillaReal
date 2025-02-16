import { Box, Container, Typography, Link } from "@mui/material"

export default function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    [Nome do Especialista em Personal Branding]
                </Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                    Transformando sua imagem em uma marca pessoal autêntica e poderosa
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {"Copyright © "}
                    <Link color="inherit" href="#">
                        [Nome do Especialista]
                    </Link>{" "}
                    {new Date().getFullYear()}
                    {"."}
                </Typography>
            </Container>
        </Box>
    )
}