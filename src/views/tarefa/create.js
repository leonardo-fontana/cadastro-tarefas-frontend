import React, { useState } from 'react';
import ReactSwal from "../../plugins/swal";
import { Button,Form,FormGroup,Label,Input } from 'reactstrap';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { createTarefa } from '../../store/tarefa/tarefa.action'

const CadastroTarefa = (props, id, update, isForm) => {

    const dispatch = useDispatch()
    const [form, setForm] = useState({})
    const history = useHistory();

    const tarefas = useSelector(state => state.tarefa.all)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = () => {

        const nform = {
            ...form,
            titulo: form.titulo.toUpperCase(),
            
        }

        dispatch(createTarefa(nform))
            .then(() => {
                ReactSwal.fire({
                    icon: 'success',
                    title: `Tarefa ${form.titulo_tarefa} cadastrado com sucesso !`,
                    showConfirmButton: false,
                    timer: 2000
                })
                 
                setTimeout(() => {
                    history.push('/tarefa')
                }, 2000)   
                
                setForm({});
                update(true)
                isForm(false)
                
            })
            .catch(erro => console.log('deu ruim...'))          
    }
  
    return (
        <div>          
            <Form>
                <FormGroup>
                    <Label for="titulo">Título</Label>
                    <Input type="text" name="titulo" id="titulo" placeholder="Titulo da tarefa" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="descricao">Descrição</Label>
                    <Input type="textarea" name="descricao" id="descricao" onChange={handleChange} />
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
            </Form>
            <Button onClick={submitForm}>Cadastrar</Button>       
        </div>
    ) 
}

export default CadastroTarefa;

