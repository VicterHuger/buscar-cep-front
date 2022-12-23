import Form from "../../components/Forms/Forms.jsx";

import { Container } from "./style.js";
import { Header } from "../../components/Header/Header.jsx";


export function Home() {
  return (
    <>
      <Header />
      <Container>
        <h2> Buscar CEP </h2>
        <Form />
      </Container>

    </>

  );
}

