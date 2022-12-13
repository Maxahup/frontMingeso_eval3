import { Box, Container, Typography, Grid } from "@mui/material";
import CustomCard from "../components/CustomCard";
import ingredients from "../data/ingredients";
import bebidas from "../data/bebidas";
import BebidaCard from "../components/BebidaCard";
import sauces from "../data/sauces";
import SalsaCard from "../components/SalsaCard";


const Personalizada = ({addToCart}) => {
    return (
        <Box sx={{mt:4}}>
            <Container maxWidth="lg">
            <Typography variant= "h5" alignContent={"center"}>Porque sabemos que los gustos son personales, crea tu pizza tu gusto!</Typography>
            <Grid
                    container
                    justifyContent={"center"}
                    sx={{margin: '20px 4px 10px 4px'}}
                >
                    {ingredients.map((ingredientesS, index) =>{
                        return (
                            <CustomCard 
                            key={index} 
                            ingredientes = {ingredientesS} 
                            addToCart={addToCart}/>
                        );
                    })}
                </Grid>
            </Container>
            <Container>
                <Typography variant= "h4" sx={{marginLeft: 6}}>Agrega una bebida para acompañar!</Typography>
                    <Grid
                        container
                        justifyContent={"center"}
                        sx={{margin: '20px 4px 10px 4px'}}
                    >
                        {bebidas.map((bebidaA, index) =>{
                            return (
                                <BebidaCard 
                                key={index} 
                                bebida = {bebidaA} 
                                addToCart={addToCart}/>
                            );
                        })}
                    </Grid>
            </Container>
            <Container>
                <Typography variant= "h4" sx={{marginLeft: 6}}>Qué tal una salsa?</Typography>
                    <Grid
                        container
                        justifyContent={"center"}
                        sx={{margin: '20px 4px 10px 4px'}}
                    >
                        {sauces.map((salsaA, index) =>{
                            return (
                                <SalsaCard 
                                key={index} 
                                salsa = {salsaA} 
                                addToCart={addToCart}/>
                            );
                        })}
                    </Grid>
            </Container>

        </Box>
    )
}

export default Personalizada;