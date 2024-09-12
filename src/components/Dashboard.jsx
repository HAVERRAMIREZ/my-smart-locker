import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import { Dashboard as DashboardIcon, People as PeopleIcon, AccountBox as AccountBoxIcon, LocalShipping as LocalShippingIcon } from '@mui/icons-material';

const Dashboard = () => {
    return (
        <Container maxWidth="lg" sx={{ marginTop: '50px' }}>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{ padding: '20px', textAlign: 'center', backgroundColor: 'primary.main', color: 'secondary.main' }}>
                        <AccountBoxIcon sx={{ fontSize: '40px', color: 'secondary.main' }} />
                        <Typography variant="h6" gutterBottom>
                            Administradores
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                        </Typography>
                        <Button variant="contained" color="secondary" component={Link} to="/administradores">
                            Ir a Administradores
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{ padding: '20px', textAlign: 'center', backgroundColor: 'primary.main', color: 'secondary.main' }}>
                        <LocalShippingIcon sx={{ fontSize: '40px', color: 'secondary.main' }} />
                        <Typography variant="h6" gutterBottom>
                            Tipos de Paquete
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                        </Typography>
                        <Button variant="contained" color="secondary" component={Link} to="/tipo_paquetes">
                            Ir a Tipos de Paquete
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{ padding: '20px', textAlign: 'center', backgroundColor: 'primary.main', color: 'secondary.main' }}>
                        <PeopleIcon sx={{ fontSize: '40px', color: 'secondary.main' }} />
                        <Typography variant="h6" gutterBottom>
                            Residentes
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                        </Typography>
                        <Button variant="contained" color="secondary" component={Link} to="/residentes">
                            Ir a Residentes
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{ padding: '20px', textAlign: 'center', backgroundColor: 'primary.main', color: 'secondary.main' }}>
                        <PeopleIcon sx={{ fontSize: '40px', color: 'secondary.main' }} />
                        <Typography variant="h6" gutterBottom>
                            Propietarios
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                        </Typography>
                        <Button variant="contained" color="secondary" component={Link} to="/propietarios">
                            Ir a Propietarios
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
