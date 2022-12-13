import './App.css';
import Layout from './components/Layout';
import { Container } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Store from './pages/Store';
import { useState } from 'react';
import Personalizada from './pages/Personalizada';
import Locales from './pages/Locales';
import Checkout from './pages/Checkout';
import Faq from './pages/Faq';

function App() {

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);


  const openCart = () => {
    setShowCart(true);
  };

  const closeCart =() => {
    setShowCart(false);
  };

  const addToCart = (order) => {
    let cartIndex = cart.findIndex(c => (
    c.id === order.id && c.size === order.size && c.masa === order.masa
    ));
    let item = cart[cartIndex];

    if(item){
      item.qty += order.qty;
      item.price += order.price;
      setCart(cart);
    } else {
      setCart([...cart, order])
    }
  }


  return (
    
    <Layout 
      cart={cart}
      showCart={showCart}
      openCart={openCart}
      closeCart={closeCart}
    >
      <Container>
        <Routes>
          <Route path="/" element={<Index />} exact/>
          <Route path="/store" element={<Store addToCart={addToCart}/>} exact/>
          <Route path="/personalizada" element={<Personalizada addToCart={addToCart}/>} exact/>
          <Route path="/locales" element={<Locales />} exact />
          <Route path="/checkout" element={<Checkout />} exact/>
          <Route path="/faq" element={<Faq />} exact/>

        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
