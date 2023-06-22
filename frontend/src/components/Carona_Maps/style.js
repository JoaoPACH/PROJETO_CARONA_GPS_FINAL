import styled from "styled-components";
import { devices } from '../Styles/styles';

export const ContainerArea = styled.div`
  width: 100vw;
  height: 100vh;

  margin: 0;
  padding: 0;

  display: flex;

  @media only screen and ${devices.xs} {
    display: flex;
    flex-direction: column;
  }

  @media only screen and ${devices.sm} {
    display: flex;
    flex-direction: column;
  }

  @media only screen and ${devices.md} {
    display: flex;
    flex-direction: column;
  }

  @media only screen and ${devices.lg} {
    display: flex;
    flex-direction: column;
  }
`;

export const AreaSolicitarCarona = styled.div`
  background-color: #F9CB24;

  width: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  form label {
    width: 100%;
    
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 600;

    display: flex;
    justify-content: center;
    text-align: center;
  }

  @media only screen and ${devices.xs} {
    width: 100%;
    height: 60vh;

    margin: 0;
    padding: 16px 8px;

    form label{
      display: none;
    }
  }

  @media only screen and ${devices.sm} {
    width: 100%;
    height: 50vh;

    margin: 0;
    padding: 16px 8px;

    form label{
      display: none;
    }
  }

  @media only screen and ${devices.md} {
    width: 100%;
    height: 55vh;

    margin: 0;
    padding: 16px auto;

    form label{
      display: none;
    }
  }

  @media only screen and ${devices.lg} {
    width: 100%;
    height: 60vh;

    margin: 0;
    padding: 16px auto;

    form label{
      display: none;
    }
  }
`;

export const AreaHeader = styled.div`
  margin: 16px auto;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  button{
    width: 100px;
    height: 3vh;

    background-color: #FFFFFF;
    color: #000000;
    border: none;
    border-radius: 8px;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.2);

    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    
    padding: 20px 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and ${devices.xs} {
    button{
      width: 70px;
      height: 1vh;
  
      background-color: #FFFFFF;
      color: #000000;
      border: none;
      border-radius: 8px;
      box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
  
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 700;
      
      padding: 15px;
  
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and ${devices.sm} {
    button{
      width: 70px;
      height: 1vh;
  
      background-color: #FFFFFF;
      color: #000000;
      border: none;
      border-radius: 8px;
      box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
  
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 700;
      
      padding: 15px;
  
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and ${devices.md} {
    button{
      width: 70px;
      height: 1vh;
  
      background-color: #FFFFFF;
      color: #000000;
      border: none;
      border-radius: 8px;
      box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
  
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 700;
      
      padding: 15px;
  
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and ${devices.lg} {
    button{
      width: 70px;
      height: 1vh;
  
      background-color: #FFFFFF;
      color: #000000;
      border: none;
      border-radius: 8px;
      box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
  
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 700;
      
      padding: 15px;
  
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const InputSolicita = styled.input`
  width: 300px;
  height: 5vh;

  font-size: 16px;
  
  padding: 20px 12px;
  margin: 16px auto;

  display: flex;

  @media only screen and ${devices.xs} {
    width: 65%;

    font-size: 14px;

    margin: 12px auto;
  }

  @media only screen and ${devices.sm} {
    width: 65%;

    font-size: 14px;

    margin: 12px auto;
  }

  @media only screen and ${devices.md} {
    width: 50%;

    font-size: 14px;

    margin: 12px auto;
  }

  @media only screen and ${devices.lg} {
    width: 40%;

    font-size: 14px;

    margin: 12px auto;
  }
`;

export const ButtonInputSolicita = styled.button`
  width: 300px;
  height: 5vh;

  background-color: #FFFFFF;
  color: #000000;
  border: none;
  border-radius: 8px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.2);

  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  
  padding: 20px 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and ${devices.xs} {
    width: 200px;
    height: 5vh;

    background-color: #FFFFFF;
    color: #000000;
    border: none;
    border-radius: 8px;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.2);

    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;

    margin: auto;
    padding: 15px;
  }

  @media only screen and ${devices.sm} {
    width: 200px;
    height: 5vh;

    background-color: #FFFFFF;
    color: #000000;
    border: none;
    border-radius: 8px;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.2);

    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;

    margin: auto;
    padding: 15px;
  }

  @media only screen and ${devices.md} {
    width: 200px;
    height: 5vh;

    background-color: #FFFFFF;
    color: #000000;
    border: none;
    border-radius: 8px;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.2);

    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;

    margin: 24px auto;
    padding: 15px;
  }

  @media only screen and ${devices.md} {
    width: 200px;
    height: 5vh;

    background-color: #FFFFFF;
    color: #000000;
    border: none;
    border-radius: 8px;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.2);

    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;

    margin: 24px auto;
    padding: 15px;
  }
