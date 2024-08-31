import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getResidentes, deleteResidente } from '../api/apiResidentes';
import GenericTable from './GenericTable';
import { Button, Box, TextField } from '@mui/material';

const ResidenteList = () => {
    const [residentes, setResidentes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchResidentes();
    }, []);

    const fetchResidentes = async () => {
        const response = await getResidentes();
        setResidentes(response.data);  // Asegúrate de que 'response.data' contenga los datos correctos
    };

    const handleDelete = async (id) => {
        await deleteResidente(id);
        fetchResidentes();
    };

    const handleEdit = (id) => {
        navigate(`/residentes/edit/${id}`);
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

    const filteredResidentes = residentes.filter((residente) => 
        Object.values(residente).some((value) =>
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
            <GenericTable rows={filteredResidentes} columns={columns} title="Residentes" addLink="/residentes/add" />
        </div>
    );
};

export default ResidenteList;
