import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import AdminList from './components/AdminList';
import TipoPaqueteList from './components/TipoPaqueteList';
import ResidenteList from './components/ResidenteList';
import PropietarioList from './components/PropietarioList';
import AdminForm from './components/AdminForm';
import TipoPaqueteForm from './components/TipoPaqueteForm';
import ResidenteForm from './components/ResidenteForm';
import PropietarioForm from './components/PropietarioForm';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import theme from './theme';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    const PrivateRoute = ({ children }) => {
        return token ? (
            <>
                <NavBar />
                {children}
            </>
        ) : (
            <Navigate to="/login" />
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login setToken={setToken} />} />
                    <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path="/administradores" element={<PrivateRoute><AdminList /></PrivateRoute>} />
                    <Route path="/administradores/add" element={<PrivateRoute><AdminForm /></PrivateRoute>} />
                    <Route path="/administradores/edit/:id" element={<PrivateRoute><AdminForm /></PrivateRoute>} />
                    <Route path="/tipo_paquetes" element={<PrivateRoute><TipoPaqueteList /></PrivateRoute>} />
                    <Route path="/tipo_paquetes/add" element={<PrivateRoute><TipoPaqueteForm /></PrivateRoute>} />
                    <Route path="/tipo_paquetes/edit/:id" element={<PrivateRoute><TipoPaqueteForm /></PrivateRoute>} />
                    <Route path="/residentes" element={<PrivateRoute><ResidenteList /></PrivateRoute>} />
                    <Route path="/residentes/add" element={<PrivateRoute><ResidenteForm /></PrivateRoute>} />
                    <Route path="/residentes/edit/:id" element={<PrivateRoute><ResidenteForm /></PrivateRoute>} />
                    <Route path="/propietarios" element={<PrivateRoute><PropietarioList /></PrivateRoute>} />
                    <Route path="/propietarios/add" element={<PrivateRoute><PropietarioForm /></PrivateRoute>} />
                    <Route path="/propietarios/edit/:id" element={<PrivateRoute><PropietarioForm /></PrivateRoute>} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
