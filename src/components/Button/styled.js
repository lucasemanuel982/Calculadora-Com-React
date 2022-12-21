import styled, {css} from 'styled-components';


export const ButtonContainer = styled.button`
    padding: 10px;
    background-color: #191919;
    color: #c0f4ff;
    font-size: 22px;
    font-weight:600;
    flex:1;
    text-shadow: 0px 0px 2px #c0f4ff;
    border-radius:5px;
    &:hover{
        background-color: #524f4f;
        cursor:pointer;
    }

    ${({variant}) => variant !== "primary" &&  css`
        padding: 10px;
        background-color: #524f4f;
        color: #c0f4ff;
        font-size: 22px;
        font-weight:600;
        flex:1;
        text-shadow: 0px 0px 2px #c0f4ff;
        border-radius:5px;
        &:hover{
            opacity:0.8;
            cursor:pointer;
    `}
`