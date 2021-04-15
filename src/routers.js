import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

// layout
import Layout from './components/layout'

// views
import Home from './views/home';
import Tarefas from './views/tarefa';
import CadastroTarefa from './views/tarefa/create';
import Sobre from './views/sobre';
import SignIn from './views/cadastro';
import Detalhes from './views/detalhes';
import Error404 from './views/errors/404';


const Routers = () => {

    return (
        <Router>
            <Layout nomeDaPagina="Iluminar">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/tarefa' component={Tarefas} />
                    <Route exact path='/tarefa/:id' component={CadastroTarefa} />
                    <Route exact path='/signin' component={SignIn} />
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
