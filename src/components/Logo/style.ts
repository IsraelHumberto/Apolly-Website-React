import styled from "styled-components";

import { colors, boxShadow } from "../../styles/styleGuide";

export const Container = styled.div`
    background-color: ${colors.white};
    width: max-content;
    padding: 24px 12px;
    border-radius: 5px;
    box-shadow: ${boxShadow.effect1};
`