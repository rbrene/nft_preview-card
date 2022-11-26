import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, min } from '../../helpers/units';


export const Card = styled(animated.div)`
    position: relative;
    max-width: ${rem(279)};
    width: 100%;
    height: max-content;
    padding: ${rem(26)};
    background-color: var(--bgCard);
    border-radius: ${rem(8)};
    z-index: inherit;

    ${min('mobile')} {
        max-width: ${rem(350)};
        padding: ${rem(24)};
    }
`;

export const CardLayout = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: 'image' 'header' 'content' 'footer';
    gap: ${rem(28)};
    z-index: inherit;
`;

export const Image = styled(animated.div)`
    grid-area: image;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
    border-radius: ${rem(8)};
    overflow: hidden;
    cursor: default;

    ${min('tablet')} {
        cursor: pointer;
    }
`;

export const View = styled(animated.div)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsl(var(--cyanHsl) / 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: inherit;
`;

export const Header = styled(animated.header)`
    grid-area: header;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export const Description = styled(animated.article)`
    grid-area: content;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    gap: ${rem(24)};
    z-index: inherit;
`;

export const Details = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 100%;
    font-size: ${rem(14)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: inherit;
`;

export const Icon = styled(animated.span)`
    position: relative;
    z-index: inherit;

    svg {
        position: relative;
        width: 100%;
        height: auto;
    }
`;

export const Currency = styled(animated.span)`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${rem(8)};
    color: var(--cyan);
    z-index: inherit;
`;

export const TimeLimit = styled(animated.span)`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${rem(8)};
    color: var(--softBlue);
    z-index: inherit;
`;

export const Footer = styled(animated.footer)`
    grid-area: footer;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
    display: flex;
    align-items: center;
    gap: ${rem(16)};

    &::before {
        content: '';
        position: absolute;
        top: -30%;
        left: 0;
        right: 0;
        width: 100%;
        height: ${rem(1)};
        display: block;
        background-color: var(--softBlue);
        opacity: 0.25;
        translate: 0% -50%;
        z-index: inherit;
    }

`;

export const ProfileImage = styled(animated.div)`
    position: relative;
    width: ${rem(32)};
    height: ${rem(rem(32))};
    z-index: inherit;
`;

export const Designer = styled(animated.span)`
    position: relative;
    color: var(--softBlue);
    z-index: inherit;
`;

export const Name = styled(animated.span)`
    position: relative;
    color: var(--white);
    z-index: inherit;
    cursor: default;

    ${min('tablet')} {
        cursor: pointer;
    }
`;