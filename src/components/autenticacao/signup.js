import React, { useState } from 'react';
import {
    Form, FormGroup, Input,
    Card, Col, CardBody,
    CardHeader,
    Button, CardFooter, Label
} from 'reactstrap';
import { Sign } from '../../assets/styled';
import { Link } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';
//import { useEffect } from 'react';

const SignIn = () => {

    const [form, setForm] = useState({
        usuario: "fulandetal@detal.com",
        senha: "123123"
    })
    const nothing = ""
    /*const submitForm = (event) => {
        event.preventDefault()
        dispatch(signInAction(form))
    }*/


    const handleChange = (props) => {
        const { value, name } = props.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    return (
        <Sign>
            <Col sm={12} md={4} lg={5}>
                <Card>
                    <CardHeader tag="h4" className="text-center">Login</CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="email">E-mail:</Label>
                                <Input type="email" name="usuario" id="usuario" onChange={handleChange} value={form.usuario || ""} placeholder="Informe seu E-mail" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Senha:</Label>
                                <Input type="password" name="senha" id="senha" onChange={handleChange} value={form.senha || ""} placeholder="Informe sua senha" />
                            </FormGroup>
                            <Button color='primary' size="sm" block onClick={nothing/*submitform*/}>
                                Enviar
                            </Button>
                        </Form >
                    </CardBody>
                </Card>
            </Col>
        </Sign>
    )
}

export default SignIn;

