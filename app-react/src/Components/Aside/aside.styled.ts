import styled from "styled-components";
import Aside from ".";

const AsideCustom = styled(Aside)`
    min-width: 248px;
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
        min-width: 125px;
        min-height: 117px;
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

          width: 90%;
          height: auto;
        }
      }
      &.info{
        min-width: 200px;
        min-height: 121px;
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
            padding: 5px;
          }

          a:hover{
            background-color: rgba(32,32,32);
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

`;

export default AsideCustom;