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
// import { Register } from './pages/_Register/index.js';
import { Gestao } from './pages/Gestao/index.js';
import { Home } from './pages/Home/index.js';

function App() {
  const [isMobile, isDesktop] = useMediaQuery([MEDIA_QUERY_MOBILE, MEDIA_QUERY_DESKTOP]);
  const mediaType = { isMobile, isDesktop };
  const { authenticate } = useContext(UserContext);


  useEffect(() => {
    const auth = localStorage.getItem("token");
    // console.log(auth);
    if (!auth && window.location.pathname === "/gestao") {
      window.location.href = "/login"
    }
  }, [])

  return (
    <MediaProvider mediaType={mediaType}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/gestao" element={<Gestao />} />
          <Route path="*" element={<Gestao />} />
        </Routes>
      </BrowserRouter>
    </MediaProvider>
  );
}

export default App;
