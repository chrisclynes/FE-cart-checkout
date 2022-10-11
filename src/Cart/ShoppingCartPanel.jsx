import React, { useState, useEffect } from 'react';
import { faShareAlt, faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//created custom component for individaul cart items
import { CartItem } from '../Components/CartItem/CartItem';

//import data for shopping cart items, mock database
import { cartItems } from '../data';


export const ShoppingCartPanel = () => {
  const [shoppingCartItems, setShoppingCarItems] = useState(cartItems)
  const [shoppingCartTotal, setShoppingCartTotal] = useState(null);
  const [cartIsdUpdated, setCartIsUpdated] = useState(false);
  

  useEffect(() => {
    const total = shoppingCartItems.reduce((sum, curItem) => { return sum + parseFloat(curItem.price * curItem.quantity)}, 0).toFixed(2);

    setShoppingCartTotal(total);
    setCartIsUpdated(false);
  }, [cartIsdUpdated])

  //handler functions for cart updates


  const removeItem = (id) => {
    const prevItems = [...shoppingCartItems];
    let newItems;
    if(prevItems.find((item) => item.id === id)) {
      newItems = prevItems.filter((item) => item.id !== id);
    }
    setShoppingCarItems(newItems);
    setCartIsUpdated(true);
   
  }
  const updateQuantity = (value, id) => {
    const prevItems = [...shoppingCartItems];
    let newItems = prevItems.map((item) => item.id === id ? {...item, quantity: value} : item );

    setShoppingCarItems(newItems);
  }

  const updateItems = () => {
    //check if quantiy value set to empty or 0
    shoppingCartItems.forEach((item) => {
      if(item.quantity == 0 || item.quantity == ''){
        updateQuantity(1, item.id)
      }
    })

    setCartIsUpdated(true);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="card card-info">
            <div className="card-header">
              <div className="card-title">
                <div className="row align-items-center">
                  <div className="col-6">
                    <h5 className="mb-0">
                      <FontAwesomeIcon icon={faShoppingCart} />
                      {" "}Shopping Cart
                    </h5>
                  </div>
                  <div className="col-6">
                    <button type="button" className="btn btn-primary btn-sm w-100">
                      <FontAwesomeIcon icon={faShareAlt} />{" "}Continue shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
                {
                  shoppingCartItems.map((item, i) => {
                    return (
                      <CartItem 
                        key={i} 
                        id={item.id} 
                        img={item.img}
                        productName={item.productName}
                        productDescription={item.productDescription}
                        price={item.price}
                        quantity={item.quantity}
                        removeItem={removeItem}
                        updateQuantity={updateQuantity}
                        />
                    )
                  })
                }
                  <div className="row text-center align-items-center">
                    <div className="col-9">
                      <h6 className="text-end mb-0">Added items?</h6>
                    </div>
                    <div className="col-3">
                      <button type="button" 
                              className="btn btn-default btn-sm w-100 border"
                              onClick={updateItems}
                            >
                        Update cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="row text-center align-items-center">
                    <div className="col-9">
                      <h4 className="text-end mb-0 h5">Total <strong>{`$${shoppingCartTotal}`}</strong></h4>
                    </div>
                    <div className="col-3">
                      <button type="button" className="btn btn-success w-100">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      )
};

