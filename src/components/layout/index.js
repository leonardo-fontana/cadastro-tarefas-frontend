import Header from './header'
import Footer from './footer'
import styled from 'styled-components';

const Layout = (props) => {
    document.title = props.nomeDaPagina;
    return (
        <>
            <Header titulo={props.nomeDaPagina} />
            <Main className="container">
                {props.children}
            </Main>
            <Footer />
        </>
    )
}

export default Layout;

const Main = styled.main`
    flex:1;
`