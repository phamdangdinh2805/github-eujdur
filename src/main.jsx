import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './main.css';
import Invoices from './routes/invoices';
import Expenses from './routes/expenses';
import Result from './routes/result';
import Invoice from './routes/invoice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

let rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="expenses" element={ <Expenses /> } />
        <Route path="invoices" element={<Invoices />}>
            <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="result" element={ <Result /> } />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />  
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
