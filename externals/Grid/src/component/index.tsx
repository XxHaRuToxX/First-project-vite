import React, { CSSProperties } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    padding: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-self: center;
    align-items: center;
    align-content: flex-start;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: scroll;
    gap: 15px;
`

export interface params {
    children: React.ReactNode,
    style?: CSSProperties
}

const App = (params: params): JSX.Element => {
    return (
        <Container style={params.style}>
            {params.children}
        </Container>
    )
}


export default App;