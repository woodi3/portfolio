import styled from 'styled-components'
import { theme } from '../constants'
export const CustomLink = styled.a`
    color: ${theme.primary.text};
    text-decoration: none;
    font-weight: ${props => props.bold ? '700' : 'normal'};
    &:hover {
        color: ${theme.primary.bgDark};
        text-decoration: underline;
    }
`;