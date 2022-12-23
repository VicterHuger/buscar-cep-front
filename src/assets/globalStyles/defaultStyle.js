export const Default = `
*{
    box-sizing: border-box;
}
a{
    font-style: none;
}
body{
  display:flex;
  flex-direction: column;
  width:100%;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  padding: 0 10rem;
  @media (max-width: 670px) {
    padding:0 !important;
  }
}
`;