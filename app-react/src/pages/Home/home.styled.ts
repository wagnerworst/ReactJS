import Home from ".";
import styled from "styled-components";

const HomeCustom = styled(Home)`
  padding-top: 5vh;

  section{
    grid-area: section;
    display: flex;
    justify-content: center;

    .card{
      min-width: 232px;
      display: flex;
      flex-direction: column;
      background-color: rgba(42,42,42);
      height: 15%;
      width: 50%;
      padding: 3%;
      border-radius: 15px;
      gap: 3vh;
      font-size: 35px;
      justify-content: center;

      .tecnologias {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        img{
          height: 5.2vh;
          width: 3vw;
          display: block;
        }

        img:hover{
          transform: rotate(360deg);
          transition-duration: 2s;
        }
      }
    }

  }
`;

export default HomeCustom;