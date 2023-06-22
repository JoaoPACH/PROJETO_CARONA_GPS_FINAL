/* ESTILO DA APLICACAO INDEX - HOME */

import styled from "styled-components";
import { devices } from '../Styles/styles';

export const AreaButtonsHeader = styled.div`
  background-color: #F9CB24;

  width: 100%;
  height: 20vh;

  padding: 16px 0;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and ${devices.xs} {
    background-color: #F9CB24;

    width: 100%;
    height: 18vh;

    padding: 16px 0;

    display: block;
  }

  @media oly screen and ${devices.sm} {
    background-color: #F9CB24;

    width: 100%;
    height: 15vh;

    padding: 16px 0;

    display: flex;
  }

  @media only screen and ${devices.md} {
    background-color: #F9CB24;

    width: 100%;
    height: 12vh;

    padding: 16px 0;

    display: flex;
    flex-direction: row;
  }

  @media only screen and ${devices.lg} {
    background-color: #F9CB24;

    width: 100%;
    height: 12vh;

    padding: 16px 0;
    
    display: flex;
    flex-direction: row;
  }

  @media only screen and ${devices.xl} {
    background-color: #F9CB24;

    width: 100%;
    height: 12vh;

    padding: 16px 0;
    
    display: flex;
    flex-direction: row;
  }
`;

export const ButtonRealizaCadastro = styled.div`
  margin: 8px auto;
  padding: 16px;

  width: 70%;
  height: 5vh;

  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  background-color: #FFFFFF;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 7px;

  cursor: pointer;

  box-shadow: 5px 5px rgba(0, 0, 0, 0.2);

  @media only screen and ${devices.xs} {
    width: 80%;
    height: 5vh;
    
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    background-color: #FFFFFF;

    box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
  }

  @media only screen and ${devices.sm} {
    width: 40%;
    height: 5vh;
    
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    background-color: #FFFFFF;

    box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
  }

  @media only screen and ${devices.md} {
    width: 40%;
    height: 6vh;
    
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    background-color: #FFFFFF;

    box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
  }

  @media only screen and ${devices.lg} {
    width: 40%;
    height: 6vh;
    
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    background-color: #FFFFFF;

    box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
  }

  @media only screen and ${devices.xl} {
    width: 30%;
    height: 6vh;
    
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    background-color: #FFFFFF;

    box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
  }
`;

export const ButtonRealizaLogin = styled.div`
  margin: 8px auto;
  padding: 16px;

  width: 70%;
  height: 5vh;

  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  background-color: #FFFFFF;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 7px;

  cursor: pointer;

  box-shadow: 5px 5px rgba(0, 0, 0, 0.2);

  @media only screen and ${devices.xs} {
    margin: 0px auto;
    
    width: 80%;
    height: 5vh;
    
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    background-color: #FFFFFF;

    box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
  }

  @media only screen and ${devices.sm} {
    width: 40%;
    height: 5vh;
    
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    background-color: #FFFFFF;

    box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
  }

  @media only screen and ${devices.md} {
    width: 40%;
    height: 6vh;
    
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    background-color: #FFFFFF;

    box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
  }

  @media only screen and ${devices.lg} {
    width: 40%;
    height: 6vh;
    
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    background-color: #FFFFFF;

    box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
  }

  @media only screen and ${devices.xl} {
    width: 30%;
    height: 6vh;
    
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    background-color: #FFFFFF;

    box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
  }
`;

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 70vh;

  padding: 32px 8px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and ${devices.xs} {
    width: 100vw;
    height: 70vh;

    padding: 32px 8px;
  }

  @media only screen and ${devices.sm} {
    width: 100vw;
    height: 60vh;

    padding: 16px 8px;
  }

  @media only screen and ${devices.md} {
    width: 100vw;
    height: 60vh;

    padding: 16px 8px;
  }

  @media only screen and ${devices.lg} {
    width: 100vw;
    height: 60vh;

    padding: 16px 8px;
  }

  @media only screen and ${devices.xl} {
    width: 100vw;
    height: 70vh;

    padding: 16px 8px;
  }
