import { Link } from "react-router-dom";

interface ListagemProps {
  className?: string;
}

const Listagem = ({className}: ListagemProps) => {
  return(
    <>
      <div className={`${className}`}>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sigla</th>
            </tr>
          </thead>

          <tbody>
          
            <tr>
              <Link to="789">
                <td>Recursos Humanos</td>
              </Link>
              <td>RH</td>
            </tr>
            
            <tr>
              <td>Recursos Humanos</td>
              <td>RH</td>
            </tr>
            <tr>
              <td>Recursos Humanos</td>
              <td>RH</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Listagem;

