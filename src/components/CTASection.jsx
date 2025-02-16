import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <Box
            sx={{
                py: { xs: 12, md: 20 },
                bgcolor: "primary.main",
                textAlign: "center",
            }}
        >
            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Título mais forte e impactante */}
                    <Typography
                        variant="h2"
                        color="white"
                        fontWeight="bold"
                        sx={{ mb: 2, fontSize: { xs: "2.2rem", md: "3rem" } }}
                    >
                        Construa sua Autoridade. Marque seu Nome.
                    </Typography>

                    {/* Subtítulo persuasivo */}
                    <Typography
                        variant="h5"
                        color="white"
                        sx={{ mb: 5, opacity: 0.9, fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    >
                        Oportunidades não surgem por acaso. Elas surgem para quem tem um posicionamento forte e autêntico. 
                        Está pronto para elevar sua carreira?
                    </Typography>

                    {/* Botão chamativo e maior */}
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: "white",
                            color: "primary.main",
                            fontWeight: "bold",
                            fontSize: { xs: "1.2rem", md: "1.4rem" },
                            px: { xs: 4, md: 6 },
                            py: { xs: 1.5, md: 2 },
                            borderRadius: "50px",
                            "&:hover": {
                                bgcolor: "rgba(255,255,255,0.9)",
                                transform: "scale(1.05)",
                            },
                        }}
                    >
                        Inscreva-se Agora
                    </Button>

                </motion.div>
            </Container>
        </Box>
    );
}
