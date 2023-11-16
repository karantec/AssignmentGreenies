import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UserDetails from './pages/UserDetails.jsx';
import AccountCreate from './pages/AccountCreate.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          
       
          <Route path="/User" element={<UserDetails/>} />
          <Route path="/Account" element={<AccountCreate />} />
         
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;