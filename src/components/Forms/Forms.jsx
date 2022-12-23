import { useState } from 'react';
import InputMask from 'react-input-mask';
import { ToastContainer, toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';

import { Container } from './style';
import useAddress from '../../hooks/api/useAddress';
import { Address } from '../Address/Address';

export default function Form() {
  const [cep, setCep] = useState("");
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [address, setAddress] = useState(null);
  const { addressLoading, getAddressByCep } = useAddress();

  function cleanInputs() {
    setIsDisabledButton(false);
    setCep('');
  }

  function formatCepToApi(cep) {
    return cep.replace('-', '');
  }

  const buttonContent = () => {
    if (addressLoading) {
      return (<ThreeDots heigth={13} width={51} radius={50} color="rgb(0, 65, 134)" />);
    } else {
      return "ENVIAR";
    }
  };

  async function submit(event) {
    event.preventDefault();
    const formatedCep = formatCepToApi(cep);
    try {
      const responseAddress = await getAddressByCep(formatedCep);
      setAddress(responseAddress);
      cleanInputs();
    } catch (err) {
      cleanInputs();
      console.log(err);
      toast.error(err?.response?.data ?? err.message);
    }
  }

  function handlerForm(event) {
    setCep(event.target.value)
    if (event.target.value.length >= 9) {
      setIsDisabledButton(false);
    }
    if (event.target.value.length < 9 && !isDisabledButton) {
      setIsDisabledButton(true);
    }
  }

  return (
    <>
      <Container onSubmit={submit}>
        <InputMask mask="99999-999" maskChar={null} value={cep} onChange={handlerForm} placeholder='CEP' disabled={addressLoading} />
        <button type='submit' disabled={isDisabledButton || addressLoading} >{buttonContent()}</button>
      </Container>
      {address ?
        <Address address={address} />
        : null}
      <ToastContainer />
    </>
  )
}