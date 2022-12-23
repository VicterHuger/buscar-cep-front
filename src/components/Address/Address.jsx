
import { Container, InnerContainer } from "./style.js";

export function Address({ address }) {

  function renderAddress() {
    const keys = Object.keys(address);
    const values = Object.values(address);

    const arrayValues = [];
    const arrayKeys = [];

    for (let i = 0; i < values.length; i++) {
      if (values[i]) {
        arrayKeys.push(keys[i][0].toUpperCase() + keys[i].substring(1));
        arrayValues.push(values[i]);
      }
    }

    return arrayValues.map((value, index) => {
      return (
        <InnerContainer key={index}>
          <div >
            <h3>
              {arrayKeys[index]}
            </h3>
          </div>
          <div>
            <h3>
              {value}
            </h3>
          </div>
        </InnerContainer>
      );
    });

  }

  const renderAddressFunction = renderAddress();

  return (
    <Container>
      <h2>Endereço</h2>
      {renderAddressFunction}
    </Container>
  )
}