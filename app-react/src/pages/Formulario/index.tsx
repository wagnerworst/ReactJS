import { useState } from "react"
import BotaoCustom from "../../Components/Botao/botao.styled"

interface FormularioProps{
  className?: string
}

const Formulario = ({className}:FormularioProps) => {

  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensagem, setMensagem ] = useState("")
  const [exibirMsg, setExibirMsg ] = useState(false)

  const atualizaDados = (event: React.ChangeEvent<HTMLInputElement>)=>{
    if(event.target.name === "Nome"){
      setNome (event.target.value);
      return;
    }

    if(event.target.name === "Empresa"){
      setEmpresa (event.target.value);
      return;
    }
  };

  const validaFormulario = () =>{
    if(nome == "" || empresa == "")
    {
      setMensagem("Nome e Empresa são obrigatórios");
      setExibirMsg(true)
      return;
    }
    
    if(nome && empresa)
      {
        setExibirMsg(false)
        return;
      }
  }

  return (
    <>
      <div className={`${className}`}>
        <div className="formulario">
          <label htmlFor="Recrutador">Nome</label>
          <input 
            className={`${exibirMsg ? "inputInvalido" : ""}`}
            type="text" 
            name="Nome" 
            placeholder="Wagner Willian Worst"
            onChange={atualizaDados}
          />

          <label htmlFor="Empresa">Empresa</label>
          <input 
            className={`${exibirMsg ? "inputInvalido" : ""}`}
            type="text" 
            name="Empresa" 
            placeholder="Wagner's Corp"
            onChange={atualizaDados}
          />
          
          <label htmlFor="Empresa">Motivo Contato</label>
          <textarea name="postContent" rows={9} cols={40} />

          <BotaoCustom 
            texto="Enviar" 
            severidade="sucesso"
            onClick={validaFormulario}
          />
          <span className={`${exibirMsg ? "" : "hidden"}`}>{mensagem}</span>
        </div>
      </div>
    </>
  )
}

export default Formulario;