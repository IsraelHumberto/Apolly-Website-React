import styled from "styled-components";

import { colors, boxShadow } from "../../styles/styleGuide";

export const Container = styled.div`
    position: relative;
    border: 10px solid #7572FF;
    max-width: 350px;
    width: 85vw;
    left: 10px;
    margin: 98px auto 40px;
    padding: 10px 0px;

    .content {
        background-color: ${colors.white};
        padding: 18px;
        width: calc(100% + 20px);
        right: 30px;
        position: relative;

        .title-card {
        text-transform: uppercase;
        color: ${colors.royalBlue};
    }

    p {
        color: ${colors.gray};
        margin: 14px 0 24px;
    }
    
    .download-title {
        text-transform: uppercase;
    }
    
    .download-apps {
        display: flex;

        a {
            width: 108px;
            margin-top: 14px;
        }
    }
    }

    /* background-color: ${colors.white};
    padding: 18px;
    margin: 98px auto 40px;
    max-width: 250px;
    position: relative;
    right: 10px;
    z-index: 1;
    
    .content {
        z-index: 1;
    }
    
    .title-card {
        text-transform: uppercase;
        color: ${colors.royalBlue};
    }

    p {
        color: ${colors.gray};
        margin: 14px 0 24px;
    }
    
    .download-title {
        text-transform: uppercase;
    }
    
    .download-apps {
        display: flex;

        a {
            width: 108px;
            margin-top: 14px;
        }
    }
    
    &:after {
        position: absolute;
        content: "";
        width: 100%;
        border: 10px solid #7572FF;
        opacity: 50%;
        height: 105%;
        top: -20px;
        left: 20px;
        z-index: -1;
    } */
`

