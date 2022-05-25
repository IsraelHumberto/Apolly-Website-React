import styled from "styled-components";

import { colors } from "../../../styles/styleGuide";

export const Container = styled.div`
    background-color: ${colors.royalBlue};
    width: max-content;
    padding: 12px 6px;
    border-radius: 3px;
    text-transform: uppercase;
    font: 600 10px/10px 'Josefin Sans', sans-serif;
    color: ${colors.white};
`