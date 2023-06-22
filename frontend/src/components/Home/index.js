//DESENVOLVER A PÁGINA INICIAL DA APLICAÇÃO

import React, { useState } from 'react';

import ModalSolicitaCarona from '../SolicitaCarona/index';
import ModalRealizaCadastro from '../RealizarCadastro/index';
import ModalRealizaLogin from '../RealizarLogin/index';

import './style.js';
import {
  AreaButtonsHeader,
  HeaderContainer,
  Dobra1,
  ButtonD1,
  Dobra2,
  Dobra3,
  SolucaoDobra3,
  Rodape,
  ButtonRealizaLogin,
  ButtonRealizaCadastro
} from './style.js';

export default function Header(){
  const [isModalSolicitaCaronaVisible, setIsModalSolicitaCaronaVisible] = useState(false);
  const [isModalRealizaCadastroVisible, setIsModalRealizaCadastroVisible ] = useState(false);
  const [isModalRealizaLoginVisible, setIsModalRealizaLoginVisible ] = useState(false);

  return(
    <>
      <AreaButtonsHeader>
        <ButtonRealizaCadastro onClick={ () => setIsModalRealizaCadastroVisible(true) }>
          Realizar Cadastro
        </ButtonRealizaCadastro>
        { isModalRealizaCadastroVisible ? (
          <ModalRealizaCadastro onClose={ () => setIsModalRealizaCadastroVisible(false) } />
        ) : null }
        <ButtonRealizaLogin onClick={ () => setIsModalRealizaLoginVisible(true) }>
          Realizar Login
        </ButtonRealizaLogin>
        { isModalRealizaLoginVisible ? (
          <ModalRealizaLogin onClose={ () => setIsModalRealizaLoginVisible(false) } />
        ) : null }
      </AreaButtonsHeader>

      <HeaderContainer>
        <Dobra1>
          <h1>
            Garanta mais conforto <br />
            e segurança nas <br />
            suas viagens 
          </h1>
          <ButtonD1
            onClick={ () => setIsModalSolicitaCaronaVisible(true) }
            
          >
            Consultar Viagem
          </ButtonD1>
          { isModalSolicitaCaronaVisible ? (
            <ModalSolicitaCarona onClose = {() => setIsModalSolicitaCaronaVisible(false) } />
          ) : null }
        </Dobra1>
      </HeaderContainer>

      <Dobra2>
        <h3>Economize tempo e dinheiro</h3>
        <h3>Ganhe conforto e segurança</h3>
        <h3>Sustentabilidade e meio ambiente</h3>
      </Dobra2>
      
      <Dobra3>
          <h1>
            CHEGA DE ATRASOS E INCERTEZAS!
          </h1>
          <SolucaoDobra3>
            <div>
              <h2>
                Planeje suas viagens com facilidade.
              </h2>
              <p>
                Encontre caronas convenientes e organize seus deslocamentos de forma simples e eficiente.
              </p>
            </div>
            <div>
              <h2>
                Tenha mais flexibilidade em suas jornadas.
              </h2>
              <p>
                Com as caronas, você pode ajustar os horários de partida e chegada de acordo com suas necessidades, garantindo uma maior liberdade e adaptabilidade em suas viagens.
              </p>
            </div>
            <div>
              <h2>
                Explore novos destinos com caronas compartilhadas.
              </h2>
              <p>
                Descubra lugares incríveis ao compartilhar viagens com pessoas que têm os mesmos interesses, aproveitando a oportunidade de explorar juntos novos horizontes.
              </p>
            </div>
            <div>
              <h2>
                Contribua para um futuro sustentável com caronas.
              </h2>
              <p>
                Ao solicitar caronas, você reduz a pegada de carbono e apoia um estilo de vida mais ecologicamente consciente, promovendo a sustentabilidade ambiental.
              </p>
            </div>
          </SolucaoDobra3>
      </Dobra3>
      
      <Rodape>
        <h4>
          Copyright © 2023 | Todos os direitos reservados
        </h4>
      </Rodape>
    </>
  );
}