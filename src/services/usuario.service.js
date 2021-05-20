import http from '../config/http';

const getServiceAllUsuarios = () => http.get('/usuario');
const getServiceUsuarioById = () => http.get(`/usuario/perfil`);
const createServiceUsuario = (data) => http.post(`/usuario`, data);
const deleteServiceUsuario = (id) => http.delete(`/usuario/${id}`);

export {
    getServiceAllUsuarios,
    getServiceUsuarioById,
    createServiceUsuario,
    deleteServiceUsuario
}