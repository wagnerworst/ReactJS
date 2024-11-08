import './index.scss'

interface HeaderProps {
  texto: string,
  aula: number,
  data: Date,
  children?: React.ReactNode
}

const Header = ({texto, aula, data, children}: HeaderProps) => {

  return (
    <>
      <header>
        <h1>{texto} {aula} - Dia {data.toLocaleDateString()} - {children}</h1>
      </header>
    </>
  )
}
export default Header;