import React, { useEffect, useState } from "react";
import { TabButton, TabLayout } from "./styles";
import { useRecoilValue, useRecoilState } from "recoil";
import { todoTabState } from "../../recoil/index";

const Tab = () => {
    const [tab, setTab] = useRecoilState(todoTabState);
    const tabs = ["Today", "Month"];

    const onClickTab = (index) => {
        if (index === 1) setTab("Month");
        else setTab("Today");
    };
    useEffect(() => {}, [tab]);
    return (
        <TabLayout>
            {tabs.map((t, index) => (
                <TabButton
                    key={index}
                    isChecked={t === tab}
                    onClick={() => onClickTab(index)}
                >
                    {tabs[index]}
                </TabButton>
            ))}
        </TabLayout>
    );
};

export default Tab;
