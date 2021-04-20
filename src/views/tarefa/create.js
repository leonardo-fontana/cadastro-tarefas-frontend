import React, { useState } from 'react';
import { createServiceTarefa } from '../../services/tarefa.service.js';
import ReactSwal from "../../plugins/swal";
import { Button,Form,FormGroup,Label,Input } from 'reactstrap';

const CadastroTarefa = (props, id, update, isForm) => {

    const [form, setForm] = useState({})

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = () => {

        const nform = {
            ...form,
            titulo: form.titulo_tarefa.toUpperCase(),
            descricao: form.descricao_tarefa,
            data_inicio: form.data_inicio,
            data_fim: form.data_fim,
            usuario_id: form.usuario_id
        }

        createServiceTarefa(nform)
            .then(() => {
                ReactSwal.fire({
                    icon: 'success',
                    title: `Cadastro da tarefa ${form.titulo_tarefa} realizada com sucesso !`,
                    showConfirmButton: false,
                    showCloseButton: true,
                    timer: 2000
                })
                setForm({});
                update(true)
                isForm(false)
                window.location.href = "googoe.com";
            })
            .catch(erro => console.log('deu ruim...'))
            
    }
  
    return (
        <div>          
            <Form>
                <FormGroup>
                    <Label for="titulo">Título</Label>
                    <Input type="text" name="titulo_tarefa" id="titulo_tarefa" placeholder="Titulo da tarefa" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="descricao_tarefa">Descrição</Label>
                    <Input type="textarea" name="descricao_tarefa" id="descricao_tarefa" onChange={handleChange} />
                </FormGroup>
                 <FormGroup>
                    <Label for="data_inicio">Data de início</Label>
                    <Input type="date" name="data_inicio" id="data_inicio" onChange={handleChange}/>
                 </FormGroup>
                <FormGroup>
                    <Label for="data_fim">Data de término</Label>
                    <Input type="date" name="data_fim" id="data_fim" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="usuario_id">Id usuario</Label>
                    <Input type="number" name="usuario_id" id="usuario_id" onChange={handleChange}/>
                </FormGroup>
                <Button onClick={submitForm}>Cadastrar</Button>
            </Form>
            
        </div>
    )
    
}

export default CadastroTarefa;

