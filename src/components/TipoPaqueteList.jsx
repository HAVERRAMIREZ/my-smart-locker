import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTipoPaquetes, deleteTipoPaquete } from '../api/apiTipoPaquetes';
import GenericTable from './GenericTable';
import { Button, Box, TextField } from '@mui/material';

const TipoPaqueteList = () => {
    const [packages, setPackages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchPackages();
    }, []);

    const fetchPackages = async () => {
        const response = await getTipoPaquetes();
        setPackages(response);
    };

    const handleDelete = async (id) => {
        await deleteTipoPaquete(id);
        fetchPackages();
    };

    const handleEdit = (id) => {
        navigate(`/tipo_paquetes/edit/${id}`);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'tipo', headerName: 'Tipo', width: 150 },
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

    const filteredPackages = packages.filter((pkg) => 
        Object.values(pkg).some((value) =>
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
            <GenericTable rows={filteredPackages} columns={columns} title="Tipos de Paquete" addLink="/tipo_paquetes/add" />
        </div>
    );
};

export default TipoPaqueteList;
