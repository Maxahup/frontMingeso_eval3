import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormGroup, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";


export default function PizzaCard({ pizza , addToCart}) {

    const [openDialog, setOpenDialog] = useState(false);

    const [masa, setMasa] = useState(pizza.type);
    const handleMasa = (e) => {
        setMasa(e.target.name);
    };

    const [size, setSize] = useState(pizza.sizes[2]);
    const handleSize = (e) => {
        let newSize = e.target.value;
        setSize(newSize);

        let sizeIndex = pizza.sizes.indexOf(newSize);
        let newPrice = pizza.costs[sizeIndex];
        handlePrice(newPrice, qty);
    }

    const [qty, setQty] = useState(1);
    const handleQty = (e) => {
        let newQty = parseInt(e.target.value);
        setQty(newQty);

        let sizeIndex = pizza.sizes.indexOf(size);
        let newPrice = pizza.costs[sizeIndex];
        handlePrice(newPrice, newQty);

    }

    const [price, setPrice] = useState(pizza.costs[2]);
    const handlePrice = (newPrice, newQty) => {
        let finalPrice = newPrice * newQty;
        setPrice(finalPrice);
    }

    const handleCloseMod = () => {
        setOpenDialog(false);
    }

    const handleClickMod = () => {
        setOpenDialog(true);
    }

    const generateOrder = () => {
        let order = {
            'id' : pizza.id,
            'name' : pizza.name,
            'image' : pizza.image,
            'masa' : masa,
            'size' : size,
            'qty' : qty,
            'price' : price
        }
        addToCart(order);
        handleCloseMod();
    }

    return (
        <div>
            <Card sx={{ width: 340, marginLeft: 3, marginBottom: 3 }}>
                <CardMedia component="img" height="140" image={pizza.image} />
                <CardContent>
                    <Typography>{pizza.name}</Typography>
                    {/* <Typography variant="subtitle2" color={"text.secondary"}>
                        Masa: {pizza.type.map((p, index) => {
                            return (
                                <div key={index} style={{ display: 'inline' }}> {p}</div>
                            )
                        })}
                        
                    </Typography> */}
                    <Typography variant="subtitle2">{pizza.content}</Typography>
                    <Typography variant="subtitle2" color={"text.secondary"}>
                        Precios: {pizza.costs.map((p, index) => {
                            return (
                                <div key={index} style={{ display: 'inline' }}> ${p}</div>
                            )

                        })}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="success" size="small" onClick={handleClickMod}>Modificar</Button>
                    <Button endIcon={<ShoppingCart/>} onClick={generateOrder} size="small">Añadir al carrito</Button>
                </CardActions>
            </Card>
            <Dialog open={openDialog}>
                <DialogTitle> {pizza.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText class= "mt-2"> Elige tu tipo de masa preferida!</DialogContentText>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                checked={masa === 'Normal' ? true : false}
                                name="Normal"
                                onChange={handleMasa}
                            />
                            }
                            label="Normal"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox 
                                checked={masa === 'A la piedra' ? true : false}
                                name="A la piedra"
                                onChange={handleMasa}
                            />
                            }
                            label="A la piedra"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox 
                                checked={masa === 'Borde Queso' ? true : false}
                                name="Borde Queso"
                                onChange={handleMasa}
                            />
                            }
                            label="Borde Queso"
                        />
                    </FormGroup>
                    <DialogContentText className= "mt-2">Elige el tamaño de tu Pizza!</DialogContentText>
                    <RadioGroup 
                    row 
                    aria-labelledby="demo-row-radio-buttons-group-label" 
                    name="row-radio-buttons-group"
                    >
                        {pizza.sizes.map((s,index) => {
                            return (
                                <FormControlLabel
                                    key={index}
                                    value={s}
                                    control={<Radio />}
                                    label={s}
                                    checked={size=== s ? true : false}
                                    onChange={handleSize}
                            />
                            )
                        })}
                    </RadioGroup>
                    <DialogContentText sx={{mt: 2}}>¿Cuántas quieres?</DialogContentText>
                    <TextField
                        id="emp-qty"
                        type="number"
                        inputProps={{min: 1, max:20, value: qty}}
                        size="small"
                        onChange={handleQty}
                    />
                    <DialogContentText sx={{mt:2}} fontSize={20}>Precio <b>${price}</b></DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button endIcon={<ShoppingCart />} onClick={generateOrder}>Añadir</Button>
                    <Button color="error" onClick={handleCloseMod}>Cancelar</Button>
                </DialogActions>

                

            </Dialog>
        </div>
    )
}