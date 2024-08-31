import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { createResidente, getResidente, updateResidente } from '../api/apiResidentes';

const ResidenteForm = () => {
    const [residente, setResidente] = useState({ nombres: '', apellidos: '', telefono: '', cedula: '', contrasena: '' });
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = Boolean(id);

    useEffect(() => {
        if (isEdit) {
            getResidente(id).then(response => setResidente(response.data));
        }
    }, [id, isEdit]);

    const handleChange = (e) => {
        setResidente({ ...residente, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEdit) {
            await updateResidente(id, residente);
        } else {
            await createResidente(residente);
        }
        navigate('/residentes');
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                {isEdit ? 'Editar Residente' : 'Agregar Residente'}
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    label="Nombres"
                    name="nombres"
                    value={residente.nombres}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Apellidos"
                    name="apellidos"
                    value={residente.apellidos}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Teléfono"
                    name="telefono"
                    value={residente.telefono}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Cédula"
                    name="cedula"
                    value={residente.cedula}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Contraseña"
                    name="contrasena"
                    type="password"
                    value={residente.contrasena}
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

export default ResidenteForm;
