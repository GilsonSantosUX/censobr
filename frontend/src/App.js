import React, { useEffect, useContext } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { MEDIA_QUERY_DESKTOP, MEDIA_QUERY_MOBILE } from './constants.js';
import { MediaProvider } from "./context/MediaContext.js"
import { UserContext } from './context/HandleUser.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Login } from './pages/Login/index.js';
import { Register } from './pages/Register/index.js';
import { Gestao } from './pages/Gestao/index.js';
import { Home } from './pages/Home/index.js';

function App() {
  const [isMobile, isDesktop] = useMediaQuery([MEDIA_QUERY_MOBILE, MEDIA_QUERY_DESKTOP]);
  const mediaType = { isMobile, isDesktop };
  const { authenticate } = useContext(UserContext);


  useEffect(() => {
    console.log("the auth", authenticate)
    console.log("the auth", window.location.pathname)
    if (authenticate || window.location.pathname === "/login") {
      return;
    } else {
      window.location.href = "/login"
    }

  }, [authenticate])

  return (
    <MediaProvider mediaType={mediaType}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/gestao" element={<Gestao />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MediaProvider>
  );
}

export default App;
