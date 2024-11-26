import { useContext } from "react"
import { Link } from "react-router-dom"
import PrefConxtext from "../../Context/generalContext"

interface MenuProps{
  className?: string

}

const prefs = useContext(PrefConxtext);
console.log(prefs);

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