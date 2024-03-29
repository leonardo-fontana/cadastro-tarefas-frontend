import {
    createServiceTarefa,
    deleteServiceTarefa,
    getServiceAllTarefas,
    getServiceAllTarefasFromUsuario,
    updateServiceTarefa,
    getServiceGetTarefa
} from "../../services/tarefa.service"

export const TYPES = {
    TAREFA_LOADING: "TAREFA_LOADING",
    TAREFA_ALL: "TAREFA_ALL",
    TAREFA_DETAILS: "TAREFA_DETAILS",
}

export const getAllTarefas = () => {
    return async (dispatch) => {

        dispatch({ type: TYPES.TAREFA_LOADING, status: true })

        try {
            const all = await getServiceAllTarefas()
            dispatch({
                type: TYPES.TAREFA_ALL,
                data: all.data
            })
        } catch (error) {
            dispatch({ type: TYPES.TAREFA_LOADING, status: false })
            console.log('aconteceu um ERRO": disparar um e-mail para Admin')
        }
    }
}

export const getAllTarefasFromUsuario = () => {
    return async (dispatch) => {

        dispatch({ type: TYPES.TAREFA_LOADING, status: true })

        try {
            const all = await getServiceAllTarefasFromUsuario()
            dispatch({
                type: TYPES.TAREFA_ALL,
                data: all.data
            })
        } catch (error) {
            dispatch({ type: TYPES.TAREFA_LOADING, status: false })
            console.log('aconteceu um ERRO": disparar um e-mail para Admin')
        }
    }
}


export const getTarefa = (id) => {
    return async (dispatch) => {
        try {
            const res = await getServiceGetTarefa(id);
            dispatch({
                type: TYPES.TAREFA_DETAILS,
                data: res.data
            })
        } catch (error) {
            dispatch({ type: TYPES.COURSE_LOADING, status: false })
            console.log('aconteceu um ERRO": Erro ao detalhar usuario')
        }
    }
}

export const createTarefa = (tarefa) => {
    return async (dispatch) => {
        dispatch({ type: TYPES.TAREFA_LOADING, status: true })
        try {
            createServiceTarefa(tarefa)
            dispatch(getAllTarefas())

        } catch (error) {
            dispatch({ type: TYPES.TAREFA_LOADING, status: false })
            console.log('aconteceu um ERRO": Erro ao criar tarefa')
        }

    }
}

export const updateTarefa = ({ id, titulo, descricao, data_inicio, data_fim }) => {
    return async (dispatch) => {
        dispatch({ type: TYPES.TAREFA_LOADING, status: true })
        try {
            const data = { titulo, descricao, data_inicio, data_fim }

            await updateServiceTarefa(id, data)
            dispatch(getAllTarefas())

        } catch (error) {
            dispatch({ type: TYPES.TAREFA_LOADING, status: false })
            console.log('aconteceu um ERRO": Erro ao criar tarefa')
        }

    }
}
export const deleteTarefa = (id_tarefa) => {
    return async (dispatch) => {
        dispatch({ type: TYPES.TAREFA_LOADING, status: true })
        try {
            await deleteServiceTarefa(id_tarefa)
            dispatch(getAllTarefas())

        } catch (error) {
            dispatch({ type: TYPES.TAREFA_LOADING, status: false })
            console.log('aconteceu um ERRO": Erro ao Excluir tarefa::', error)
        }
    }
}