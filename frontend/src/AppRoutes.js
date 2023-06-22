import React, { useContext } from 'react';

import {
  BrowserRouter as Routers,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Home from './components/Home/index.js';
import ModalLogin from './components/RealizarLogin/index.js';
import SolicitaCarona from './components/Carona_Maps/index.js';

import { AuthProvider, AuthContext } from "./contexts/auth.js";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if(loading) {
      return <div>Carregando...</div>
    }

    if(!authenticated){
      return <Navigate to="/" />
    }

    return children;
  };

  return(
    <Routers>
      <AuthProvider>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <ModalLogin />
          }
        />
        <Route
          exact
          path="/"
          element={
            <Home />
          }
        />
        <Route
          exact
          path="/solicitaCarona"
          element={
            <Private>
              <SolicitaCarona />
            </Private>
          }
        />
      </Routes>
      </AuthProvider>
    </Routers>
  )
}

export default AppRoutes;
