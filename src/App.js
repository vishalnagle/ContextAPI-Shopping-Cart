import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Home/HomeComponents/Front/Cart/Cart";
import { createContext, useState } from "react";

export const GlobalInfo = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  // const [user, setUser] = useState(false)

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...ProductExist,
                quantity: ProductExist.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    alert("Item added to cart");
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  // To clear the cart function

  const handleCartClearance = () => {
    setCartItems([]);
    alert("Your cart is empty now");
  };

  return (
    <>
      <GlobalInfo.Provider
        value={{
          cartItems: cartItems,
          handleAddProduct: handleAddProduct,
          handleRemoveProduct: handleRemoveProduct,
          handleCartClearance: handleCartClearance,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </GlobalInfo.Provider>
    </>
  );
}

export default App;
