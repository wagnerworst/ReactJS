import BotaoCustom from "../../Components/Botao/botao.styled"

interface FormularioProps{
  className?: string
}

const Formulario = ({className}:FormularioProps) => {
  return (
    <>
      <div className={`${className}`}>
        <div className="formulario">
          <label htmlFor="Recrutador">Nome</label>
          <input type="text" name="Nome" placeholder="Wagner Willian Worst"/>
          <label htmlFor="Empresa">Empresa</label>
          <input type="text" name="Empresa" placeholder="Wagner's Corp"/>
          <label htmlFor="Empresa">Motivo Contato</label>
          <textarea name="postContent" rows={9} cols={40} />
          <BotaoCustom texto="Enviar" severidade="sucesso"/>
        </div>
      </div>
    </>
  )
}

export default Formulario;