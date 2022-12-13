//import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function BebidaCard ({bebida, addToCart}) {

    const generateOrder = () => {
        let order = {
            'id' : bebida.id,
            'name' : bebida.name,
            'image' : bebida.image,
            'price' : bebida.price
        }
        addToCart(order);
    }

    return (
        <div>
            <Card sx={{ width: 340, marginLeft: 3, marginBottom: 3 }}>
                <CardMedia component="img" height="140" image={bebida.image} />
                <CardContent>
                    <Typography>{bebida.name}</Typography>
                    <Typography variant="subtitle2" color={"text.secondary"}>Tamaño: {bebida.size}</Typography>
                </CardContent>
                <CardActions>
                    <Button endIcon={<ShoppingCart/>} onClick={generateOrder} size="small">Añadir al carrito</Button>
                </CardActions>
            </Card>


        </div>
    )
}