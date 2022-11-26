import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem } from '../../helpers/units';


export const H1 = styled(animated.h1)`
    position: relative;
    font-size: clamp(${rem(26)}, 6vw, ${rem(64)});
    font-family: 'Poppins Black';
    text-transform: uppercase;
    letter-spacing: 0.1ch;
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
    z-index: inherit;
`;

export const H5 = styled(animated.h5)`
    position: relative;
    z-index: inherit;
`;

export const H6 = styled(animated.h6)`
    position: relative;
    font-size: clamp(${rem(14)}, 3vw, ${rem(20)});
    font-family: 'Gotham Bold';
    text-transform: uppercase;
    letter-spacing: 0.1ch;
    opacity: 0.2;
    z-index: inherit;
`;

export const Small = styled(animated.small)`
    position: relative;
    z-index: inherit;
`;

export const P = styled(animated.p)`
    position: relative;
    font-size: ${rem(18)};
    color: var(--softBlue);
    z-index: inherit;
`;

export const Letter = styled(animated.span)`
    position: relative;
    display: inline-flex;
    z-index: inherit;

    &[data-letter=' '] {
        width: 0.5ch;
    }
`;