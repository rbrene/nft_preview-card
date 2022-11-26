import { createGlobalStyle } from 'styled-components';

// Poppins Font
import poppinsThin from '../../assets/fonts/poppins/Poppins-Thin.ttf';
import poppinsExtraLight from '../../assets/fonts/poppins/Poppins-ExtraLight.ttf';
import poppinsLight from '../../assets/fonts/poppins/Poppins-Light.ttf';
import poppinsRegular from '../../assets/fonts/poppins/Poppins-Regular.ttf';
import poppinsMedium from '../../assets/fonts/poppins/Poppins-Medium.ttf';
import poppinsSemiBold from '../../assets/fonts/poppins/Poppins-SemiBold.ttf';
import poppinsBold from '../../assets/fonts/poppins/Poppins-Bold.ttf';
import poppinsExtraBold from '../../assets/fonts/poppins/Poppins-ExtraBold.ttf';
import poppinsBlack from '../../assets/fonts/poppins/Poppins-Black.ttf';

// Gotham Font
import gothamLight from '../../assets/fonts/gotham/GothamLight.ttf';
import gothamRegular from '../../assets/fonts/gotham/GothamBook.ttf';
import gothamMedium from '../../assets/fonts/gotham/GothamMedium.ttf';
import gothamBold from '../../assets/fonts/gotham/GothamBold.ttf';


const Fonts = createGlobalStyle`
@font-face {
    font-family: 'Poppins Thin';
    src: url(${poppinsThin}) format('truetype');
}
@font-face {
    font-family: 'Poppins ExtraLight';
    src: url(${poppinsExtraLight}) format('truetype');
}
@font-face {
    font-family: 'Poppins Light';
    src: url(${poppinsLight}) format('truetype');
}
@font-face {
    font-family: 'Poppins Regular';
    src: url(${poppinsRegular}) format('truetype');
}
@font-face {
    font-family: 'Poppins Medium';
    src: url(${poppinsMedium}) format('truetype');
}
@font-face {
    font-family: 'Poppins SemiBold';
    src: url(${poppinsSemiBold}) format('truetype');
}
@font-face {
    font-family: 'Poppins Bold';
    src: url(${poppinsBold}) format('truetype');
}
@font-face {
    font-family: 'Poppins ExtraBold';
    src: url(${poppinsExtraBold}) format('truetype');
}
@font-face {
    font-family: 'Poppins Thick';
    src: url(${poppinsBlack}) format('truetype');
}
@font-face {
    font-family: 'Gotham Light';
    src: url(${gothamLight}) format('truetype');
}
@font-face {
    font-family: 'Gotham Regular';
    src: url(${gothamRegular}) format('truetype');
}
@font-face {
    font-family: 'Gotham Medium';
    src: url(${gothamMedium}) format('truetype');
}
@font-face {
    font-family: 'Gotham Bold';
    src: url(${gothamBold}) format('truetype');
}
`;

export default Fonts;