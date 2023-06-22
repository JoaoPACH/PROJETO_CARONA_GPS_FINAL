import styled from "styled-components";
import { devices } from '../Styles/styles';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  
  .container {
    background-color: #FFFFFF;
    color: #000000;
    width: 60%;
    height: 60%;
    border-radius: 20px;

    .close {
      background-color: transparent;
      border: none;
      outline: none;
      width: 24px;
      height: 24px;

      right: calc(-100% + 32px);
      top: 16px;
      cursor: pointer;
      display: flex;
      position: relative;
      align-items: center;

      &:before,
      &:after {
        content: ' ';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: #000000;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
  }

  @media only screen and ${devices.xs} {
    .container{
      width: 100%;

      .close {
        width: 24px;
        height: 24px;

        right: calc(-100% + 32px);
        top: 8px;

        cursor: pointer;
        display: flex;
        position: relative;
        align-items: center;
      }
    }
  }
`;

export const Content = styled.div`
  height: 50vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media only screen and ${devices.xs} {
    padding: 5px;
    
    h2 {
      text-align: center;
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
  flex-direction: column;
`;

export const ButtonInputSolicita = styled.button`
  width: 300px;
  height: 5vh;

  background-color: #F9CB24;
  color: #000000;
  border: none;
  border-radius: 8px;

  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  
  padding: 20px 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
