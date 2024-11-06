import './App.css'
import Header from './Components/Header'

const App = () => {
  return (
    <>
      <Header 
        texto="Aula" 
        aula={2} 
        data={new Date(2024,10,15)}
      >
        Nublado
      </Header>
    </>
  )
}

export default App
