import React from 'react';
import './App.scss';
import { CheckoutForm } from './Checkout/CheckoutForm';
import { ShoppingCartPanel } from './Cart/ShoppingCartPanel';
import { PaymentInterface } from './Payment/PaymentInterface';


export const App = () => {
  return (
    <>
      <ShoppingCartPanel />
    </>
  );
}
