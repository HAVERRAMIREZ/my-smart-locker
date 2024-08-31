import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTipoPaquete, createTipoPaquete, updateTipoPaquete } from '../api/apiTipoPaquetes';
import { TextField, Button, Box, Typography } from '@mui/material';

const TipoPaqueteForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tipoPaquete, setTipoPaquete] = useState({ tipo: '' });

    useEffect(() => {
        if (id) {
            fetchTipoPaquete(id);
        }
    }, [id]);

    const fetchTipoPaquete = async (id) => {
        const data = await getTipoPaquete(id);
        setTipoPaquete(data);
    };

    const handleChange = (e) => {
        setTipoPaquete({ ...tipoPaquete, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateTipoPaquete(id, tipoPaquete);
        } else {
            await createTipoPaquete(tipoPaquete);
        }
        navigate('/tipo_paquetes');
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h4" gutterBottom>
                {id ? 'Editar Tipo de Paquete' : 'Agregar Tipo de Paquete'}
            </Typography>
            <TextField
                label="Tipo"
                name="tipo"
                value={tipoPaquete.tipo}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <Button type="submit" variant="contained" color="primary">
                {id ? 'Actualizar' : 'Agregar'}
            </Button>
        </Box>
    );
};

export default TipoPaqueteForm;
