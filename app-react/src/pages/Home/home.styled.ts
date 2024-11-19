import Home from ".";
import styled from "styled-components";

const HomeCustom = styled(Home)`
  display: grid;
  grid-template-areas:
		"aside section"
	;
  grid-template-columns: 30vw 69vw;
  grid-template-rows: 85vh;
  margin-top: 5vh;

  aside{
    grid-area: aside;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1%;
    border-right: dashed 5px;
    border-color: rgba(42,42,42);

    & > *{
      border-radius: 15px;
      background-color: rgba(42,42,42);
    
      &.logo{
        display: flex;
        justify-content: center;
        padding: 3%;
        position: relative;
        z-index: 1;
        width: 12vw;
        height: 20.93vh;
        
        img{
          border-radius: 15%;
          border-style: solid;

          width: auto;
          height: auto;
        }
      }
      &.info{
        display: flex;
        flex-direction: column;
        justify-content: end;
        padding: 3%;
        gap: 5%;
        position: relative;
        z-index: 0;
        width: 20vw;
        height: 14vh;
        margin-top: -3vh;

        .links{
          display: flex;
          justify-content: center;
          gap: 5%;

          a > * {
            height: 48px;
          }
        }

        .contato{
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
      }
    }  
  }

  section{
    grid-area: section;
    display: flex;
    justify-content: center;

    .card{
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
        }
      }
    }

  }
`;

export default HomeCustom;