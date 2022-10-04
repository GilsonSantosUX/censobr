import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { AuthProvider } from './context/index.js';
import { Login } from './pages/Login/index.js';
import { Home } from './pages/Home/index.js';

function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
