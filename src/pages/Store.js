import { Grid, Typography, Container, Box } from "@mui/material";
import PizzaCard from "../components/PizzaCard";
import BebidaCard from "../components/BebidaCard";
import SalsaCard from "../components/SalsaCard";
import pizzas from '../data/pizzas';
import bebidas from "../data/bebidas";
import sauces from "../data/sauces";
import ingredients from "../data/ingredients";
import CustomCard from "../components/CustomCard";


const Store = ({addToCart}) => {

    return (
        <Box sx={{mt: 4}}>
            <Container maxWidth="lg">
                <Typography variant= "h4" sx={{marginLeft: 6,fontWeight: 'bold'}}>Prueba Nuestras Clásicas!</Typography>
                <Grid
                    container
                    justifyContent={"center"}
                    sx={{margin: '20px 4px 10px 4px'}}
                >
                    {pizzas.map((pizzaA, index) =>{
                        return (
                            <PizzaCard 
                            key={index} 
                            pizza = {pizzaA} 
                            addToCart={addToCart}/>
                        );
                    })}
                </Grid>
            </Container>
            <Container maxWidth="lg">
            <Typography variant= "h4" sx={{marginLeft: 6, fontWeight: 'bold'}}>O tal vez quieres una a tu medida?</Typography>
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
                <Typography variant= "h4" sx={{marginLeft: 6, fontWeight: 'bold'}}>Agrega una bebida para acompañar!</Typography>
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
                <Typography variant= "h4" sx={{marginLeft: 6, fontWeight: 'bold'}}>Qué tal una salsa?</Typography>
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

export default Store;