import React, { useState } from 'react';
import { NavLink as RRDNavLink, useHistory } from 'react-router-dom'; // funcionalidade
import {
    Collapse,
    Nav, Navbar, NavItem, NavLink, NavbarToggler, NavbarBrand,
    Container,
    Tooltip,
    UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu
} from 'reactstrap';
import styled from 'styled-components';
import { AiFillRead } from 'react-icons/ai'
import { logoutAction } from '../../store/auth/auth.action';
import { isAuthenticated } from '../../config/auth';
import { useSelector, useDispatch } from 'react-redux';

const Header = (props) => {
    const dispatch = useDispatch()
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);
   
    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

    const toggle = () => setIsOpen(!isOpen);
    const usuario = useSelector(state => state.auth.usuario)
    const isAdmin = useSelector(state => state.auth.isAdmin)

    const logout = () => {
        dispatch(logoutAction())
    }

    return (
        <header>
            <SNavbar color="dark" dark expand="md" >
                <Container>
                    <NavbarBrand tag={RRDNavLink} to="/" id="logoMain"> <IconLogo /> Iluminar</NavbarBrand>
                    <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="logoMain" toggle={toggleTooltip}>
                        Voltar ao Menu Principal
                    </Tooltip>
                    <SCollapse isOpen={isOpen} navbar >
                        <Nav className="mr-auto" navbar>
                            <NavItem >
                                <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/" >Inicio</SNavLink>
                            </NavItem>   
                            <NavItem >
                                <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/sobre" >Sobre</SNavLink>
                            </NavItem>                                             
                        </Nav>
                    </SCollapse>
                    {isAuthenticated() ? (
                        <React.Fragment>
                            <SCollapse isOpen={isOpen} navbar>
                                <Nav className="mr-auto" navbar>

                                    {isAdmin ? (
                                        <>
                                            <NavItem>
                                                <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/tarefa" >Tarefa</SNavLink>
                                            </NavItem>
                                            <NavItem>
                                                <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/usuarios" >Usuarios</SNavLink>
                                            </NavItem>
                                        </>
                                    ) : ""}
                                
                                </Nav>
                            </SCollapse>

                            <Nav >
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        {usuario.nome}
                                    </DropdownToggle>
                                    <DropdownMenu>

                                        <DropdownItem onClick={() => history.push('/perfil/1')}>Perfil</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={logout}>Sair</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </React.Fragment>
                    ) : ""}
                    {isAdmin ? (
                        <NavbarToggler onClick={toggle} />
                    ) :             
                        <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/signin" >Login</SNavLink>
                    }
                </Container>
            </SNavbar>
        </header>
    )
}

export default Header

const SNavbar = styled(Navbar)`
    background-color: gray !important;
    border-bottom: 5px solid #4b8EC7;

    a {
        color: #fff !important;
    }

`

const SNavLink = styled(NavLink)`
    margin: auto 5px;
    border-radius: 5px;

    &.active {
        color: #fff !important;
        background-color: #4B8EC7 !important;
    }

    @media (max-width: 767.98px) {
        margin:6px 0;
        
    }

`
const SCollapse = styled(Collapse)`
    flex-grow: 0;
`

const IconLogo = styled(AiFillRead)`
    font-size: 24px;

`