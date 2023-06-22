import React, { useState } from 'react';

import api from '../../api.js';

import './style.js';
import {
  ButtonInputSolicita,
  Content,
  InputSolicita,
  ModalContainer
} from './style.js';

const ModalRealizarCadastro = ({
  id='modal',
  onClose = () => {}
  }) => {

  const [repos, setRepos] = useState([]);
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');

  const handleOutsideClick = (e) => {
    if(e.target.id === id){
      onClose();
    }
  }

  const Cadastrar = () => {
    api
    .post('/api/users/', {
      firstName: FirstName,
      lastName: LastName,
      email: Email,
      telefone: Phone,
      password: Password
    })
    .then(res => {
      console.log(res.data)
      setRepos(res.data)
    });
  }

  return(
    <ModalContainer id={ id } onClick={ handleOutsideClick }>
      <div className="container">
        <button className="close" onClick={ onClose } />
        <Content>
          <h2>Realizar Cadastro</h2>

          <form 
            onSubmit = { Cadastrar }
          >
            <label>
              <InputSolicita
                type="text"
                id="PrimeiroNome"
                name="PrimeiroNome"
                placeholder='Informe o primeiro nome'
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label>
              <InputSolicita
                type="text"
                id="Sobrenome"
                name="Sobrenome"
                placeholder='Informe o sobrenome'
                value={LastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label>
              <InputSolicita
                type="email"
                id="email"
                name="email"
                placeholder='Informe o seu e-mail'
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <InputSolicita
                type="tel"
                id="telefone"
                name="telefone"
                placeholder='Informe seu telefone'
                pattern="^[1-9]{2}\-[2-9][0-9]{7,8}$"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <label>
              <InputSolicita
                type="password"
                id="password"
                name="password"
                placeholder='Informe sua senha'
                value={Password}
                OnChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label>
              <ButtonInputSolicita
                type="submit"
              >
                Realizar Cadastro
              </ButtonInputSolicita>
            </label>
          </form>
        </Content>
      </div>
    </ModalContainer>
  );
}

export default ModalRealizarCadastro;