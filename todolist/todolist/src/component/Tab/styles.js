import styled from "styled-components";
import { colors } from "../../styles";

export const TabLayout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 2vh;
    -webkit-box-shadow: 1px 6px 6px -1px #d4d4d4;
    box-shadow: 1px 6px 6px -1px #d4d4d4;
`;

export const TabButton = styled.div`
    width: 100%;
    flex-grow: 1;
    padding: 1rem;
    background-color: transparent;
    align-items: center;
    text-align: center;
    font-weight: 300;
    font-size: 1rem;
    ${(props) => getState(props.isChecked)}
`;

const getState = (isChecked) => {
    return isChecked
        ? `color :${colors.brown}; font-weight: 500;`
        : `color : ${colors.grey}; font-weight:300; font-size:0.85rem;`;
};
