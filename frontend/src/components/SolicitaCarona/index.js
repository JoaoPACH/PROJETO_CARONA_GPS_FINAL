import React from "react";

import './style.js';
import {
  ButtonInputSolicita,
  Content,
  InputSolicita,
  ModalContainer
} from './style.js';

const Modal = ({
  id='modal',
  onClose = () => {}
  }) => {
  const handleOutsideClick = (e) => {
    if(e.target.id === id){
      onClose();
    }
  }
  
  return (
    <ModalContainer id={ id } onClick={ handleOutsideClick }>
      <div className="container">
        <button className="close" onClick={ onClose } />
        <Content>
          <h2>Solicite uma carona</h2>

          <form>
            <label>
              <InputSolicita
                type="text"
                placeholder='Informe a cidade de origem'
              />
            </label>
            <label>
              <InputSolicita
                type="text"
                placeholder='Informe a cidade de destino'
              />
            </label>
            <label>
              <InputSolicita
                type="date"
                id="data"
                name="data"
              />
            </label>
            <label>
              <ButtonInputSolicita
                type="button"
              >
                Solicitar Carona
              </ButtonInputSolicita>
            </label>
          </form>
        </Content>
      </div>
    </ModalContainer>
  )
};

export default Modal;