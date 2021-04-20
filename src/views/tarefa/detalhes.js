import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { deleteServiceTarefa, getServiceDetalhe } from '../../services/tarefa.service'
import { Button, Jumbotron, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Loading from '../../components/loading'
import { BiTrash } from 'react-icons/bi'
import styled from "styled-components";
import ReactSwal from '../../plugins/swal';
import history from '../../config/history';

const Detalhes = (props) => {
    const { id: id } = useParams();

    const [loading, setLoading] = useState(false);
    const [detalhe, setDetalhe] = useState({});
    const [update, setUpdate] = useState(false)

    const [modal, setModal] = useState({
        isOpen: false,
        data: null
    })

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

    const toggleModal = (data = null) => {
        setModal({
            isOpen: !modal.isOpen,
            data
        })
    }

    const deleteTarefa = () => {
        if (modal.data.id) {
            deleteServiceTarefa(modal.data.id)
                .then(() => {
                    ReactSwal.fire({
                        icon: 'success',
                        title: `Tarefa ${modal?.data?.titulo?.split(" ")[0]} deletado com sucesso !`,
                        showConfirmButton: false,
                        showCloseButton: true,
                    })
                    update(true)
                })
                .catch(erro => console.log('Algo deu errado...'))
        } 
    }

    useEffect(() => {
        getDetalhes()
        setUpdate(false)
    }, [getDetalhes, update])

    const montarTela = (tarefa) => (
        <div>
            <Jumbotron>
                <div className="display-4">{tarefa.titulo}</div>
                <p className="lead">
                    <strong>{tarefa.descricao}</strong>
                </p>
                <p>
                    <strong>Data de criação:</strong> {tarefa.data_inicio}
                </p>
                <p> 
                    <strong>Prazo: </strong>{tarefa.data_fim}
                </p>        
                <Button alt='Excluir usuário' size="sm" className="text-danger" color="link"
                    onClick={() => toggleModal(tarefa)} >Excluir tarefa<BiTrash size="20" />
                </Button>
            </Jumbotron>
                     
            <Modal isOpen={modal.isOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Excluir Tarefa</ModalHeader>
                    <ModalBody>
                        Excluir tarefa <strong>{tarefa.titulo}</strong> ?
                    </ModalBody>
                <ModalFooter>

                <Button color="primary" onClick={deleteTarefa}>SIM</Button>
                    <Button color="secondary" onClick={toggleModal}>NÃO</Button>
                </ModalFooter>
            </Modal>

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