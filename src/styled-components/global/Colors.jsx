import { createGlobalStyle } from 'styled-components';


const Colors = createGlobalStyle`
:root {
    --bgMain: hsl(217, 54%, 11%);
    --bgCard: hsl(216, 50%, 16%);
    --white: hsl(0, 0%, 100%);
    --softBlue: hsl(215, 51%, 70%);
    --cyan: hsl(178, 100%, 50%);
    --line: hsl(215, 32%, 27%);
}
`;

export default Colors;