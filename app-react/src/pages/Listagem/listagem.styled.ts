import styled from "styled-components";
import Listagem from ".";

const ListagemCustom = styled(Listagem)`
  padding: 7vh;
  display: flex;
  justify-content: center;

  table {
    width: 50vw;
    border-collapse: collapse;
    background-color: rgba(42,42,42);
    border-radius: 15px;
    padding: 16px;

    thead {
      background-color: rgba(255,255,255);
      border-top: 16px;

      th {
        padding: 12px;
        text-align: left;
        border-bottom: 2px solid $border-color;
        color: rgba(0,0,0,.9);
      }
    }

    tbody {
      tr {
        &:hover {
          background-color: rgba(50,50,50);
        }

        td {
          padding: 12px;
        }
      }
    }
  }
`;

export default ListagemCustom;