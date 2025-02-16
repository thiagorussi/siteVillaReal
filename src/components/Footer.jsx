import { Box, Container, Typography, Link } from "@mui/material"
import LogoOriginal from "/public/logoOriginal.png"
import LogoBranco from "/public/logoBranco.png"

export default function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h6"
                    align="center"
                    sx={{
                        
                        fontSize: "1.75rem",
                        fontWeight: 700,
                        color: "primary.main",
                        
                    }}
                >
                    VillaReal
                    <img
                        src={LogoOriginal}
                        alt="villa real logo"
                        style={{
                            width: "40px",
                            height: "40px",
                            marginLeft: "2px",
                            marginBottom: "-10px",
                        }}
                    />
                </Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                    Transformando sua imagem em uma marca pessoal autêntica e poderosa
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {"Copyright © "}
                    <Link color="inherit" href="#">
                        Rô Villa Real
                    </Link>{" "}
                    {new Date().getFullYear()}
                    {"."}
                </Typography>
            </Container>
        </Box>
    )
}