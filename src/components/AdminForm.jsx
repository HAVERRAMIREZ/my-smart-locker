import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { createAdministrador, getAdministrador, updateAdministrador } from '../api/apiAdministradores';

const AdminForm = () => {
    const [admin, setAdmin] = useState({ nombre: '', apellidos: '', cedula: '', contrasena: '' });
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = Boolean(id);

    useEffect(() => {
        if (isEdit) {
            getAdministrador(id).then(response => setAdmin(response.data));
        }
    }, [id, isEdit]);

    const handleChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEdit) {
            await updateAdministrador(id, admin);
        } else {
            await createAdministrador(admin);
        }
        navigate('/administradores');
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                {isEdit ? 'Editar Administrador' : 'Agregar Administrador'}
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    label="Nombre"
                    name="nombre"
                    value={admin.nombre}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Apellidos"
                    name="apellidos"
                    value={admin.apellidos}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Cédula"
                    name="cedula"
                    value={admin.cedula}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Contraseña"
                    name="contrasena"
                    type="password"
                    value={admin.contrasena}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    {isEdit ? 'Guardar Cambios' : 'Agregar'}
                </Button>
            </Box>
        </Container>
    );
};

export default AdminForm;
