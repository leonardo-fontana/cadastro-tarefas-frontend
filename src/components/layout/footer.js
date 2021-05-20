import styled from "styled-components";

const Footer = () => (
    <SFooter>
        <a href="https://gitlab.com/leonardo.fontana/projeto3-tarefas-fronend"><i class="fa fa-gitlab fa-2x" aria-hidden="true" ></i> </a>
        <p>Todos os direitos reservados - 
           Leonardo Damásio Fontana | Telefone: (99) 9999-9999
        </p>
    </SFooter>
);

export default Footer;

const SFooter = styled.footer`
    border-top: 2px solid #4b8EC7;
    text-align:center;
    padding: 2px;
`