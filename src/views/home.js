import { Jumbotron } from 'reactstrap';

const Home = () => {

    return (
        <div>
        <Jumbotron>
          <h1 className="display-3">Bem Vindo!</h1>
          <p className="lead">Este projeto tem como foco a criação de uma lista de tarefas pessoal.</p>
          <hr className="my-2" />
         
          <p className="lead">
            <a href="/tarefa" class="btn btn-primary">Para lista de tarefas</a>
          </p>
        </Jumbotron>
      </div>
    )
}

export default Home;
