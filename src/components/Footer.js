import { Box, Grid, Typography, Link } from "@mui/material";
import { Container } from "@mui/system";

export default function Footer() {
    return (
        <footer>
            <Box
            px= {{xs:2, sm: 10}}
            py= {{xs:2, sm: 7}}
            bgcolor="text.secondary"
            color="white"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={4}>
                            <Typography>Menu</Typography>
                            <Box>
                                <Link href="/" color="inherit">Inicio</Link>
                            </Box>
                            <Box>
                                <Link href="/store" color="inherit">Pizzas</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <Typography>Ayuda</Typography>
                            <Box>
                                <Link href="/faq" color="inherit">Preguntas Frecuentes</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">Contactanos</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <Typography>Redes Sociales</Typography>
                            <Box>
                                <Link href="/" color="inherit">Instagram</Link>
                            </Box>
                            <Box>
                                <Link href="/store" color="inherit">Facebook</Link>
                            </Box>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </footer>
    )
}