import Menu from ".";
import styled from "styled-components";

const MenuCustom = styled(Menu)`
/* Estilo para a lista */
ul {
  list-style: none; /* Remove os marcadores */
  padding: 0;
  margin: 0;
  background-color: #000; /* Fundo preto */
  display: flex; /* Para os itens ficarem em linha */
  justify-content: center; /* Centraliza os itens horizontalmente */
  border-radius: 15px;
}

/* Estilo para os itens da lista */
ul li {
  margin: 0 15px; /* Espaçamento entre os itens */
}

/* Estilo para os links */
ul li a {
  text-decoration: none; /* Remove o sublinhado */
  color: #fff; /* Cor do texto branca */
  font-size: 16px; /* Tamanho da fonte */
  font-weight: 500; /* Peso da fonte */
  padding: 10px 20px; /* Espaçamento interno */
  display: block; /* Para tornar o link um bloco e facilitar o clique */
  transition: all 0.3s ease; /* Transição suave para efeitos */
}

/* Efeito de hover */
ul li a:hover {
  background-color: #444; /* Fundo ao passar o mouse */
  color: black; /* Cor do texto ao passar o mouse */
  border-radius: 5px; /* Bordas arredondadas */
}
`;

export default MenuCustom;