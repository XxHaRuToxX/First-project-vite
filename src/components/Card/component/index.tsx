import styled from 'styled-components';
import Avatar from '../../Avatar';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 15px;
    background-color: #0b7ce6;
    width: 123px;
    height: 160px;
    border-radius: 6px;
`
const Title = styled.p`
    color: white;
`
const Description = styled.p`
    font-size: 12px;
`
export interface params {
    value: string,
    title: string,
    description?: string,
    image: string,
    onClick?: (value: string) => void,
}

/**
 * 
 * @param params 
 * @param params.value Identificador del elemento.
 * @param params.value Titulo del elemento.
 * @param params.value Descripción del elemento.
 * @param params.value Callback que retorna un identificador al presionar sobre el componente.
 * @example 
 * import { useState } from 'react';
 * import Card, { params as paramsCard} from './components/Card';
 * import Grid from './components/Grid';

export const App = (): JSX.Element => {

    const [data, setData] = useState<paramsCard[]>([
        {value: "1", image: "/vite.svg", title: "Store One"},
        {value: "2", image: "/vite.svg", title: "Store Two"},
        {value: "3", image: "/vite.svg", title: "Store Three"},
        {value: "4", image: "/vite.svg", title: "Store Four"},
        {value: "5", image: "/vite.svg", title: "Store Five"},
        {value: "6", image: "/vite.svg", title: "Store Sex"},
    ])

    return (
        <Grid>
            {
                data.map((v, i) => <Card key={i} {...v} />)
            }
        </Grid>
    )
}
 * @returns JSX.Element
 */
const App = (params: params): JSX.Element => {

    const handleCLick = () =>{
        if(typeof params.onClick === 'function') params.onClick(params.value);
    }

    return (
        <Container onClick={handleCLick}>
            <Avatar image={params.image} />
            <Title>{params.title}</Title>
            <Description>{params.description}</Description>
        </Container>
    )
}

export default App;
