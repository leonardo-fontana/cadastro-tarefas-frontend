import React, { useState, useEffect, useCallback } from 'react';
import { getServiceAllTarefas } from '../../services/tarefa.service.js';
import CardItem from "../../components/tarefas/card_item";
import Loading from '../../components/loading'
import styled from 'styled-components';
import { Col, Row, Navbar } from 'reactstrap';

const Tarefas = () => {

    const [tarefas, setTarefas] = useState([]);
    const [loading, setLoading] = useState(false)
    //const [hasError, setError] = useState(false)
    
    const getTarefas = useCallback(() => {
        setLoading(true)
        getServiceAllTarefas()
            .then(res => {
                setTarefas(res.data)
                setLoading(false)
            })
            .catch(err => {
                //hasError(true)
                //setError(true)
                console.log('Algo deu errado', err)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        getTarefas();
    }, [getTarefas])

    const Menu = () => (
        <Navbar expand="md mb-4">
            <div className="info d-none d-md-block d-lg-block">
            </div>
            <a href="/tarefa/1" class="btn btn-primary">Cadastrar nova tarefa</a>
        </Navbar>
    )

    const MapearTarefas = (tarefas) => tarefas.map((item, i) => (
        <Col md="3" xl="3" sm="12" xs="12" key={i} className="mb-4">
            <CardItem item={{ ...item, status: true }} />
        </Col>
    ))

    return (
        <div>    
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