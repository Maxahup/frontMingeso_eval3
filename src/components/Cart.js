import { Avatar, Box, Button, Drawer, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";



export default function Cart ({closeCart, cart, show}) {
    
    const [total, setTotal] = useState(0);

    const getTotal = () => {
        let total = 0;
        if(cart.length > 0){
            total = cart.reduce(function (acumulador , order) {return acumulador + order.price;}, 0);
        }
        setTotal(total);
    }

    const handleCheckout = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('total_cart', total);
        window.location.href= '/checkout';
    }
    
    useEffect(() => {
        getTotal()
    });

    // const removeItem = () => {
        
    // }

    const cartContent = cart.map((order, index) => {
        return (
            <Box key={index}>
                <Box
                    display="flex"
                    alignItems="start"
                    sx={{pt:2, pb: 2, pl:2, pr:2}}
                    justifyContent={"space-between"}
                    >
                        <Avatar src={order.image} sx= {{mr:2}} />
                        <Box display="flex" flexDirection={"column"} sx={{mr:2}}>
                            <Typography>{order.name}</Typography>
                            <Typography variant="subtitle2">Masa: {order.masa}</Typography>
                            <Typography variant="subtitle2">Tamaño: {order.size}</Typography>
                            <Typography variant="subtitle2">Cantidad: {order.qty}</Typography>
                            <Typography variant="subtitle2">Precio: ${order.price}</Typography>
                        </Box>

                </Box>

            </Box>
        )
    })

    return (
        <Drawer
            open={show}
            anchor="right"
            onClose={() => closeCart()}
            PaperProps={{
                sx: {
                    width: 400,
                    background: "white"
                }
            }}
        >
            <Box
                sx={{p:4}}
                display= "flex"
                justifyContent={"center"}
                flexDirection="column"
                alignItems="center"
            >
                <Typography variant="h5" sx={{mb: 2}}>Carrito de compra</Typography>
                <Paper>
                    {cartContent}
                </Paper>
                <Typography variant="h4" sx={{mt:2}}>Monto a Pagar: $<b>{total}</b></Typography>
                {total > 0 ?
                    <Button variant="contained" sx={{mt: 2}} onClick={handleCheckout}>
                        PAGAR
                    </Button> :
                    <div className="mt-2">Aún no hay elementos en tu carrito!</div>
                }

            </Box>

        </Drawer>
    )
}