import { useState } from "react"
import { createServiceTarefa } from "../../services/tarefa.service"
import { Button, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import styled from "styled-components";
import ReactSwal from "../../plugins/swal";

const Inscricao = ({ id, update, isForm }) => {
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
            name: form.name.toUpperCase(),
            email: form.email.toLowerCase()
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
    }

    return (
        <BoxInscricao>
            <Col xs="12" sm="12" md="8" lg="8">
                <FormGroup>
                    <Label for="name">Nome</Label>
                    <Input type="text" id="name" value={form.name || ""} onChange={handleChange}
                        name="name" placeholder="Insira seu nome" className="text-uppercase" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" id="email" value={form.email || ""} onChange={handleChange}
                        name="email" placeholder="Insira seu email" className="text-lowercase" />
                </FormGroup>
                <FormGroup>
                    <Label for="nascimento">Data Nascimento</Label>
                    <Input type="date" id="nascimento" value={form.data_nascimento || ""} onChange={handleChange}
                        name="data_nascimento" placeholder="Insira seu nascimento" />
                </FormGroup>
                <FormGroup>
                    <Label for="nascimento">Senha</Label>
                    <Input type="text" id="senha" value={form.data_nascimento || ""} onChange={handleChange}
                        name="data_nascimento" placeholder="Insira sua senha" />
                </FormGroup>
                <FormGroup>
                    <Button color="primary" onClick={submitForm}>Cadastrar</Button>
                </FormGroup>
            </Col>
        </BoxInscricao>
    )
}

export default Inscricao


const BoxInscricao = styled(Row)`
`


