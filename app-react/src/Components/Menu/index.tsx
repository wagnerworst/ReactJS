interface MenuProps{
  className?: string
}

const Menu = ( {className}: MenuProps ) => {
  return(
    <>
    <nav className={`${className}`}>
      <ul >
          <li><a href="">Home</a></li>
          <li><a href="">Sobre</a></li>
          <li><a href="">Contato</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Menu