import useAsync from "../useAsync.js";

import { addressApi } from '../../services/addressApi.js';

export default function useAddress() {
  const {
    loading: addressLoading,
    error: addressError,
    data: address,
    act: getAddressByCep
  } = useAsync(addressApi.getAddressByCep, false);

  return {
    addressLoading,
    addressError,
    address,
    getAddressByCep
  };
};