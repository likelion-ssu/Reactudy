import React from "react";
import { StyledButton } from "./styles";

const AddButton = ({ onClick }) => {
    return <StyledButton onClick={onClick}>+</StyledButton>;
};

export default AddButton;
