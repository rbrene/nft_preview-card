import styled from 'styled-components';
import { animated } from '@react-spring/web';


const Image = styled(animated.img)`
    position: relative;
    max-width: 40%;
    height: auto;
    object-fit: contain;
    z-index: inherit;
`;

export default Image;


export const Preview = styled(animated.img)`
    position: relative;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: inherit;
`;


export const Avatar = styled(animated.img)`
    position: relative;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    z-index: inherit;
`;
