import React, { useState } from 'react';
import { NavLink as RRDNavLink } from 'react-router-dom'; // funcionalidade
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,    
    Container,
    Tooltip
} from 'reactstrap';
import styled from 'styled-components';
import { AiFillRead } from 'react-icons/ai'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <SNavbar color="dark" dark expand="md">
                <Container>
                    <NavbarBrand tag={RRDNavLink} to="/" id="logoMain"> <IconLogo /> Iluminar</NavbarBrand>
                    <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="logoMain" toggle={toggleTooltip}>
                        Voltar ao Menu Principal
                    </Tooltip>
                    <NavbarToggler onClick={toggle} />
                    <SCollapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/tarefa" >Tarefas</SNavLink>
                            </NavItem>
                            <NavItem >
                                <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/sobre" >Sobre</SNavLink>
                            </NavItem>
                            <NavItem >
                                <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/signin" >Cadastrar-se</SNavLink>
                            </NavItem>
                            
                        </Nav>
                    </SCollapse>
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