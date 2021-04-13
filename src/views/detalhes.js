import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { getServiceDetalhe } from '../services/tarefa.service'
import { Jumbotron, Button } from 'reactstrap';
import Loading from '../components/loading'
import TabelaInscritos from '../components/tabela'
import Inscricao from '../components/autenticacao/signup'
import styled from "styled-components";
import { BsListCheck, BsPlus } from 'react-icons/bs'

const Detalhes = (props) => {
    const { id } = useParams();
    const { history } = props // pegando o historico do component

    const [loading, setLoading] = useState(false);
    const [detalhe, setDetalhe] = useState({});
    const [update, setUpdate] = useState(false)
    const [isSub, setSub] = useState(false)

    const getDetalhes = useCallback(async () => {
        try {
            setLoading(true)
            const res = await getServiceDetalhe(id);
            setDetalhe(res.data)
            setLoading(false)

        } catch (error) {
            console.log('####', error)
            // hasError(true)
            history.push('/?error=404')
        }

    }, [id, history]);


    // use Effect é o ciclo de vida que executa antes* de renderizar a pagina.
    useEffect(() => {
        console.log('iniciando...')
        getDetalhes()
        setUpdate(false)
    }, [getDetalhes, update])


    const Detalhamento = ({ name, coordinator }) => (
        <Jumbotron>
            <div className="display-4">{name}</div>
            <p className="lead">
                <strong>Cordenador:</strong> {coordinator}
            </p>
        </Jumbotron>
    )


    const Menu = () => (
        <Navbar expand="md mb-4">
            <div className="info d-none d-md-block d-lg-block">
                {isSub ? "Faça aqui sua inscrição no curso" : "Lista de inscritos"}
            </div>
            <Button onClick={() => setSub(!isSub)} color={!isSub ? "primary" : "secondary"} size="sm">
               
                {!isSub ? (<><BsPlus /> Inscrições </>) : (<><BsListCheck /> Lista de Inscritos</>)}
            </Button>
        </Navbar>
    )

    const montarTela = (detalhe) => (
        <div>
            {Detalhamento(detalhe)}
            {Menu()}
            {
                // [condicao] ? [true] : [false]
                isSub
                    ? (<Inscricao id={id} update={setUpdate} isForm={setSub} />)
                    : (<TabelaInscritos inscritos={detalhe.subscriptions} update={setUpdate} />)
            }
        </div>
    )

    return (
        loading
            ? <Loading />
            : montarTela(detalhe)


        //    
        // <div>
        //     <div>Aqui está o Detalhamento do Curso</h1>
        //     { loading ? <Loading /> : imprimirDetalhes(detalhe)}
        //     <hr />
        //     <Inscricao
        //         id={id}
        //         update={setUpdate}
        //     />
        //     <hr />
        //     <TabelaInscritos
        //         inscritos={detalhe.subscriptions}
        //         update={setUpdate}
        //     />
        // </div>
    )
}


export default Detalhes;


const Navbar = styled.div`
    background-color:none !important;
    margin: 10px 0 20px;
    padding: 10px 0;
    border-bottom: thin dotted #4446;
    display:flex;
    
    .info {
        flex:1;
    }


`

// tela de detalhes

// Menu de toogle de troca de tela (Botão)
// tela de inscrição / tabela