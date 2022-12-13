//import { Card, CardContent, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormGroup, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";



export default function CustomCard ({ingredientes, addToCart}) {
    
    const [openDialog, setOpenDialog] = useState(false);
    const handleClickMod = () => {
        setOpenDialog(true);
    }
    const handleCloseMod = () => {
        setOpenDialog(false);
    }

    const [masa, setMasa] = useState(ingredientes.masa[1]);
    const handleMasa = (e) => {
        setMasa(e.target.name);
    };

    const [size, setSize] = useState(ingredientes.sizes[2]);
    const handleSize = (e) => {
        let newSize = e.target.value;
        setSize(newSize);

        let sizeIndex = ingredientes.sizes.indexOf(newSize);
        let newPrice = ingredientes.costs[sizeIndex];
        handlePrice(newPrice, qty);
    }

    const [qty, setQty] = useState(1);
    const handleQty = (e) => {
        let newQty = parseInt(e.target.value);
        setQty(newQty);

        let sizeIndex = ingredientes.sizes.indexOf(size);
        let newPrice = ingredientes.costs[sizeIndex];
        handlePrice(newPrice, newQty);

    }

    const [price, setPrice] = useState(ingredientes.costs[2]);
    const handlePrice = (newPrice, newQty) => {
        let finalPrice = newPrice * newQty;
        setPrice(finalPrice);
    }

    const [proteina, setProteina] = useState(ingredientes.proteina[0]);
    const handleProteina = (e) => {
        setProteina(e.target.name);
    }

    const [vegetal, setVegetal] = useState(ingredientes.vegetal[0]);
    const handleVegetal = (e) => {
        setVegetal(e.target.name);
    }

    const [extra, setExtra] = useState(ingredientes.extra[0]);
    const handleExtra = (e) => {
        setExtra(e.target.name);
    }

    const [tipoQueso, setTipoQueso] = useState(ingredientes.tipoQueso[0]);
    const handleQueso = (e) => {
        setTipoQueso(e.target.name);
    }

    const generateOrder = () => {
        let order = {
            'id' : ingredientes.id,
            'name' : ingredientes.name,
            'image' : ingredientes.image,
            'masa' : masa,
            'size' : size,
            'tipoQueso' : tipoQueso,
            'proteina' : proteina,
            'vegetal' : vegetal,
            'extra' : extra,
            'qty' : qty,
            'price' : price
        }
        addToCart(order);
        handleCloseMod();
    }


    return (
        <div>
            <Card sx={{ width: 600, marginLeft: 3, marginBottom: 3 }}>
            <CardMedia component="img" height="140" image={ingredientes.image} />
            <CardContent>
                <Typography>Ármala a tu gusto!</Typography>
                <Typography variant="subtitle2">Pizza personalizada de 3 ingredientes</Typography>
                <CardActions>
                    <Button color="success" size="small" onClick={handleClickMod}>Comenzar!</Button>
                </CardActions>
                <Dialog open={openDialog}>
                    <DialogTitle variant="h4">Pizza personalizada de 3 Ingredientes</DialogTitle>
                    <DialogContent>
                        <Typography variant="h5" color={"text.primary"}>Elige tu masa preferida!</Typography>
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
                            <Typography variant="h5" color={"text.primary"}>¿Qué queso se te antoja?</Typography>
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={tipoQueso === 'gauda' ? true : false}
                                    name="gauda"
                                    onChange={handleQueso}
                                />
                                }
                                label="gauda"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={tipoQueso === 'mozarella' ? true : false}
                                    name="mozarella"
                                    onChange={handleQueso}
                                />
                                }
                                label="mozarella"
                            />
                            <Typography variant="h5" color={"text.primary"}>Elige el tamaño de tu Pizza!</Typography>
                            <RadioGroup 
                                row 
                                aria-labelledby="demo-row-radio-buttons-group-label" 
                                name="row-radio-buttons-group"
                                >
                                    {ingredientes.sizes.map((s,index) => {
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
                            <Typography variant="h5" color={"text.primary"}>Elige tu proteina!</Typography>
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={proteina === 'ninguna' ? true : false}
                                    name="ninguna"
                                    onChange={handleProteina}
                                />
                                }
                                label="ninguna"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={proteina === 'carne' ? true : false}
                                    name="carne"
                                    onChange={handleProteina}
                                />
                                }
                                label="carne"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={proteina === 'pollo' ? true : false}
                                    name="pollo"
                                    onChange={handleProteina}
                                />
                                }
                                label="pollo"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={proteina === 'jamón' ? true : false}
                                    name="jamón"
                                    onChange={handleProteina}
                                />
                                }
                                label="jamón"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={proteina === 'pepperoni' ? true : false}
                                    name="pepperoni"
                                    onChange={handleProteina}
                                />
                                }
                                label="pepperoni"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={proteina === 'carne mechada' ? true : false}
                                    name="carne mechada"
                                    onChange={handleProteina}
                                />
                                }
                                label="carne mechada"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={proteina === 'salchicha' ? true : false}
                                    name="salchicha"
                                    onChange={handleProteina}
                                />
                                }
                                label="salchicha"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={proteina === 'tocino' ? true : false}
                                    name="tocino"
                                    onChange={handleProteina}
                                />
                                }
                                label="tocino"
                            />
                            <Typography variant="h5" color={"text.primary"}>¿Qué tal un vegetal?</Typography>
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={vegetal === 'ninguno' ? true : false}
                                    name="ninguno"
                                    onChange={handleVegetal}
                                />
                                }
                                label="ninguno"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={vegetal === 'tomate' ? true : false}
                                    name="tomate"
                                    onChange={handleVegetal}
                                />
                                }
                                label="tomate"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={vegetal === 'choclo' ? true : false}
                                    name="choclo"
                                    onChange={handleVegetal}
                                />
                                }
                                label="choclo"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={vegetal === 'cebolla' ? true : false}
                                    name="cebolla"
                                    onChange={handleVegetal}
                                />
                                }
                                label="cebolla"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={vegetal === 'pimentón' ? true : false}
                                    name="pimentón"
                                    onChange={handleVegetal}
                                />
                                }
                                label="pimentón"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={vegetal === 'aceitunas' ? true : false}
                                    name="aceitunas"
                                    onChange={handleVegetal}
                                />
                                }
                                label="aceitunas"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={vegetal === 'champiñones' ? true : false}
                                    name="champiñones"
                                    onChange={handleVegetal}
                                />
                                }
                                label="champiñones"
                            />
                            <Typography variant="h5" color={"text.primary"}>Finalmente... un extra!</Typography>
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={extra === 'ninguno' ? true : false}
                                    name="ninguno"
                                    onChange={handleExtra}
                                />
                                }
                                label="ninguno"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={extra === 'carne' ? true : false}
                                    name="carne"
                                    onChange={handleExtra}
                                />
                                }
                                label="carne"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={extra === 'pollo' ? true : false}
                                    name="pollo"
                                    onChange={handleExtra}
                                />
                                }
                                label="pollo"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={extra === 'jamón' ? true : false}
                                    name="jamón"
                                    onChange={handleExtra}
                                />
                                }
                                label="jamón"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={extra === 'pepperoni' ? true : false}
                                    name="pepperoni"
                                    onChange={handleExtra}
                                />
                                }
                                label="pepperoni"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={extra === 'carne mechada' ? true : false}
                                    name="carne mechada"
                                    onChange={handleExtra}
                                />
                                }
                                label="carne mechada"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={extra === 'salchicha' ? true : false}
                                    name="salchicha"
                                    onChange={handleExtra}
                                />
                                }
                                label="salchicha"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={extra === 'tocino' ? true : false}
                                    name="tocino"
                                    onChange={handleExtra}
                                />
                                }
                                label="tocino"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={extra === 'tomate' ? true : false}
                                    name="tomate"
                                    onChange={handleExtra}
                                />
                                }
                                label="tomate"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={extra === 'choclo' ? true : false}
                                    name="choclo"
                                    onChange={handleExtra}
                                />
                                }
                                label="choclo"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={extra === 'cebolla' ? true : false}
                                    name="cebolla"
                                    onChange={handleExtra}
                                />
                                }
                                label="cebolla"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={extra === 'pimentón' ? true : false}
                                    name="pimentón"
                                    onChange={handleExtra}
                                />
                                }
                                label="pimentón"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={extra === 'aceitunas' ? true : false}
                                    name="aceitunas"
                                    onChange={handleExtra}
                                />
                                }
                                label="aceitunas"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                    checked={extra === 'champiñones' ? true : false}
                                    name="champiñones"
                                    onChange={handleExtra}
                                />
                                }
                                label="champiñones"
                            />
                        </FormGroup>
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
            </CardContent>
        </Card>
        </div>
    )
}