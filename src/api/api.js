import axios from 'axios';

const API_URL = 'http://localhost:5000/api/administradores';

export const getAdministradores = () => {
    return axios.get(API_URL);
};

export const getAdministrador = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const createAdministrador = (data) => {
    return axios.post(API_URL, data);
};

export const updateAdministrador = (id, data) => {
    return axios.put(`${API_URL}/${id}`, data);
};

export const deleteAdministrador = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
