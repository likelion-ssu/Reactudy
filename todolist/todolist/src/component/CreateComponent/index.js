import React, { useEffect, useState } from "react";
import { TypeButtonBox } from "../TypeButton/styles";
import { StyledInput, StyledLayout } from "./styles";
import TypeButton from "../TypeButton/index";

const CreateComponent = ({ isVisible, addHandler }) => {
    const [type, setType] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        return () => {
            setType(""); // create 화면이 사라질 때 초기화
            setContent("");
        };
    }, [isVisible]);

    useEffect(() => {
        addHandler(content, type);
    }, [type]);

    return (
        <>
            {isVisible ? (
                <StyledLayout>
                    <StyledInput
                        placeholder="what we have to do"
                        onChange={(e) => {
                            setContent(e.target.value);
                            addHandler(e.target.value, type);
                        }}
                    ></StyledInput>
                    <TypeButton clickHandler={setType} selectedType={type} />
                </StyledLayout>
            ) : null}
        </>
    );
};

export default CreateComponent;
