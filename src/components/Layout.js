import NavBar from "./NavBar";
import Footer from "./Footer";
import Cart from "./Cart";


const Layout = ({
    children,
    cart,
    showCart,
    openCart,
    closeCart
}) => {
    
    return (
        // Codigo para agregar fondo a toda la aplicacion, colocar en <div ... >
        // style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2015/01/07/16/37/wood-591631_960_720.jpg")`,
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',}}
        <div >
            <NavBar openCart={openCart} cart={cart}/>
            <main>{children}</main>
            <Footer />
            <Cart cart={cart} show={showCart} closeCart={closeCart}/>
        </div>
    )
}


export default Layout;