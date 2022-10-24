import React, { useState, useEffect, createContext } from 'react';

//import data for shopping cart items, mock database
import { cartItems } from '../data';

export const StoreContext = createContext();

export const StoreContextProvider = ({children}) => {
    const [shoppingCartItems, setShoppingCartItems] = useState(cartItems)
    const [shoppingCartTotal, setShoppingCartTotal] = useState(null);
    const [cartIsUpdated, setCartIsUpdated] = useState(true);
    
  //update cart total if cart has been updated
    useEffect(() => {
      if(cartIsUpdated) {
        const total = shoppingCartItems.reduce((sum, curItem) => { 
          return sum + parseFloat(curItem.price * curItem.quantity)
        }, 0).toFixed(2);
    
        setShoppingCartTotal(total);
      }
    
      return setCartIsUpdated(false);
    }, [cartIsUpdated])
  
    //handler functions for cart updates
    const removeItem = (id) => {
      const newItems = [...shoppingCartItems].filter(item => item.id !== id);
      
      setShoppingCartItems(newItems);
      setCartIsUpdated(true);
    }
    const updateQuantity = (value, id) => {
      let newItems = [...shoppingCartItems].map(item => item.id === id ? {...item, quantity: value} : item );
  
      setShoppingCartItems(newItems);
    }
  
    const updateItems = () => {
      //if quantity entered is less than 1, set quantity to 1
      shoppingCartItems.forEach((item) => {
        if(item.quantity <= 0 || item.quantity == ''){
          updateQuantity(1, item.id)
        }
      })
  
      setCartIsUpdated(true);
    }

    const value = {
        shoppingCartItems,
        shoppingCartTotal,
        cartIsUpdated,
        removeItem,
        updateQuantity,
        updateItems,
        updateQuantity,
    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}