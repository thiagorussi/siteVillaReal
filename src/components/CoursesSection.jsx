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

export default function CoursesSection() {
    const courses = [
        {
            title: "Fundamentos do Branding Pessoal",
            description:
                "Aprenda os princípios essenciais para construir uma marca pessoal poderosa.",
            icon: <Star size={32} />,
        },
        {
            title: "Estratégias Avançadas de Posicionamento",
            description:
                "Domine técnicas para se destacar em um mercado competitivo.",
            icon: <Target size={32} />,
        },
        {
            title: "Branding Digital para Profissionais",
            description:
                "Construa uma presença online impactante e atraia oportunidades.",
            icon: <Zap size={32} />,
        },
    ];

    return (
        <Box sx={{ py: { xs: 12, md: 20 }, bgcolor: "background.paper" }}>
            <Container maxWidth="lg">
                <MotionTypography
                    variant="h2"
                    textAlign="center"
                    sx={{ mb: 8 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Cursos de Branding que Transformam Carreiras
                </MotionTypography>
                <Grid container spacing={4}>
                    {courses.map((course, index) => (
                        <Grid item xs={12} md={4} key={course.title}>
                            <MotionCard
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                sx={{ height: "100%" }}
                            >
                                <CardContent>
                                    <Box sx={{ mb: 2, color: "primary.main" }}>
                                        {course.icon}
                                    </Box>
                                    <Typography variant="h5" component="div" gutterBottom>
                                        {course.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 2 }}
                                    >
                                        {course.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="large" color="primary">
                                        Saiba mais
                                    </Button>
                                </CardActions>
                            </MotionCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
