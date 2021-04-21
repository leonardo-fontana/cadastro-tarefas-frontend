import { Link } from 'react-router-dom';
import { Button,Card, CardBody,CardTitle } from 'reactstrap';
import styled from 'styled-components';

const CardItem = (props) => {
    const { titulo, id} = props.item;

    return (
        <SCard>
            <CardBody>
                <CardTitle tag="h5">{titulo}</CardTitle>
                <Button size="sm"  tag={Link} to={`/detalhes/${id}`} color="link">Detalhar...</Button>
            </CardBody>
        </SCard>
    )
}

export default CardItem;

const SCard =  styled(Card)`

    background-color: #fafafa;

    :hover {
        background-color: #ddd;
        transition:1s;
        opacity: 0.9;
    }

`