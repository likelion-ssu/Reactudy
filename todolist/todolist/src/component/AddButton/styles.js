import styled from "styled-components";
import { colors } from "../../styles";

export const StyledButton = styled.button`
    position: absolute;

    left: calc(50%);
    transform: translate(-50%, -2.5rem);
    bottom: -5rem;
    background-color: ${"#6C5B7A"};
    width: 5rem;
    height: 5rem;
    line-height: 5rem;
    border: 0;
    border-radius: 5rem;
    color: white;
    font-size: 1.7rem;
    text-align: center;

    :active {
        background-color: ${colors.yellow};
        color: ${colors.purple} !important;
    }
`;
