import React, { useState, useContext } from 'react';

import { AuthContext } from '../../contexts/auth.js';

//import api from '../../api.js';

import './style.js';
import {
  ButtonInputSolicita,
  Content,
  InputSolicita,
  ModalContainer
} from './style.js';

/*
function initialState(){
  return {user: '', password: ''};
}

function login({ user, password }) {
  if (user === 'admin' && password === 'admin'){
    return { token: '1234' };
  }
  return { error: 'Usuário ou senha inválido.' }
}
*/

const ModalRealizaLogin = ({
  id='modal',
  onClose = () => {}
  }) => {

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOutsideClick = (e) => {
    if(e.target.id === id){
      onClose();
    }
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, password });
    login(email, password);
  }

  return(
    <ModalContainer id={ id } onClick={ handleOutsideClick }>
      <div className="container">
        <button className="close" onClick={ onClose } />
        <Content>
          <h2>Realizar Login</h2>

          <form
            onSubmit={HandleSubmit}
          >
            <label>
              <InputSolicita
                type="email"
                id="email"
                name="email"
                placeholder='Informe o seu e-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <InputSolicita
                type="password"
                id="password"
                name="password"
                placeholder='Informe sua senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label>
              <ButtonInputSolicita type="submit" path="/login">Realizar Login</ButtonInputSolicita>
            </label>
          </form>
        </Content>
      </div>
    </ModalContainer>
  );
}

export default ModalRealizaLogin;