import { Link } from "react-router-dom"

interface MenuProps{
  className?: string

}

const Menu = ( {className}: MenuProps ) => {
  return(
    <>
    <nav className={`${className}`}>
      <ul >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/formulario">Formulario</Link></li>
          <li><Link to="/listagem">Listagem</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Menu