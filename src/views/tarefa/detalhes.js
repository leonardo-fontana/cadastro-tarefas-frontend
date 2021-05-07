import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { deleteServiceTarefa, getServiceDetalhe } from '../../services/tarefa.service'
import { Button, Jumbotron, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Loading from '../../components/loading'
import { BiTrash } from 'react-icons/bi'
import ReactSwal from '../../plugins/swal';
import { useHistory } from 'react-router';

const Detalhes = (props) => {
    const { id } = useParams();
    const history = useHistory();
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
            history.push('/error/404')
        }

    }, [id, history]);

    const toggleModal = (data = null) => {
        setModal({
            isOpen: !modal.isOpen,
            data
        })
    }

    const deleteTarefa = () =>  {
        if (modal.data.id) {
            deleteServiceTarefa(modal.data.id)
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
    )
}

export default Detalhes;