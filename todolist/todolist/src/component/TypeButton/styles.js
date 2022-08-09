import styled from "styled-components";
import { colors } from "../../styles";
import AddButton from "../AddButton/index";

const setCheckedState = (isChecked) => {
    return isChecked ? "filter : brightness(0.8)" : null;
};

export const TypeButtonBox = styled.div`
    background-color: ${"#FFE4FB"};
    border-radius: 5px;
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
    text-align: center;
    line-height: 4rem;

    -webkit-box-shadow: 10px 10px 42px -8px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 10px 10px 42px -8px rgba(0, 0, 0, 0.3);
    box-shadow: 10px 10px 42px -8px rgba(0, 0, 0, 0.3);
    ${(props) => setCheckedState(props.isChecked)}
`;

export const TypeMonButtonBox = styled.div`
    // background-color: ${"#D3C9EB"};
    border-radius: 5px;
    width: 4rem;
    height: 4rem;
    font-size: 1rem;
    text-align: center;
    line-height: 4rem;

    -webkit-box-shadow: 10px 10px 42px -8px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 10px 10px 42px -8px rgba(0, 0, 0, 0.3);
    box-shadow: 10px 10px 42px -8px rgba(0, 0, 0, 0.3);

    :hover {
        background-color: lightgrey;
        filter: brightness(0.98);
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    width: 90%;
    gap: 2rem;
    justify-content: center;

    padding-top: 2rem;
`;
