import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { getServiceDetalhe } from '../services/tarefa.service'
import Loading from '../components/loading'
import Inscricao from '../components/autenticacao/signup'
import styled from "styled-components";

const SignIn = (props) => {

    const { history } = props // pegando o historico do component

    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(false)

    /*const getDetalhes = useCallback(async () => {
        try {
            setLoading(true)
            setTimeout(function(){etLoading(false); }, 3000);

        } catch (error) {
            console.log('####', error)
            // hasError(true)
            history.push('/?error=404')
        }

    }, [history]);*/


    /* use Effect é o ciclo de vida que executa antes* de renderizar a pagina.
    useEffect(() => {
        console.log('iniciando...')
        getDetalhes()
        setUpdate(false)
    }, [getDetalhes, update])*/

    const montarTela = () => (
        <div>
        
            <Inscricao />
            
        </div>
    )

    return (
       
        loading
            ? <Loading />
            : montarTela()


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


export default SignIn;


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