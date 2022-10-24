import React from 'react';
import './App.scss';
import { CheckoutForm } from './Checkout/CheckoutForm';
import { ShoppingCartPanel } from './Cart/ShoppingCartPanel';
import { PaymentInterface } from './Payment/PaymentInterface';
import { StoreContextProvider } from './Context/context';


export const App = () => {
  return (
    <>
      <StoreContextProvider>
        <ShoppingCartPanel />
      </StoreContextProvider>
    </>
  );
}
