import { useParams, useNavigate } from "react-router-dom"
import BotaoCustom from "../../Components/Botao/botao.styled"

interface ListagemDetalhesProps{
  className?: string
}

const ListagemDetalhes = ({className}: ListagemDetalhesProps) =>{

  const { id } = useParams();
  const navigate = useNavigate();

  return(
    <>
    <div className={`${className}`}>
      <main>
          <h1 >Chegou o ID: {id}</h1>
          <BotaoCustom severidade="amigo" texto="Voltar" onClick={() => {
            navigate("/listagem")
          }}/>    
      </main>
    </div>
    </>
  )
}

export default ListagemDetalhes