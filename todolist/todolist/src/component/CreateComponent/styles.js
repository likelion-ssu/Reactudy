import styled from "styled-components";
import { colors } from "../../styles";

export const StyledInput = styled.textarea`
    margin-top: 1rem;
    resize: none;
    width: 90%;
    height: 13rem;
    font-size: 1.5em;

    text-align: left;
    background-color: ${"#FDF9F0"};
    border: 0;
    padding: 20px;

    -webkit-box-shadow: 0px 10px 13px -7px #757575,
        9px -2px 17px 5px rgba(212, 212, 212, 0.11);
    box-shadow: 0px 10px 13px -7px #757575,
        9px -2px 17px 5px rgba(212, 212, 212, 0.11);

    :active {
        border: 0;
    }
    ::placeholder {
        color: #757575;
        opacity: (0.1);
        top: 0;
    }

    :focus {
        outline: none;
    }
`;

export const StyledLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: center;
`;
