import React, { useEffect } from 'react';
import CardItem from "../../components/tarefas/card_item";
import Loading from '../../components/loading'
import styled from 'styled-components';
import { Col, Row, Navbar } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTarefasFromUsuario } from '../../store/tarefa/tarefa.action'

const Tarefas = () => {

    const dispatch = useDispatch()
    const tarefas = useSelector(state => state.tarefa.all)
    const loading = useSelector(state => state.tarefa.loading)

    useEffect(() => {
        dispatch(getAllTarefasFromUsuario());
    }, [dispatch])

    const Menu = () => (
        <Navbar expand="md mb-4">
            <div className="info d-none d-md-block d-lg-block">
            </div>
       
            <p></p>
            <a href="/tarefa/cadastrar" class="btn btn-primary">Cadastrar nova tarefa</a>
        </Navbar>
    )

    const MapearTarefas = (tarefas) => tarefas.map((item, i) => (
        <Col md="3" xl="3" sm="12" xs="12" key={i} className="mb-4">
            <CardItem item={{ ...item, status: true }} />
        </Col>
    ))

    return (
        <div>   
             <h2>Lista de tarefas pessoais</h2> 
            {Menu()}       
            <BoxTarefas>        
                
                {loading ? <Loading /> : MapearTarefas(tarefas)}
            </BoxTarefas>
        </div>
    )
}

export default Tarefas;

const BoxTarefas = styled(Row)`

`