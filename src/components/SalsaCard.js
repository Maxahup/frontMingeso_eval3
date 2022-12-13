//import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function SalsaCard ({salsa, addToCart}) {

    const generateOrder = () => {
        let order = {
            'id' : salsa.id,
            'name' : salsa.name,
            'image' : salsa.image,
            'price' : salsa.price
        }
        addToCart(order);
    }

    return (
        <div>
            <Card sx={{ width: 340, marginLeft: 3, marginBottom: 3 }}>
                <CardMedia component="img" height="140" image={salsa.image} />
                <CardContent>
                    <Typography>{salsa.name}</Typography>
                    <Typography variant="subtitle2" color={"text.secondary"}>Tamaño: 200cc</Typography>
                </CardContent>
                <CardActions>
                    <Button endIcon={<ShoppingCart/>} onClick={generateOrder} size="small">Añadir al carrito</Button>
                </CardActions>
            </Card>


        </div>
    )
}