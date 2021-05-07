import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { isAuthenticated } from './config/auth'

import Layout from './components/layout'

import Home from './views/home';
import Tarefas from './views/tarefa';
import CadastroTarefa from './views/tarefa/create';
import Sobre from './views/sobre';
import SignIn from './views/login/signin';
import SignUp from './views/login/signup';
import Detalhes from './views/tarefa/detalhes';
import Perfil from './views/perfil';
import Error404 from './views/errors/404';
import history from './config/history';

import { useSelector } from 'react-redux';

const AdminRoute = ({ ...rest }) => {
    if (!isAuthenticated()) {
        return <Redirect to="/signin" />
    }

    const hasAdmin = Object.keys(rest).includes('admin') && !rest.admin

    if (hasAdmin) {
        return <Redirect to="/error/401" />
    }

    return <Route {...rest} />
}


const Routers = () => {

    const isAdmin = useSelector(state => state.auth.isAdmin)

    return (
        <Router history={history}>
            <Layout nomeDaPagina="Iluminar">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <AdminRoute exact path='/tarefa' admin={isAdmin} component={Tarefas} />
                    <AdminRoute exact path='/tarefa/:id' admin={isAdmin} component={CadastroTarefa} />

                    <Route exact path='/signin' component={SignIn} />
                    <Route exact path='/signup' component={SignUp} />

                    <Route exact path='/perfil/:id' component={Perfil} />
                    <Route exact path='/sobre' component={Sobre} />
                    <Route exact path='/detalhes/:id' component={Detalhes} />

                    <Route exact to="/error/404" component={Error404} />
                    <Redirect from="*" to="/error/404" />
                    {/* <Route component={Error404} /> */}
                </Switch>
            </Layout>
        </Router >
    )

}


export default Routers
