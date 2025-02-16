import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardActions,
} from "@mui/material";
import { motion } from "framer-motion";
import { Star, Zap, Target } from "lucide-react";

const MotionTypography = motion(Typography);
const MotionCard = motion(Card);
const MotionBox = motion(Box);

export default function CoursesSection() {
    const courses = [
        {
            title: "Fundamentos do Branding Pessoal",
            description:
                "Domine os princípios essenciais para criar uma marca pessoal forte e reconhecida.",
            icon: <Star size={40} />,
        },
        {
            title: "Estratégias Avançadas de Posicionamento",
            description:
                "Aplique técnicas poderosas para se diferenciar e conquistar relevância no mercado.",
            icon: <Target size={40} />,
        },
        {
            title: "Branding Digital para Profissionais",
            description:
                "Desenvolva uma presença online estratégica e amplifique sua autoridade.",
            icon: <Zap size={40} />,
        },
    ];

    return (
        <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: "background.paper" }}>
            <Container maxWidth="lg">
                {/* Título Principal */}
                <MotionTypography
                    variant="h2"
                    textAlign="center"
                    sx={{ mb: 3, fontWeight: "bold" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Torne-se Referência no Seu Mercado
                </MotionTypography>

                {/* Subtítulo */}
                <MotionTypography
                    variant="body1"
                    textAlign="center"
                    color="text.secondary"
                    sx={{ mb: 6, maxWidth: 700, mx: "auto", fontSize: { xs: "1rem", md: "1.2rem" } }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Aprenda com um método comprovado e desenvolva uma marca pessoal forte para conquistar autoridade, oportunidades e crescimento profissional.
                </MotionTypography>

                {/* Grid de Cursos */}
                <Grid container spacing={4}>
                    {courses.map((course, index) => (
                        <Grid item xs={12} sm={6} md={4} key={course.title}>
                            <MotionCard
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    p: 3,
                                    borderRadius: "12px",
                                    boxShadow: 3,
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                        transition: "0.3s ease-in-out",
                                    },
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                                    {/* Ícone do curso */}
                                    <Box sx={{ mb: 3, color: "primary.main", fontSize: 40 }}>
                                        {course.icon}
                                    </Box>

                                    {/* Título */}
                                    <Typography
                                        variant="h5"
                                        component="div"
                                        sx={{ fontWeight: "bold", mb: 2 }}
                                    >
                                        {course.title}
                                    </Typography>

                                    {/* Descrição */}
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 3, fontSize: { xs: "0.9rem", md: "1rem" } }}
                                    >
                                        {course.description}
                                    </Typography>
                                </CardContent>

                                {/* Botão de Ação */}
                                <CardActions sx={{ justifyContent: "center" }}>
                                
                                </CardActions>
                            </MotionCard>
                        </Grid>
                    ))}
                </Grid>

            
            </Container>
        </Box>
    );
}
