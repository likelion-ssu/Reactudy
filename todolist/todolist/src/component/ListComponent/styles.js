import styled from "styled-components";

export const ListLayout = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 50vw;
    height: 70vh;
    border-radius: 1rem;
    box-shadow: 0px 15px 12px 0px rgba(0, 41, 158, 0.3);
    -webkit-box-shadow: 0px 15px 12px 0px rgba(0, 41, 158, 0.3);
    -moz-box-shadow: 0px 15px 12px 0px rgba(0, 41, 158, 0.3);
`;

export const StyledLayout = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
