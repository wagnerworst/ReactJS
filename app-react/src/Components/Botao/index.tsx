import React from 'react';

enum severidadeEnum{
  perigo,
  sucesso,
  alerta,
  amigo
}

interface BotaoProps{
  texto: string,
  severidade: keyof typeof severidadeEnum,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  className?: string
}

const Botao = ({className, texto, severidade, onClick}: BotaoProps) => {
  return(
    <>
      <button className={`${className} ${severidade}`} onClick={onClick}>{texto}</button>
    </>
  )
}

export default Botao;