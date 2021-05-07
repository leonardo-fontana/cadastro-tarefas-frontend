import {
    createServiceTarefa,
    deleteServiceTarefa,
    getServiceAllTarefas,
    getServiceDetalhe,
    //removeServiceTarefa,
    //updateServiceCurso
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

/*export const createCourse = (curso) => {
    return async (dispatch) => {
        dispatch({ type: TYPES.COURSE_LOADING, status: true })
        try {
            await createServiceCurso(curso)
            dispatch(getcourseAll())

        } catch (error) {
            dispatch({ type: TYPES.COURSE_LOADING, status: false })
            console.log('aconteceu um ERRO": Erro ao criar usuario')
        }

    }
}
export const updateCourse = ({ id, coordinator, name, start_date }) => {
    return async (dispatch) => {
        dispatch({ type: TYPES.COURSE_LOADING, status: true })
        try {
            const data = { coordinator, name, start_date }

            await updateServiceCurso(id, data)
            dispatch(getcourseAll())

        } catch (error) {
            dispatch({ type: TYPES.COURSE_LOADING, status: false })
            console.log('aconteceu um ERRO": Erro ao criar usuario')
        }

    }
}
export const removeCourse = (id_curso) => {
    return async (dispatch) => {
        dispatch({ type: TYPES.COURSE_LOADING, status: true })
        try {
            // debugger
            await removeServiceCurso(id_curso)
            dispatch(getcourseAll())

        } catch (error) {
            dispatch({ type: TYPES.COURSE_LOADING, status: false })
            console.log('aconteceu um ERRO": Erro ao Excluir curso::', error)
        }

    }
}
export const getDetails = (id_curso) => {
    return async (dispatch) => {
        try {

            const res = await getServiceDetalhe(id_curso);
            res.data.registered = res.data.inscricoes.length > 0;
            dispatch({
                type: TYPES.COURSE_DETAILS,
                data: res.data
            })
        } catch (error) {
            dispatch({ type: TYPES.COURSE_LOADING, status: false })
            console.log('aconteceu um ERRO": Erro ao detalhar usuario')
        }

    }
}
export const deleteSubscription = (id_aluno) => {
    return async (dispatch, getState) => {
        const { curso } = getState()
        dispatch({ type: TYPES.COURSE_LOADING, status: true })

        try {
            const res = await deleteServiceSubscription(curso.details.id, id_aluno)

            if (res.status === 200) {
                dispatch(getDetails(curso.details.id))
            }
        } catch (error) {
            dispatch({ type: TYPES.COURSE_LOADING, status: false })
            console.log('aconteceu um ERRO": Erro ao criar usuario')

        }
    }
}*/