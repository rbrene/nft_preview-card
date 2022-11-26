import styled from 'styled-components';
import Container from '../containers/index';


const Grid = styled(Container)`
    display: grid;
    ${({ $areas }) => $areas && `grid-template-areas: ${$areas}`};
    ${({ $columns }) => $columns && `grid-template-rows: ${$columns}`};
    ${({ $rows }) => $rows && `grid-template-rows: ${$rows}`};
`;

export default Grid;