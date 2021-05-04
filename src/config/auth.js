const TOKEN_KEY = 'auth_gestao_cursos'

const getToken = () => {
    const data = JSON.parse(localStorage.getItem(TOKEN_KEY));
    if (data && data.token) {
        return data.token; // TODO:  geralmente é token
    }
    return false;
};

const getUser = () => {
    const data = JSON.parse(localStorage.getItem(TOKEN_KEY));
    if (data && data.usuario) {
        return data.usuario;
    }
    return false;
};

const isAuthenticated = () => {
    // pegar dentro do localstage
    // validar o token
    // retornar se true ou false
    return getToken() !== false;
};

const removeToken = () => localStorage.removeItem(TOKEN_KEY);

const saveAuth = (data) => localStorage.setItem(TOKEN_KEY, JSON.stringify(data))


export {
    saveAuth,
    getToken,
    getUser,
    isAuthenticated,
    removeToken
}