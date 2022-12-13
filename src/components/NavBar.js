import {  ShoppingCart } from "@mui/icons-material";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { AppBar, Badge, Box, Button, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import pages from "../data/pages";

export default function NavBar({cart, openCart}) {
    return (
        <div>
            <AppBar position="static" style={{background: '#2E3B55'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <LocalPizzaIcon sx={{display: {xs: "none", md:"flex"}, mr: 1}}/>
                        <Typography variant="h5">Pizzería</Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: {xs: "none", md: "flex"},
                                justifyContent: "center",
                                alignItems: "center",
                                mr: 20
                            }}
                            >
                                {pages.map((page) => (
                                    <Button 
                                    key={page.href} 
                                    href={page.href}
                                    sx={{
                                        my: 1,
                                        bx: 2, 
                                        color:"white", 
                                        display: "block"
                                    }}
                                    >
                                        {page.text}

                                    </Button>
                                )
                                
                                )}
                                
                        </Box>
                        <Box>
                            {/* Carrito de compras */}
                            <Badge badgeContent={cart && cart.length} color="secondary">
                                <ShoppingCart onClick={() => openCart()}/>
                            </Badge>
                        </Box>
                    </Toolbar>
                </Container>

            </AppBar>
        </div>
    )

}