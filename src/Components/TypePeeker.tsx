import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { recoilThemeState } from "../States/RecoilThemeState";
import styled from "styled-components";

const TypePeekBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`;

const TypeButton = styled.button`
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.25s;
  font-size: 1.2rem;

  &:hover {
    background: rgba(223, 223, 223, 0.7);
  }
`;

interface themeState {
  theme: string;
}

export default function TypePeeker() {
  const [recoilInfo, setRecoilInfo] = useRecoilState(recoilThemeState);
  const defaultState: themeState = { ...recoilInfo };

  const themes = ["Pastel", "Neon", "Retro"];
  const [selected, setSelected] = useState(defaultState.theme);

  const selectThemeHandler = (value: string) => {
    setSelected(value);
  };

  useEffect(() => {
    const selectedThemeState: themeState = { theme: selected };
    setRecoilInfo(selectedThemeState);
  }, [selected]);

  return (
    <TypePeekBox>
      {themes.map((theme) => (
        <TypeButton key={theme} onClick={() => selectThemeHandler(theme)}>
          {theme}
        </TypeButton>
      ))}
    </TypePeekBox>
  );
}
