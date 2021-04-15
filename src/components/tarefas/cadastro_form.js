import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import styled from 'styled-components';

const CadastroForm = () => {

    return (
    <Form>
      <FormGroup>
        <Label for="titulo">Título</Label>
        <Input type="text" name="titulo_tarefa" id="titulo_tarefa" placeholder="Titulo da tarefar" />
      </FormGroup>
      <FormGroup>
        <Label for="descricao_tarefa">Descrição</Label>
        <Input type="textarea" name="descricao_tarefa" id="descricao_tarefa" />
      </FormGroup>
      <FormGroup>
        <Label for="data_inicio">Data de início</Label>
        <Input type="date" name="data_inicio" id="data_inicio" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Data de término</Label>
        <Input type="date" name="data_inicio" id="data_inicio" />
      </FormGroup>
    </Form>
    )
}

export default CadastroForm;

/*const SCard =  styled()`

    background-color: #fafafa;

    :hover {
        background-color: #ddd;
        transition:1s;
        opacity: 0.9;
    }

`*/