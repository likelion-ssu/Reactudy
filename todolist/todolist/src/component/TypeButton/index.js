import React, { useState, useEffect } from "react";
import { ButtonWrapper, TypeButtonBox, TypeMonButtonBox } from "./styles";
import { useRecoilValue } from "recoil";
import { todoTabState } from "../../recoil/index";

const TypeButton = ({ clickHandler, selectedType }) => {
    const type = ["⚽️.", "🛍", "💊", "📚", "🖥", "🍺.", "🍚"];
    const weeks = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const [checkedState, setChecked] = useState(false);
    const focusTab = useRecoilValue(todoTabState);
    useEffect(() => {}, [selectedType]);

    return (
        <>
            <ButtonWrapper>
                {type.map((t) => {
                    return (
                        <TypeButtonBox
                            key={t}
                            onClick={() => {
                                if (selectedType !== t)
                                    setChecked((prev) => !prev);
                                clickHandler(t);
                            }}
                            isChecked={selectedType !== t ? true : false}
                        >
                            {t}
                        </TypeButtonBox>
                    );
                })}
            </ButtonWrapper>
            {focusTab === "Month" ? (
                <ButtonWrapper>
                    {weeks.map((t) => {
                        return <TypeMonButtonBox key={t}>{t}</TypeMonButtonBox>;
                    })}
                </ButtonWrapper>
            ) : null}
        </>
    );
};

export default TypeButton;
