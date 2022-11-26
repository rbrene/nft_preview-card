import styled from 'styled-components';
import { animated } from '@react-spring/web';


const Article = styled(animated.article)`
    position: relative;
    max-width: ${({ $maxWidth }) => $maxWidth ? $maxWidth : '100%'};
    height: ${({ $height }) => $height ? $height : 'auto'};
    z-index: inherit;
`;

export default Article;