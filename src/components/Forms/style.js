import styled from "styled-components";

export const Container = styled.form`

  display:flex;
  flex-direction: column;
  width: 20rem;

  &>input{
    width: 20rem;
    height: 2.8rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    border-radius: 5px;
    border: 2px solid #d5d5d5;
    &:focus, &:active, &:hover{
      border: 0.3rem solid rgb(0,65,134);
    }
    &::placeholder{
      text-align:center;
    }
  }

  button{
  margin-top: 1rem;
  width: 10rem;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit; 
  cursor: pointer;
  transition: border-color 0.25s;
  color: rgb(0,65,134);
  display:flex;
  justify-content:center;
  align-items:center;
  height:3rem;
  align-self:center;
  
}
button:hover {
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (max-width: 670px) {
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding: 0 3rem;
  input{
    width:100%;
    min-width:250px;
  }
  button{
    width: 80%;
    min-width:200px;
  }
}
`;