import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MenuCustom from './Components/Menu/menu.styled';
import HomeCustom from './pages/Home/home.styled';
import FormularioCustom from './pages/Formulario/formulario.styled';
import ListagemCustom from './pages/Listagem/listagem.styled';
import ListagemDetalhesCustom from './pages/ListagemDetalhes/listagemDetalhes.styled';
import AsideCustom from './Components/Aside/aside.styled';
import FooterCustom from './Components/Footer/footer.styled';


const App = () => {
  return (

      <BrowserRouter>
          <MenuCustom/>
          <AsideCustom/>
          <section>
            <Routes>
              <Route path='/' element={<HomeCustom/>}></Route>
              <Route path='/formulario' element={<FormularioCustom/>}></Route>
              <Route path='/listagem'>
                <Route index element={<ListagemCustom/>}/>
                <Route path=":id" element={<ListagemDetalhesCustom/>}></Route>
              </Route>
              <Route path='*' element={<h1>404 - Não Encontrado</h1>}></Route>
            </Routes>
          </section>
          <FooterCustom/>
      </BrowserRouter>
  )
}

export default App
