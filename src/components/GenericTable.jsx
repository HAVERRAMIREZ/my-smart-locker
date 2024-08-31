import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Button, Grid } from '@mui/material';

const GenericTable = ({ rows, columns, title, addLink }) => {
    return (
        <Box sx={{ height: 400, width: '100%', marginTop: 4 }}>
            <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
                <Typography variant="h6">{title}</Typography>
                <Button variant="contained" color="primary" href={addLink}>
                    Agregar {title}
                </Button>
            </Grid>
            <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
        </Box>
    );
};

export default GenericTable;
