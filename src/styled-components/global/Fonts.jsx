import { createGlobalStyle } from 'styled-components';

// Outfit
import outfit from '../../assets/fonts/outfit/Outfit-VariableFont_wght.ttf';


const Fonts = createGlobalStyle`
@font-face {
    font-family: 'outfit-variable';
    src: url(${outfit}) format('truetype');
}
`;

export default Fonts;