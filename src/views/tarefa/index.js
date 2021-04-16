import React, { useState, useEffect, useCallback } from 'react';
import { getServiceAllTarefas } from '../../services/tarefa.service.js';
import CardItem from "../../components/tarefas/card_item";
import Loading from '../../components/loading'
import styled from 'styled-components';
import { Col, Row, Navbar } from 'reactstrap';
import FormCadastro from "../../components/tarefas/cadastro_form"

const Tarefas = () => {

    const [tarefas, setTarefas] = useState([]);
    const [loading, setLoading] = useState(false)
    const [hasError, setError] = useState(false)
    //const [form, setForm] = useState({})

    //const [detalhe, setDetalhe] = useState({});
   // const [update, setUpdate] = useState(false)
    const [toggleBotton, setToggle] = useState(false)
    
    const getTarefas = useCallback(() => {
        setLoading(true)
        getServiceAllTarefas()
            .then(res => {
                setTarefas(res.data)
                setLoading(false)
            })
            .catch(err => {
                setError(true)
                console.log('Algo deu errado', err)
                setLoading(false)
            })
    }, [])

    /*const submitForm = () => {
        const nform = {
            ...form,
            titulo_tarefa: form.titulo_tarefa.toUpperCase(),
            descricao_tarefa: form.descricao_tarefa,
            data_inicio: form.data_inicio.toLowerCase(),
            data_fim: form.data_fim.toLowerCase()
        }

        createServiceTarefa(id, nform)
            .then(() => {
                ReactSwal.fire({
                    icon: 'success',
                    title: `Cadastro do Aluno ${form.name} feito com sucesso !`,
                    showConfirmButton: false,
                    showCloseButton: true,
                })
                setForm({});
                update(true)
                isForm(false)
            })
            .catch(erro => console.log('deu ruim...'))
    }*/


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
            {
                toggleBotton
                    ? (<FormCadastro />)                                        
                    
                    : (<div />)
            }
        </div>
    )
}

export default Tarefas;

const BoxTarefas = styled(Row)`

`