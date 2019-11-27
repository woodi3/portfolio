import styled from 'styled-components'
import { theme } from '../constants'

export const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    color: ${theme.primary.text};
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid ${theme.primary.text};
    padding: 1.25rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:not(:disabled) {
        cursor: pointer;
    }
    &:not(:disabled):hover {
        background-color: ${theme.primary.text};
        color: #fff;
    }
`;