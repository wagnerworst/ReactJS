import { useEffect ,useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Botao from './Components/Botao';

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
      <Botao 
        texto='Contador'
        severidade='perigo'
        onClick={()=> {setNumero(numero + 1)}}
      />
        <Botao 
        texto='Decrementador'
        severidade='sucesso'
        onClick={()=> {setNumero(numero - 1)}}
      />
      <Botao 
        texto='Zerar'
        severidade='alerta'
        onClick={()=> {setNumero(0)}}
      />
      <p>{numero}</p>
    </>
  )
}

export default App
