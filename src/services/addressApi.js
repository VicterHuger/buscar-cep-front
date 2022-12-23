import api from './api.js';

async function getAddressByCep(cep) {
  const response = await api.post('/addresses', { cep });
  return response.data
};

export const addressApi = {
  getAddressByCep
}