import { useParams } from "react-router-dom"

interface ListagemDetalhesProps{
  className?: string
}

const ListagemDetalhes = ({className}: ListagemDetalhesProps) =>{

  const { id } = useParams;

  return(
    <>
      <h1 className={`${className}`}>Chegou o ID: {id}</h1>
    </>
  )
}

export default ListagemDetalhes