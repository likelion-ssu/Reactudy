import styled from "styled-components";

export const colors = {
    pink: "#D16BA5",
    blue: "#86A8E7",
    green: "#5FFBF1",
    brown: "#35001B",
    grey: "#BBA5B0",
    purple: "#6C5B7A",
    yellow: "#FFD364",
};

export const MainLayout = styled.div`
    position: relative;
    overflow: hidden;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(
        to right top,
        #d16ba5,
        #f58393,
        #ffa687,
        #ffcc8c,
        #fcf3a5
    );
`;
