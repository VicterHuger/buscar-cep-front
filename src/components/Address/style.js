import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  h2{
    font-size: 2rem;
    margin-top: 2rem;
  }
  &>div:not(&>div:last-child){
    border-bottom: 1px solid white;
  }
  @media(max-width: 670px){
    gap: 1rem;
    padding: 0 2rem;
  }
  
`;

export const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  div{
    min-width: 100px;
    width:50%;
    background-color:rgb(0, 65, 134);
    padding: 1rem 2rem;
    h3{
    font-size: 1rem;
    color: white;
   }
  }
  &>div:first-child{
    border-right: 1px solid white;
  }
  @media (max-width: 670px){
    flex-direction: column;
    align-items:center;
    div{
      width:100%;
    }

    &>div:last-child{
      background-color: #d5d5d5;
     
    }
  }
`;