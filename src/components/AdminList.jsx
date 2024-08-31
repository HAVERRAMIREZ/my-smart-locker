import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAdministradores, deleteAdministrador } from '../api/apiAdministradores';
import GenericTable from './GenericTable';
import { Button, Box, TextField } from '@mui/material';

const AdminList = () => {
    const [admins, setAdmins] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        const response = await getAdministradores();
        setAdmins(response.data);
    };

    const handleDelete = async (id) => {
        await deleteAdministrador(id);
        fetchAdmins();
    };

    const handleEdit = (id) => {
        navigate(`/administradores/edit/${id}`);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'nombre', headerName: 'Nombre', width: 150 },
        { field: 'apellidos', headerName: 'Apellidos', width: 150 },
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

    const filteredAdmins = admins.filter((admin) => 
        Object.values(admin).some((value) =>
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
            <GenericTable rows={filteredAdmins} columns={columns} title="Administradores" addLink="/administradores/add" />
        </div>
    );
};

export default AdminList;
