import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { getServiceUsuarioById } from '../services/usuario.service'
import { Jumbotron} from 'reactstrap';
import Loading from '../components/loading'
import { useHistory } from 'react-router';

const Perfil = () => {
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [detalhe, setDetalhe] = useState({});
    const [update, setUpdate] = useState(false)

    const getDetalhes = useCallback(async () => {
        try {
            setLoading(true)
            const res = await getServiceUsuarioById(id);
            setDetalhe(res.data)
            setLoading(false)

        } catch (error) {
            console.log('####', error)
            history.push('/error/404')
        }

    }, [id, history]);

    useEffect(() => {
        getDetalhes()
        setUpdate(false)
    }, [getDetalhes, update])

    const montarTela = (usuario) => (
        <div>
            <Jumbotron>
                <div className="display-4">{usuario.nome}</div>
                <p className="lead">
                    Email: <strong>{usuario.email}</strong>
                </p>  
                <p className="lead">
                    Tipo: <strong>{usuario.tipo}</strong>
                </p>  
            </Jumbotron>
        </div>
    )

    return (
        loading
            ? <Loading />
            : montarTela(detalhe)
    )
}

export default Perfil;
