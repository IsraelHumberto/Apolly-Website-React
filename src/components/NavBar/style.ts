import styled from "styled-components";

import { colors, boxShadow } from "../../styles/styleGuide";

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
    background-color: ${colors.white};
    box-shadow: ${boxShadow.effect1};
    border-radius: 3px;

    .logo {
        position: absolute;
        left: 0;
        right: 0;
        width: max-content;
        margin: 0 auto;
    }
`