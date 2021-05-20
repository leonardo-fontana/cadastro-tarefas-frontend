import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Jumbotron, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Loading from '../../components/loading'
import { BiTrash } from 'react-icons/bi'
import ReactSwal from '../../plugins/swal';
import { useHistory } from 'react-router';
import { getTarefa, deleteTarefa } from '../../store/tarefa/tarefa.action'
import { useSelector, useDispatch } from 'react-redux';

const Detalhes = () => {
    const { id } = useParams();
    const history = useHistory();

    const dispatch = useDispatch()
    const tarefa = useSelector(state => state.tarefa.details)
    const loading = useSelector(state => state.tarefa.loading)

    useEffect(() => {
        dispatch(getTarefa(id));
    }, [dispatch, id])

    const [modal, setModal] = useState({
        isOpen: false,
        data: null
    })

    const toggleModal = (data = null) => {
        setModal({
            isOpen: !modal.isOpen,
            data
        })
    }

    const deleteTarefaMethod = () =>  {
        if (modal.data.id) {
            dispatch(deleteTarefa(modal.data.id))
                .then(() => {
                    ReactSwal.fire({
                        icon: 'success',
                        title: `Tarefa ${modal?.data?.titulo?.split(" ")[0]} deletado com sucesso !`,
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setTimeout(() => {
                        history.push('/tarefa')
                    }, 2000) 
                })
                .catch(erro => console.log('Algo deu errado...'))
        }      
    }

    const montarTela = () => (
        <div>
            <Jumbotron>
                <h2>{tarefa.titulo}</h2>
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

                <Button color="primary" onClick={deleteTarefaMethod}>SIM</Button>
                    <Button color="secondary" onClick={toggleModal}>NÃO</Button>
                </ModalFooter>
            </Modal>

        </div>
    )

    return (
        loading
            ? <Loading />
            : montarTela()
    )
}

export default Detalhes;