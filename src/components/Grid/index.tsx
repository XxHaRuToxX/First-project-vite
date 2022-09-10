import styled from 'styled-components';

const Grid = styled.div`
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
    background-color: #222629;
`

export default Grid;