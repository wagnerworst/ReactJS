import React from 'react';
import './index.scss'

enum severidadeEnum{
  perigo,
  sucesso,
  alerta,
}

interface BotaoProps{
  texto: string,
  severidade: keyof typeof severidadeEnum,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Botao = ({texto, severidade, onClick}: BotaoProps) => {
  return(
    <>
      <button className={severidade} onClick={onClick}>{texto}</button>
    </>
  )
}

export default Botao;