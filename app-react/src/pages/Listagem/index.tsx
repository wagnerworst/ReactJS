import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../Services/api";

interface ListagemProps {
  className?: string;
}

interface ItemProps {
  Nome: string,
  Sigla: string
}

const Listagem = ({ className }: ListagemProps) => {

  const [items, setItems] = useState([]);
  //Tem que ser feito dessa forma pois o UseEffect não é asyncrono então não se pode enviar uma função
  //async pra ele. Então se coloca uma função de callback normal e dentro dele uma assincrona pra burlar,
  //aí ele opa tenho uma função de callBack ela não é async de boas vamo embora ai dentro ele bahhh malandro 
  //a função de dentro é async putz agora vou ter que esperar.
  useEffect(() => {
    if (items.length == 0) {
      const listaDepartamentos = async () => {
        try {
          const result = await api.get("/departamentos");
          setItems(result.data);
        }
        catch (e) {
          console.log("Deu erro na API")
        }
      };
      listaDepartamentos();
    }
  }, [items]);

  return (
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
                <Link to={`${item.id}`}>
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