`;

export const MotoristasDisponiveis = styled.div`
  width: 70%;
  height: 100vh;
  
  padding: 24px;

  @media only screen and ${devices.xs} {
    width: 100%;
    height: 100vh;
  }

  @media only screen and ${devices.sm} {
    width: 100%;
    height: 100vh;
  }
  
  @media only screen and ${devices.md} {
    width: 100%;
    height: 100vh;
  }

  @media only screen and ${devices.lg} {
    width: 100%;
    height: 100vh;
  }
`;

export const ContainerCardMotorista = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: 1fr;
  
  @media (min-width: 658px){
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: bold;

  @media only screen and ${devices.xs} {
    display: none;
  }

  @media only screen and ${devices.sm} {
    display: none;
  }

  @media only screen and ${devices.md} {
    display: none;
  }

  @media only screen and ${devices.lg} {
    display: none;
  }
`;

export const Card = styled.div`
  background: #FFFFFF;
  width: 70%;

  padding: 8px 16px;
  border-radius: 5px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

  header{
    display: flex;
    justify-content: space-between;

    h3{
      font-size: 18px;
      font-weight: 500;
    }

    small{
      padding: 4px 8px;
      background: #CCCCCC;
      border-radius: 5px;
      color: #0A100D;
      font-weight: bold;
      font-size: 12px;
    }
  }

  p{
    font-size: 14px;
    margin-top: 16px;
    font-weight: normal;
  }

  button{
    width: 60%;
    height: 1vh;

    margin: 8px 0px;

    background-color: #F9CB24;
    color: #000000;
    border: none;
    border-radius: 8px;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.2);

    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    
    padding: 20px 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and ${devices.xs} {
    width: 100%;

    padding: 8px;
    border-radius: 5px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

    header{
      display: flex;
      justify-content: space-between;
  
      h3{
        font-size: 14px;
        font-weight: 500;
      }
  
      small{
        padding: 4px 8px;
        background: #CCCCCC;
        border-radius: 5px;
        color: #0A100D;
        font-weight: bold;
        font-size: 10px;
      }
    }
  
    p{
      font-size: 12px;
      margin-top: 8px;
      font-weight: normal;
    }
  
    button{
      width: 55%;
      height: 1vh;
  
      margin: 8px 0px;
  
      background-color: #F9CB24;
      color: #000000;
      border: none;
      border-radius: 8px;
      box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
  
      font-size: 10px;
      text-transform: uppercase;
      font-weight: 700;
      
      padding: 15px;
  
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and ${devices.sm} {
    width: 50%;

    padding: 8px;
    border-radius: 5px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

    header{
      display: flex;
      justify-content: space-between;
  
      h3{
        font-size: 14px;
        font-weight: 500;
      }
  
      small{
        padding: 4px 8px;
        background: #CCCCCC;
        border-radius: 5px;
        color: #0A100D;
        font-weight: bold;
        font-size: 10px;
      }
    }
  
    p{
      font-size: 12px;
      margin-top: 8px;
      font-weight: normal;
    }
  
    button{
      width: 55%;
      height: 1vh;
  
      margin: 8px 0px;
  
      background-color: #F9CB24;
      color: #000000;
      border: none;
      border-radius: 8px;
      box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
  
      font-size: 10px;
      text-transform: uppercase;
      font-weight: 700;
      
      padding: 15px;
  
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and ${devices.md} {
    width: 100%;

    padding: 8px;
    border-radius: 5px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

    header{
      display: flex;
      justify-content: space-between;
  
      h3{
        font-size: 14px;
        font-weight: 500;
      }
  
      small{
        padding: 4px 8px;
        background: #CCCCCC;
        border-radius: 5px;
        color: #0A100D;
        font-weight: bold;
        font-size: 10px;
      }
    }
  
    p{
      font-size: 12px;
      margin-top: 8px;
      font-weight: normal;
    }
  
    button{
      width: 55%;
      height: 1vh;
  
      margin: 8px 0px;
  
      background-color: #F9CB24;
      color: #000000;
      border: none;
      border-radius: 8px;
      box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
  
      font-size: 10px;
      text-transform: uppercase;
      font-weight: 700;
      
      padding: 15px;
  
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and ${devices.lg} {
    width: 60%;

    padding: 8px;
    border-radius: 5px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

    header{
      display: flex;
      justify-content: space-between;
  
      h3{
        font-size: 14px;
        font-weight: 500;
      }
  
      small{
        padding: 4px 8px;
        background: #CCCCCC;
        border-radius: 5px;
        color: #0A100D;
        font-weight: bold;
        font-size: 10px;
      }
    }
  
    p{
      font-size: 12px;
      margin-top: 8px;
      font-weight: normal;
    }
  
    button{
      width: 55%;
      height: 1vh;
  
      margin: 8px 0px;
  
      background-color: #F9CB24;
      color: #000000;
      border: none;
      border-radius: 8px;
      box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
  
      font-size: 10px;
      text-transform: uppercase;
      font-weight: 700;
      
      padding: 15px;
  
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
