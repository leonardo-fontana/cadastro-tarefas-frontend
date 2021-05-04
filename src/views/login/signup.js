import React, { useState } from 'react';
import {
    Form, FormGroup, Input,
    Card, Col, CardBody,
    CardHeader,
    Button, CardFooter, Label, Alert, Spinner
} from 'reactstrap';
import { Sign } from '../../assets/styled';
import { Link } from 'react-router-dom';
import { signUpAction } from '../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const SignUp = () => {

    const [hasError, setHasError] = useState(false)
    const [success, showSuccess] = useState(false)
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading)
    const error = useSelector(state => state.auth.error)
    const registered = useSelector(state => state.auth.registered)

    const [form, setForm] = useState({
        nome: 'Liniker',
        email: 'liniker@professor.com',
        senha: '123123'
    })

    const handleChange = (props) => {
        const { value, name } = props.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const closeError = () => setHasError(false);
    
    const submitForm = (event) => {

        const nForm = {
            ...form,
        }

        dispatch(signUpAction(nForm))
    }

    const isNotValid = () => {
        const inputs = ['nome', 'email', 'senha']
        const invalid = (label) => !Object.keys(form).includes(label) || form[label].length === 0
        return inputs.some(item => invalid(item))
    }

    useEffect(() => {
        setHasError(error.length > 0)
    }, [error])

    useEffect(() => {
        if (registered) {
            showSuccess(true)
            setForm({})
        }
    }, [registered])


    return (
        <Sign>
            <Col sm={12} md={4} lg={5}>
                <Alert color="success" isOpen={success} toggle={() => showSuccess(!success)}>
                    <div><strong>Usuario </strong> Cadastrado com sucesso.</div>
                    <small>Você será redirecionado em 5s</small>
                </Alert>
                <Alert color="danger" isOpen={hasError} toggle={closeError}>
                    <div><strong>OPS !!! </strong> Aconteceu um erro.</div>
                    <small>Verifique usuário e senha</small>
                </Alert>
                <Card>
                    <CardHeader tag="h4" className="text-center">Cadastre-se</CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="nome">Nome:</Label>
                                <Input disabled={loading} type="text" name="nome" id="nome" onChange={handleChange} value={form.nome || ""} placeholder="Informe seu Nome" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">E-mail:</Label>
                                <Input disabled={loading} type="email" name="email" id="email" onChange={handleChange} value={form.email || ""} placeholder="Informe seu E-mail" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Senha:</Label>
                                <Input disabled={loading} type="password" name="senha" id="senha" onChange={handleChange} value={form.senha || ""} placeholder="Informe sua senha" />
                            </FormGroup>
                            <Button color={isNotValid() || loading ? 'secondary' : 'primary'} disabled={isNotValid()} size="sm" block onClick={submitForm}>
                                {loading ? (<><Spinner size="sm" color="light" /> Carregando...</>) : "Cadastrar"}
                            </Button>
                        </Form >
                    </CardBody>
                    <CardFooter className="text-muted">
                        Já tem acesso ? <Link to="/signin">Faça o Login</Link>
                    </CardFooter>
                </Card>
            </Col>
        </Sign>
    )
}

export default SignUp;

