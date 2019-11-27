import styled from 'styled-components'
import { MEDIA_QUERIES } from '../constants'


// todo toggle display based on media query

export const Image = styled.img`
    @media (min-width: ${MEDIA_QUERIES.sm.min}) {
        display: ${props => props.hideOnScreen === 'sm' ? 'none' : 'inline'};
    }
    @media (min-width: ${MEDIA_QUERIES.md.min}) {
        display: ${props => props.hideOnScreen === 'md' ? 'none' : 'inline'};
    }
    @media (min-width: ${MEDIA_QUERIES.lg.min}) {
        display: ${props => props.hideOnScreen === 'lg' ? 'none' : 'inline'};
    }
    @media (min-width: ${MEDIA_QUERIES.xl.min}) {
        display: ${props => props.hideOnScreen === 'xl' ? 'none' : 'inline'};
    }
    
`


