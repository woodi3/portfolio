import React from "react";
import {
    Link
} from "react-router-dom";
import styled from 'styled-components';
import { theme } from '../constants';

const NavBar = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
`;

const BaseLink = styled.a`
    display: block;
    padding: .5rem 1rem;
    text-decoration: none;
    margin-left: ${props => props.pushLeft === true ? 'auto' : ''};
    margin-right: ${props => props.pushRight === true ? 'auto' : ''};
    font-size: 12px;
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${theme.grey.text};
    &:hover {
        color: ${theme.grey.bgDark};
    }
`;

const NavLink = styled(Link)`
    display: block;
    padding: .5rem 1rem;
    text-decoration: none;
    margin-left: ${props => props.pushLeft === true ? 'auto' : ''};
    margin-right: ${props => props.pushRight === true ? 'auto' : ''};
    font-size: 12px;
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${theme.grey.text};
    &:hover {
        color: ${theme.grey.bgDark};
    }
`;

export const Nav = (props) => {
    return (
        <NavBar backgroundColor={props.backgroundColor}>
            {props.navItems.map((navItem, index) => 
            navItem.isNavLink ?
                (
                    <NavLink key={index} to={navItem.path} {...navItem.displayProps}>
                        {navItem.title}
                    </NavLink>
                ) :
                (
                    <BaseLink key={index} href={navItem.path} {...navItem.displayProps}>{navItem.title}</BaseLink>
                )
            )}
        </NavBar>
    )
}
    
