import { Avatar, Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Checkout = () => {

    const [cartToPay, setCartToPay] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
            setCartToPay(cart);
        }

        let total = localStorage.getItem('total_cart');
        if (total) {
            setCartTotal(total);
        }
    }, []);


    const cartContent = cartToPay.map((item, index) => {
        return (
            <Box key={index}>
                <Box
                    display="flex"
                    sx={{pt:2, pb:2, pl:2, pr: 2}}
                >
                    <Avatar src={item.image} sx={{mr:2}}/>
                    <Box display="flex" flexDirection={"column"} sx={{mr:15}}>
                        <Typography>{item.name}</Typography>
                        <Typography variant="subtitle2">{item.masa} | {item.size}</Typography>
                        <Typography variant="subtitle2">Cantidad: {item.qty}</Typography>
                    </Box>
                    <Typography variant="h5">${item.price}</Typography>
                </Box>
            </Box>
        )
    });

    const personalInformationRender = (
        <>
        <Typography variant="h5" className="mb-2">Información Personal</Typography>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Nombres"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Apellidos"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
        <Grid container className="mt-3">
            <Grid item xs={12} sm={12}>
                <TextField
                    id="standard-helperText"
                    label="Dirección"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
        </>
    );

    const paymentInformationRender = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Información de pago</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    id="standard-helperText"
                    label="Número de tarjeta"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
        <Grid container spacing={2} className="mt-1">
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Mes"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Año"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="CVC"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">¿Boleta o Factura?</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Boleta"
                name="radio-buttons-group"
            >
                <FormControlLabel value="Boleta" control={<Radio />} label="Boleta" />
                <FormControlLabel value="Factura" control={<Radio />} label="Factura" />
            </RadioGroup>
        </FormControl>
        <Grid>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">¿Quieres agregar propina?</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Nada"
                    name="radio-buttons-group"
                >   
                    <FormControlLabel value="Nada" control={<Radio />} label="Nada" />
                    <FormControlLabel value="5" control={<Radio />} label="5%" />
                    <FormControlLabel value="10" control={<Radio />} label="10%" />
                </RadioGroup>
            </FormControl>
        </Grid>
        
        </>
    );

    // const deliveryRender {
       
    // };

    const billingAddress = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Dirección de facturación</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    id="standard-helperText"
                    label="Dirección"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">¿Como te la entregamos?</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Retiro en Local"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Retiro en Local" control={<Radio />} label="Retirar en Local" />
                        <FormControlLabel value="a Domicilio" control={<Radio />} label="a Domicilio" />
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
        </>
    );

    return (
        <Grid container spacing={2} className="mt-2">
            <Grid item xs={12} sm={7}>
                {personalInformationRender}
                {paymentInformationRender}
                {billingAddress}
                <Button variant="contained" color="success" className="mt-4 mb-4">Pago contra entrega</Button>
                <Button variant="contained" color="info" className="mt-4 mb-4">Pagar con WebPay</Button>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Box
                    sx={{p: 2, background: "#E8E8E8", width: '100%',}}
                    display="flex"
                    justifyContent={"center"}
                    flexDirection="column"
                    alignItems="center"
                >
                    <Typography variant="h5" className="mb-3">Carro Actual</Typography>
                    <Paper>
                        {cartContent}
                    </Paper>
                    <Typography variant="h4" className="mt-3">Total sin propina: ${cartTotal}</Typography>
                    <Typography variant="h5" className="mt-3">Total con propina 5%: ${Math.round(cartTotal*1.05)}</Typography>
                    <Typography variant="h5" className="mt-3">Total con propina 10%: ${Math.round(cartTotal*1.1)}</Typography>
                    
                </Box>
            </Grid>
        </Grid>
    )
}

export default Checkout;