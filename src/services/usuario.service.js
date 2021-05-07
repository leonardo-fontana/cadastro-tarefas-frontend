import http from '../config/http';

const getServiceAllUsuarios = () => http.get('/usuario');
const getServiceUsuarioById = (id) => http.get(`/usuario/${id}`);
const createServiceUsuario = (data) => http.post(`/usuario`, data);
const deleteServiceUsuario = (id) => http.delete(`/usuario/${id}`);

export {
    getServiceAllUsuarios,
    getServiceUsuarioById,
    createServiceUsuario,
    deleteServiceUsuario
}