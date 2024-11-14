import StyledLabel from "./SelecionaCurso.styled";
import { ChangeEvent, useState, Fragment } from "react";


const SelecionaCurso = () => {
  const [curso, setCurso] = useState("Nenhum curso selecionado");
  const cursos = ["React", "Node", "Js e Css Pro"];

  const alteraCurso = (evento: ChangeEvent<HTMLInputElement>) => {
    // if(verificar se tá 1 ou zero) se for botar o set abaixo dentro do IF
    setCurso(evento.target.value);
  }

  const opcaoCurso = (item: string, index: number) => {
    return(
      <Fragment key={index}>
            <input type="radio" name="Cursos" value={item} onChange={alteraCurso}/>
            <StyledLabel htmlFor={item}>{item}</StyledLabel>
            <br />
      </Fragment>
    )
  }

  return(
    <>
      <h1>Curso Selecionado: {curso}</h1>

      {cursos.map((item, index)=>
      {
        return opcaoCurso(item, index);
      })}
    </>
  )
}

export default SelecionaCurso