import http from '../config/http';

const authService = (data) => http.post('/auth', data);

const registerUserService = (data) => http.post('/usuario', data);


export {
    authService,
    registerUserService
}