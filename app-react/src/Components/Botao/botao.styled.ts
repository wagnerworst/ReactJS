import styled from "styled-components";
import Botao from ".";

const BotaoCustom = styled(Botao)`
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: 15px;
  margin-right: 5px;
  
  &:hover{
    cursor: pointer;
  }

  &.perigo{
    background-color: rgb(252, 138, 138);
  }

  &.sucesso{
    background-color: rgb(135, 207, 135);
  }

  &.alerta{
    background-color: rgb(207, 206, 135);
  }

  &.amigo{
    background-color: rgb(68, 162, 224);
  }
`;

export default BotaoCustom;