`;

export const Dobra1 = styled.div`
  height: 100%;
  width: 100%;

  font-size: 14px;
  font-color: #110B11;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and ${devices.xs} {
    width: 100%;
    height: 100%;

    font-size: 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and ${devices.sm} {
    width: 100%;
    height: 100%;

    font-size: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and ${devices.md} {
    width: 100%;
    height: 100%;

    font-size: 22px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and ${devices.lg} {
    width: 100%;
    height: 100%;

    font-size: 22px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and ${devices.xl} {
    width: 100%;
    height: 100%;

    font-size: 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonD1 = styled.button`
  margin: 42px auto;  

  width: 80%;
  height: 7vh;

  font-size: 24px;
  text-transform: capitalize;
  font-weight: 400;
  background-color: #F9CB24;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 7px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.2);

  .modal-overlay {
    background: #ECECEC;
    position: fixed;
    
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    width: 90%;
    max-width: 500px;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 5px;
  }

  button {
    padding: 5px;
    font-size: large;
    float: right;
    cursor: pointer;
  }

  @media only screen and ${devices.xs} {
    width: 100%;
  }

  @media only screen and ${devices.sm} {
    width: 45%;
  }

  @media only screen and ${devices.md} {
    width: 45%;
  }

  @media only screen and ${devices.lg} {
    width: 40%;
  }

  @media only screen and ${devices.xl} {
    width: 40%;
  }
`;

export const Dobra2 = styled.div`
  background-color: #2E5EAA;

  padding: 5px;

  font-size: 12px;
  color: #FFFEED;

  display: block;
  direction: columns;
  align-items: center;

  h3 {
    width: 100%;
    height: 5vh;

    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  @media only screen and ${devices.xs} {
    padding: 5px;

    display: block;
    direction: columns;
    align-items: center;

    font-size: 12px;

    h3 {
      width: 100%;
    }
  }

  @media only screen and ${devices.sm} {
    padding: 5px;

    display: block;
    direction: columns;
    align-items: center;

    font-size: 16px;

    h3 {
      width: 100%;
    }
  }

  @media only screen and ${devices.md} {
    padding: 5px;

    display: block;
    direction: columns;
    align-items: center;

    font-size: 16px;

    h3 {
      width: 100%;
    }
  }

  @media only screen and ${devices.lg} {
    padding: 5px;

    display: block;
    direction: columns;
    align-items: center;

    font-size: 16px;

    h3 {
      width: 100%;
    }
  }

  @media only screen and ${devices.xl} {
    padding: 5px;

    display: flex;
    direction: columns;
    align-items: center;

    font-size: 14px;

    h3 {
      width: 100%;
    }
  }
`;

export const Dobra3 = styled.div`
  padding: 10px auto;
  margin: 0px;

  h1 {
    margin: 16px 8px;

    font-size: 28px;

    text-align: center;
  }

  div {
    padding: 10px;
      margin: 0px;

      display: block;

      h2 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
        text-align: center;
      }
  }

  @media only screen and ${devices.xs} {
    padding: 10px auto;
    margin: 0px;

    h1{
      margin: 10px 5px;

      font-size: 28px;
    }

    div {
      padding: 10px;
      margin: 0px;

      display: block;

      h2 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
        text-align: center;
      }
    }
  }

  @media only screen and ${devices.sm} {
    padding: 10px auto;
    margin: 0px;

    h1{
      margin: 10px 5px;

      font-size: 32px;
    }

    div {
      padding: 10px;
      margin: 0px;

      display: block;

      h2 {
        font-size: 18px;
      }

      p {
        font-size: 14px;
        text-align: center;
      }
    }
  }

  @media only screen and ${devices.md} {
    padding: 10px auto;
    margin: 0px;

    h1{
      margin: 10px 5px;

      font-size: 32px;
    }

    div {
      padding: 10px;
      margin: 0px;

      display: block;

      h2 {
        font-size: 18px;
      }

      p {
        font-size: 14px;
        text-align: center;
      }
    }
  }

  @media only screen and ${devices.lg} {
    padding: 10px auto;
    margin: 0px;

    h1{
      margin: 10px 5px;

      font-size: 32px;
    }

    div {
      padding: 10px;
      margin: 0px;

      display: block;

      h2 {
        font-size: 18px;
      }

      p {
        font-size: 14px;
        text-align: center;
      }
    }
  }

  @media only screen and ${devices.xl} {
    padding: 10px auto;
    margin: 0px;

    h1{
      margin: 10px 5px;

      font-size: 32px;
    }

    div {
      padding: 10px;
      margin: 0px;

      width: 100%;

      h2 {
        font-size: 18px;
      }

      p {
        font-size: 14px;
        text-align: center;
      }
    }
  }
`;

export const SolucaoDobra3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    margin: 20px;

    font-size: 18px;
    text-align: center;

    h2 {
      text-transform: uppercase;
      padding-bottom: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const Rodape = styled.div`
  height: 5vh;

  background-color: #F9CB24;

  color: #010421;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and ${devices.xs} {
    font-size: 12px;
  }
`;
