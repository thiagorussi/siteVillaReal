import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <Box
            sx={{
                py: { xs: 12, md: 20 },
                bgcolor: "primary.main",
            }}
        >
            <Container maxWidth="md">
                <motion.div
                    style={{ textAlign: "center" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Typography variant="h2" color="white" gutterBottom>
                        Pronto para Revolucionar sua Marca Pessoal?
                    </Typography>
                    <Typography variant="h5" color="white" sx={{ mb: 4, opacity: 0.9 }}>
                        Junte-se a milhares de profissionais que já transformaram suas
                        carreiras com a VillaReal.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: "white",
                            color: "primary.main",
                            "&:hover": {
                                bgcolor: "rgba(255,255,255,0.9)",
                                transform: "translateY(-3px)",
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
