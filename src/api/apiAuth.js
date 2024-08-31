import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Cambia la URL según tu configuración

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data.token; // Asumiendo que el servidor devuelve un token
    } catch (error) {
        console.error('Error during login:', error);
        return null;
    }
};
