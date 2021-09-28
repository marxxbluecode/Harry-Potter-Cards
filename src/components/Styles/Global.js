import { createGlobalStyle } from "styled-components";
import { HarryPotter } from "./Fonts";

export const Globalstyle = createGlobalStyle`
    ${HarryPotter}
    body{
        font: 1rem, sans-serif;
        background-image: linear-gradient( 94.3deg,  rgba(26,33,64,1) 10.9%, rgba(81,84,115,1) 87.1% );
    }
`;