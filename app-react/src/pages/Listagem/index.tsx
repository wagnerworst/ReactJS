import { Link } from "react-router-dom";

interface ListagemProps {
  className?: string;
}

const Listagem = ({className}: ListagemProps) => {

  const items = [
    {
        id_departamento: 1,
        nome: "Recursos Humanos",
        sigla: "RH",
    },
    {
      id_departamento: 2,
      nome: "Gestão Financeiro",
      sigla: "GF",
    },
    {
      id_departamento: 3,
      nome: "Compras",
      sigla: "CO",
    },
  ];

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
            {items.map((item) => 
              <tr>
                <Link to={`${item.id_departamento}`}>
                  <td>{`${item.nome}`}</td>
                </Link>
                <td>{`${item.sigla}`}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Listagem;

