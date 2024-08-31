import axios from 'axios';

const API_URL = 'http://localhost:5000/api/administradores';

export const getAdministradores = () => axios.get(API_URL);
export const getAdministrador = (id) => axios.get(`${API_URL}/${id}`);
export const createAdministrador = (data) => axios.post(API_URL, data);
export const updateAdministrador = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteAdministrador = (id) => axios.delete(`${API_URL}/${id}`);
