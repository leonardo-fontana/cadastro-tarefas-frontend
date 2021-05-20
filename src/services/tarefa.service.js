import http from '../config/http';

const getServiceAllTarefas = () => http.get('/tarefa');
const getServiceAllTarefasFromUsuario = () => http.get(`/tarefa/usuario`);
const getServiceGetTarefa = (id) => http.get(`/tarefa/${id}`);
const createServiceTarefa = (data) => http.post(`/tarefa`, data);
const updateServiceTarefa = (id) => http.put(`/tarefa/${id}`);
const deleteServiceTarefa = (id) => http.delete(`/tarefa/${id}`);

export {
    getServiceAllTarefas,
    getServiceAllTarefasFromUsuario,
    getServiceGetTarefa,
    createServiceTarefa,
    deleteServiceTarefa,
    updateServiceTarefa
}