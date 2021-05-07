import http from '../config/http';

const getServiceAllTarefas = () => http.get('/tarefa');
const getServiceDetalhe = (id) => http.get(`/tarefa/${id}`);
const createServiceTarefa = (data) => http.post(`/tarefa`, data);
const deleteServiceTarefa = (id) => http.delete(`/tarefa/${id}`);

export {
    getServiceAllTarefas,
    getServiceDetalhe,
    createServiceTarefa,
    deleteServiceTarefa
}