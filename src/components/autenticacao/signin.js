import { useState } from "react"
import { createServiceTarefa } from "../../services/tarefa.service"
import {
    Form, FormGroup, Input,
    Card, Col, CardBody,
    CardHeader,
    Button, CardFooter, Label, Alert, Spinner
} from 'reactstrap';

import styled from "styled-components";
import ReactSwal from "../../plugins/swal";
import { Sign } from '../../assets/styled';

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
            <Sign>
            <Col sm={12} md={4} lg={5}>
                <Alert color="danger" isOpen={hasError} toggle={closeError}>
                    <div><strong>OPS !!! </strong> Aconteceu um erro.</div>
                    <small>Verifique usuário e senha</small>


                </Alert>
                <Card>
                    <CardHeader tag="h4" className="text-center">Login</CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="email">E-mail:</Label>
                                <Input disabled={loading} type="email" name="usuario" id="usuario" onChange={handleChange} value={form.usuario || ""} placeholder="Informe seu E-mail" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Senha:</Label>
                                <Input disabled={loading} type="password" name="senha" id="senha" onChange={handleChange} value={form.senha || ""} placeholder="Informe sua senha" />
                            </FormGroup>
                            <Button color={isNotValid() || loading ? 'secondary' : 'primary'} disabled={isNotValid()} size="sm" block onClick={submitForm}>
                                {loading ? (<><Spinner size="sm" color="light" /> Carregando...</>) : "Enviar"}
                            </Button>
                        </Form >
                    </CardBody>
                    <CardFooter className="text-muted">
                        Não tem Cadastro? <Link to="/signup">Cadastre-se</Link>
                    </CardFooter>

                </Card>
            </Col>
        </Sign>

        </BoxInscricao>
    )
}

export default Inscricao


const BoxInscricao = styled(Row)`
`