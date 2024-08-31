import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { createPropietario, getPropietario, updatePropietario } from '../api/apiPropietarios';

const PropietarioForm = () => {
    const [propietario, setPropietario] = useState({ nombres: '', apellidos: '', telefono: '', cedula: '', contrasena: '' });
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = Boolean(id);

    useEffect(() => {
        if (isEdit) {
            getPropietario(id).then(response => setPropietario(response.data));
        }
    }, [id, isEdit]);

    const handleChange = (e) => {
        setPropietario({ ...propietario, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEdit) {
            await updatePropietario(id, propietario);
        } else {
            await createPropietario(propietario);
        }
        navigate('/propietarios');
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                {isEdit ? 'Editar Propietario' : 'Agregar Propietario'}
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    label="Nombres"
                    name="nombres"
                    value={propietario.nombres}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Apellidos"
                    name="apellidos"
                    value={propietario.apellidos}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Teléfono"
                    name="telefono"
                    value={propietario.telefono}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Cédula"
                    name="cedula"
                    value={propietario.cedula}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Contraseña"
                    name="contrasena"
                    type="password"
                    value={propietario.contrasena}
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

export default PropietarioForm;
