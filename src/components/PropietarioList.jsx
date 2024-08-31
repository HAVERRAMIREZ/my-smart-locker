import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPropietarios, deletePropietario } from '../api/apiPropietarios';
import GenericTable from './GenericTable';
import { Button, Box, TextField } from '@mui/material';

const PropietarioList = () => {
    const [propietarios, setPropietarios] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchPropietarios();
    }, []);

    const fetchPropietarios = async () => {
        const response = await getPropietarios();
        setPropietarios(response.data);
    };

    const handleDelete = async (id) => {
        await deletePropietario(id);
        fetchPropietarios();
    };

    const handleEdit = (id) => {
        navigate(`/propietarios/edit/${id}`);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'nombres', headerName: 'Nombres', width: 150 },
        { field: 'apellidos', headerName: 'Apellidos', width: 150 },
        { field: 'telefono', headerName: 'Teléfono', width: 150 },
        { field: 'cedula', headerName: 'Cédula', width: 150 },
        { field: 'contrasena', headerName: 'Contraseña', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <Box display="flex" justifyContent="space-between" width="100%">
                    <Button variant="contained" color="primary" onClick={() => handleEdit(params.id)}>
                        Editar
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(params.id)}>
                        Eliminar
                    </Button>
                </Box>
            )
        }
    ];

    const filteredPropietarios = propietarios.filter((propietario) => 
        Object.values(propietario).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div>
            <TextField
                label="Buscar"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <GenericTable rows={filteredPropietarios} columns={columns} title="Propietarios" addLink="/propietarios/add" />
        </div>
    );
};

export default PropietarioList;
