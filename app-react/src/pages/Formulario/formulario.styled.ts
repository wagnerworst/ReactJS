import styled from "styled-components";
import Formulario from ".";

const FormularioCustom = styled(Formulario)`
display: flex;
justify-content: center;
padding-top: 5vh;

.formulario{
  height: auto;
  width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  background-color: rgba(42,42,42);
  border-radius: 15px;
  padding: 2%;

  input{
    width: 70%;
    height: 35px;
    border-radius: 15px;
    background-color: rgba(0,0,0,.5%);
    padding: 7px;
    color: white;
    font-family: "Roboto", serif;
    font-size: 15px;
  }

  textarea{
    border-radius: 15px;
    background-color: rgba(0,0,0,.5%);
  }
}
`;

export default FormularioCustom;