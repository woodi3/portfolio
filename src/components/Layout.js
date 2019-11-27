import React from 'react'
import styled from 'styled-components'
import { MEDIA_QUERIES } from '../constants'

const FluidContainer = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`

const RegularContainer = styled(FluidContainer)`
    @media (min-width: ${MEDIA_QUERIES.sm.min}) {
        max-width: 540px;
    }
    @media (min-width: ${MEDIA_QUERIES.md.min}) {
        max-width: 720px;
    }
    @media (min-width: ${MEDIA_QUERIES.lg.min}) {
        max-width: 960px;
    }
    @media (min-width: ${MEDIA_QUERIES.xl.min}) {
        max-width: 1140px;
    }
`

export const Layout = ({children, fluid, ...rest}) => {
    const getLayout = () => (
        fluid ? (
            <FluidContainer {...rest}>
                {children}
            </FluidContainer>
        ) :
        (
            <RegularContainer {...rest}>
                {children}
            </RegularContainer>
        ) 
    )
    return (
        getLayout()
    )
}