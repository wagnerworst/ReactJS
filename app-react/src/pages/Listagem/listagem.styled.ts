import styled from "styled-components";
import Listagem from ".";

const ListagemCustom = styled(Listagem)`
  margin-top: 7vh;
  display: flex;
  justify-content: center;
  width: 100vw;

  table {
    width: 50vw;
    border-collapse: collapse;
    background-color: rgba(42,42,42);
    border-radius: 15px;
    padding: 16px;

    thead {
      background-color: $table-header-color;

      th {
        padding: 12px;
        text-align: left;
        border-bottom: 2px solid $border-color;
        color: $text-color;
      }
    }

    tbody {
      tr {
        &:hover {
          background-color: $table-row-hover-color;
        }

        td {
          padding: 12px;
          border-bottom: 1px solid $border-color;
          color: $text-color;
        }
      }
    }
  }
`;

export default ListagemCustom;