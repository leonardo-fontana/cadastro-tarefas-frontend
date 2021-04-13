import React, { useState, useEffect, useCallback } from 'react';
import { getServiceAllTarefas } from '../services/tarefa.service.js';
import CardItem from "../components/tarefas/card_item";
import Loading from '../components/loading'
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';

const Tarefas = () => {

    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(false)
    // const [hasError, setError] = useState(false)

    const getCursos = useCallback(() => {
        setLoading(true)
        getServiceAllTarefas()
            .then(res => {
                setCursos(res.data)
                setLoading(false)
            })
            .catch(err => {
                // setError(true)
                console.log('vamos color um alerta de erro', err)
                setLoading(false)
            })
    }, [])


    useEffect(() => {
        getCursos();
    }, [getCursos])


    const MapearCursos = (cursos) => cursos.map((item, i) => (
        <Col md="3" xl="3" sm="12" xs="12" key={i} className="mb-4">
            <CardItem item={{ ...item, status: true }} />
        </Col>
    ))

    return (
        <BoxTarefas>
            {loading ? <Loading /> : MapearCursos(cursos)}
        </BoxTarefas>
    )
}

export default Tarefas;


const BoxTarefas = styled(Row)`

`