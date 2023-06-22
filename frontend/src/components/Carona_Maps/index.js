import React, { useContext } from "react";

import './style.js';
import {
  ContainerArea,
  AreaSolicitarCarona,
  AreaHeader,
  InputSolicita,
  ButtonInputSolicita,
  MotoristasDisponiveis,
  ContainerCardMotorista,
  Title,
  Card
} from './style.js';

import { AuthContext } from "../../contexts/auth.js";

const Carona_Maps = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  return(
    <>
      <ContainerArea>
        <AreaSolicitarCarona>
          <AreaHeader>
            <button onClick={handleLogout}>Sair</button>
          </AreaHeader>

          <form>
            <label>Destino:</label>
            <InputSolicita
              type="text"
              placeholder='Informe a origem'
            />
            <label>Origem:</label>
            <InputSolicita
              type="text"
              placeholder='Informe o destino'
            />
            <label>Data da carona:</label>
            <InputSolicita
              type="date"
              id="data"
              name="data"
            />
            <label></label>
            <ButtonInputSolicita
              type="button"
            >
              Solicitar Carona
            </ButtonInputSolicita>
            
          </form>
        </AreaSolicitarCarona>

        <MotoristasDisponiveis>
          <Title>Motoristas disponíveis</Title>
          <ContainerCardMotorista>
            <Card>
              <header>
                <h3>Motorista: <strong>Matheus</strong></h3>
                <small>SAÍDA: 16:20</small>
              </header>
              <p>Local de saída: UTFPR-CP</p>
              <button>Solicitar Carona</button>
            </Card>
          </ContainerCardMotorista>
          <ContainerCardMotorista>
            <Card>
              <header>
                <h3>Motorista: <strong>Matheus</strong></h3>
                <small>SAÍDA: 16:20</small>
              </header>
              <p>Local de saída: UTFPR-CP</p>
              <button>Solicitar Carona</button>
            </Card>
          </ContainerCardMotorista>
          <ContainerCardMotorista>
            <Card>
              <header>
                <h3>Motorista: <strong>Matheus</strong></h3>
                <small>SAÍDA: 16:20</small>
              </header>
              <p>Local de saída: UTFPR-CP</p>
              <button>Solicitar Carona</button>
            </Card>
          </ContainerCardMotorista>
        </MotoristasDisponiveis>
      </ContainerArea>
    </>
  );
}

export default Carona_Maps;
/**
function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{lat: 44, lng: -80}}
      mapContainerClassName= { ConfigMaps } >
        <Marker position= {{lat: 44, lng: -80}}/>
    </GoogleMap>
  );
}
 */