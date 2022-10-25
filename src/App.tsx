import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { CheckoutForm } from './Checkout/CheckoutForm';
import { ShoppingCartPanel } from './Cart/ShoppingCartPanel';
import { PaymentInterface } from './Payment/PaymentInterface';



export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<ShoppingCartPanel />}
        >
        </Route>
        <Route
          path='/checkout'
          element={<CheckoutForm />}
        >
        </Route>
      </Routes>
    </>
  );
}
