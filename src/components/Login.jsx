import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Box, Typography, Container } from '@mui/material';
import { login } from '../api/apiAuth';
import '../Auth.css'; // Asegúrate de importar el archivo CSS correcto

const Login = ({ setToken }) => {
    const [credentials, setCredentials] = useState({ cedula: '', contrasena: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await login(credentials);
        if (token) {
            setToken(token);
            localStorage.setItem('token', token);
            navigate('/dashboard');
        } else {
            alert('Error en el inicio de sesión');
        }
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h2" align="center" gutterBottom style={{ marginTop: '20px', fontWeight: 'bold', color: '#03e9f4' }}>
                Smart Locker
            </Typography>
            <div className="login-box">
                <Typography variant="h4" gutterBottom align="center" style={{ color: '#fff' }}>
                    Iniciar Sesión
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <div className="user-box">
                        <TextField
                            label="Cédula"
                            name="cedula"
                            value={credentials.cedula}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                            InputLabelProps={{ className: 'user-box-label' }}
                            InputProps={{ className: 'user-box-input' }}
                        />
                    </div>
                    <div className="user-box">
                        <TextField
                            label="Contraseña"
                            name="contrasena"
                            type="password"
                            value={credentials.contrasena}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                            InputLabelProps={{ className: 'user-box-label' }}
                            InputProps={{ className: 'user-box-input' }}
                        />
                    </div>
                    <a href="#" onClick={handleSubmit}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Iniciar Sesión
                    </a>
                </Box>
                <Typography className="footer-text" variant="body2" align="center" style={{ color: '#fff', marginTop: '20px' }}>
                    ¿No tienes una cuenta de administrador? <a href="/register" style={{ color: '#03e9f4' }}>Regístrate</a>
                </Typography>
            </div>
        </Container>
    );
};

export default Login;
