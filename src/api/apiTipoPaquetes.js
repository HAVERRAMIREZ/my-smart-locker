import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Asegúrate de que esta URL coincida con la configuración de tu servidor

export const getTipoPaquetes = async () => {
    try {
        const response = await axios.get(`${API_URL}/tipo_paquetes`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tipo paquetes:', error);
        throw error;
    }
};

export const getTipoPaquete = async (id) => { // Agregar esta función si no existe
    try {
        const response = await axios.get(`${API_URL}/tipo_paquetes/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tipo paquete:', error);
        throw error;
    }
};

export const createTipoPaquete = async (tipoPaquete) => {
    try {
        const response = await axios.post(`${API_URL}/tipo_paquetes`, tipoPaquete);
        return response.data;
    } catch (error) {
        console.error('Error creating tipo paquete:', error);
        throw error;
    }
};

export const updateTipoPaquete = async (id, tipoPaquete) => { // Agregar esta función si no existe
    try {
        const response = await axios.put(`${API_URL}/tipo_paquetes/${id}`, tipoPaquete);
        return response.data;
    } catch (error) {
        console.error('Error updating tipo paquete:', error);
        throw error;
    }
};

export const deleteTipoPaquete = async (id) => {
    try {
        await axios.delete(`${API_URL}/tipo_paquetes/${id}`);
    } catch (error) {
        console.error('Error deleting tipo paquete:', error);
        throw error;
    }
};
