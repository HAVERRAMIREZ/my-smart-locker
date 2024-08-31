import axios from 'axios';

const API_URL = 'http://localhost:5000/api/residentes';

export const getResidentes = () => axios.get(API_URL);
export const getResidente = (id) => axios.get(`${API_URL}/${id}`);
export const createResidente = (data) => axios.post(API_URL, data);
export const updateResidente = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteResidente = (id) => axios.delete(`${API_URL}/${id}`);
