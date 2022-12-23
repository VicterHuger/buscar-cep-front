import styled from "styled-components";

export const Container = styled.main`
  margin-top: 10rem;
  width:100%;
  min-height:100vh;

  h2{
    font-size: 2rem;
    color: #004186;
    font-weight: 500;
    margin-bottom: 1rem;
    width: fit-content;
    
  }

  @media(max-width: 670px){
    display:flex;
    flex-direction: column;
    align-items:center;
  }
`;