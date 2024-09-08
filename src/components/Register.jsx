import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Auth.css';

const Register = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        cedula: '',
        contrasena: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/register', formData);
            alert('Registro exitoso');
        } catch (error) {
            alert('Error en el registro');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Registro de Administrador</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input name="nombre" value={formData.nombre} onChange={handleChange} required />
                        <label>Nombre</label>
                    </div>
                    <div className="user-box">
                        <input name="apellidos" value={formData.apellidos} onChange={handleChange} required />
                        <label>Apellidos</label>
                    </div>
                    <div className="user-box">
                        <input name="cedula" value={formData.cedula} onChange={handleChange} required />
                        <label>Cédula</label>
                    </div>
                    <div className="user-box">
                        <input name="contrasena" type="password" value={formData.contrasena} onChange={handleChange} required />
                        <label>Contraseña</label>
                    </div>
                    <a href="#" onClick={handleSubmit}>
                        Registrar
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </form>
                <p className="footer-text">
                 <Link to="/login" style={{ color: '#03e9f4' }}>Inicia sesión</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
