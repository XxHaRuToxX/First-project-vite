import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    
`

const Img = styled.img`
    width: 70px;
    height: 70px;
    object-fit: contain;
`

export interface params {
    image: string;
}

const App = (params: params): JSX.Element => {

    const [visible, setVisible] = useState<boolean>(false);

    const handleClick = () => setVisible(!visible);

    return (
        <Container onClick={handleClick} >

            <Img src={params.image} />

        </Container>
    )
}

export default App;
