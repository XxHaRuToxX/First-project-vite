import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
`
const Img = styled.img`
    aspect-ratio: 9/16;
    object-fit: contain;
`
const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #1c1719;
    border-radius: 5px;
`
const Title = styled.p`
    color: white;
`
const Description = styled.p`
    
`
export interface params {
    value: string,
    image: string,
    title: string,
    description?: string,
    onClick?: (value: string) => void,
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined
    onMouseOver?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const defaultsProps = {
    title: 'Product one',
    image: 'https://www.marketinhouse.es/wp-content/uploads/2020/01/webp-cabecera.jpg.webp',
}

/**
 * 
 * @param params 
 * @param params.value Key of the product
 * 
 * @example
 * import CardProduct from '@react/product';

export const App = (): JSX.Element => {

    return (
        <CardProduct
            value='1'
            image='https://http2.mlstatic.com/D_NQ_NP_687335-MLA46492825242_062021-O.webp'
            title='Teléfono'
            onMouseOver={() => console.log('Over')}
            onMouseLeave={ ()=>console.log('Leave')}
        />
    )
}
 * @returns JSX.Element
 */

const App = (params: params): JSX.Element => {

    params = { ...defaultsProps, ...params };

    const handleCLick = () => {
        if (typeof params.onClick === 'function') params.onClick(params.value)
    }

    return (
        <Container onClick={handleCLick} onMouseLeave={params.onMouseLeave} onMouseOver={params.onMouseOver}>
            <Img src={params.image} />
            <Body>
                <Title>{params.title}</Title>
                <Description>{params.description}</Description>
            </Body>
        </Container>
    )
}

// App.defaultProps = {
//     image: 'https://www.marketinhouse.es/wp-content/uploads/2020/01/webp-cabecera.jpg.webp',
// }

export default App;