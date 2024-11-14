import { useEffect ,useState } from 'react';
import './App.css';
import Header from './Components/Header';
import SelecionaCurso from './Components/SelecionaCurso';
import BotaoCustom from './Components/Botao/botao.styled';
import MenuCustom from './Components/Menu/menu.styled';

const App = () => {
  //Variavel "dinâmcia"
  const [numero, setNumero] = useState(0);
  
  //Monitora algo sempre vai acontecer quando carregar a página
  useEffect(() => {
    if(numero != 0)
      {
        alert("Numero está diferente de zero");
      }
  },
  [numero]
  )

  return (
    <>
      <MenuCustom/>
      <Header 
        texto="Aula" 
        aula={2} 
        data={new Date(2024,10,15)}
      >
        Nublado
      </Header>
      <br />

      <Header 
        texto="Aula" 
        aula={3} 
        data={new Date(2024,11,7)}
      >
        Nublado
      </Header>
      <BotaoCustom 
        texto='Contador'
        severidade='perigo'
        onClick={()=> {setNumero(numero + 1)}}
      />
        <BotaoCustom 
        texto='Decrementador'
        severidade='sucesso'
        onClick={()=> {setNumero(numero - 1)}}
      />
      <BotaoCustom 
        texto='Zerar'
        severidade='alerta'
        onClick={()=> {setNumero(0)}}
      />
      <p>{numero}</p>
      <SelecionaCurso/>

      <Header 
        texto="Aula" 
        aula={5} 
        data={new Date(2024,11,12)}
      >
        Nublado
      </Header>
      <BotaoCustom 
        texto='Amigo'
        severidade='amigo'
        onClick={()=> {setNumero(numero + 1)}}
      />
    </>
  )
}

export default App
