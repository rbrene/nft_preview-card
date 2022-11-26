import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, min } from '../../helpers/units';


export const H1 = styled(animated.h1)`
    position: relative;
    z-index: inherit;
`;

export const H2 = styled(animated.h2)`
    position: relative;
    z-index: inherit;
`;

export const H3 = styled(animated.h3)`
    position: relative;
    z-index: inherit;
`;

export const H4 = styled(animated.h4)`
    position: relative;
    font-size: clamp(${rem(18)}, 2vw, ${rem(20)});
    font-family: 'outfit-variable';
    font-variation-settings: 'wght' 400;
    letter-spacing: 0.05ch;
    z-index: inherit;
    cursor: default;

    ${min('tablet')} {
        cursor: pointer;
    }
`;

export const P = styled(animated.p)`
    position: relative;
    font-size: clamp(${rem(14)}, 2vw, ${rem(18)});
    font-family: 'outfit-variable';
    font-variation-settings: 'wght' 300;
    color: var(--softBlue);
    z-index: inherit;
`;
