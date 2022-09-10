import { useState } from 'react';
import Card, { params as paramsCard } from './components/Card';
import Grid from '@react/grid';
import CardProduct from '@react/product';

export const App = (): JSX.Element => {

    const [data, setData] = useState<paramsCard[]>([
        { value: "1", image: "/vite.svg", title: "Store One" },
        { value: "2", image: "/vite.svg", title: "Store Two" },
        { value: "3", image: "/vite.svg", title: "Store Three" },
        { value: "4", image: "/vite.svg", title: "Store Four" },
        { value: "5", image: "/vite.svg", title: "Store Five" },
        { value: "6", image: "/vite.svg", title: "Store Sex" },
    ]);

    const handleSelect: paramsCard['onClick'] = (e) => {
        console.log(e)
    }

    return (
        <Grid>
            <CardProduct
                value='1'
                image='https://http2.mlstatic.com/D_NQ_NP_687335-MLA46492825242_062021-O.webp'
                title='Teléfono'
                onMouseOver={() => console.log('Over')}
                onMouseLeave={() => console.log('Leave')}
            />
            <CardProduct value='2' image='https://http2.mlstatic.com/D_NQ_NP_604790-MLA49152794859_022022-O.webp' title='Teléfono' />
            {
                data.map((v, i) => <Card key={i} {...v} onClick={handleSelect} />)
            }
        </Grid>
    )
}
