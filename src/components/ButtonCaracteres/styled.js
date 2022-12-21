import styled, {css} from 'styled-components';



export const ButtonCaracteresContainer = styled.button`
    padding: 10px;
    background-color: #191919;
    color:#c0f4ff;
    font-size: 22px;
    font-weight:600;
    flex:2.6;
    text-shadow: 0px 0px 2px #c0f4ff;
    border-radius:5px;
    &:hover{
        cursor:pointer;
        background-color: #524f4f;
    }

    ${({variant}) => variant !== "primary" &&  css`
        padding: 10px;
        background-color: #524f4f;
        color: #c0f4fF;
        font-size: 22px;
        font-weight:600;
        flex:2.6;
        text-shadow: 0px 0px 2px #c0f4ff;
        border-radius:5px;
        &:hover{
            opacity:0.8;
            cursor:pointer;
    `}
`