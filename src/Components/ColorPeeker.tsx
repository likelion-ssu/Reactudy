import { Pastel, Neon, Retro } from "../Resources/Colors";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { recoilThemeState } from "../States/RecoilThemeState";
import { recoilColorState } from "../States/RecoilColorState";
import styled from "styled-components";

interface themeState {
  theme: string;
}

interface colorState {
  name: string;
  color: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const Pallete = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 0px;
`;

const ColorCircle = styled.li<{ background: string }>`
  list-style-type: none;
  padding: 0px;
  & > label {
    display: inline-block;
    background-color: ${(props) => props.background};
    width: 20px;
    height: 20px;
    border-radius: 100%;
    cursor: pointer;
    border: solid 2px white;
    transition: all 0.25s;
  }

  & > label:hover {
    transform: scale(1.15);
  }

  & > input {
    display: none;
  }
`;

export default function ColorPeeker() {
  const [recoilTheme, setRecoilTheme] = useRecoilState(recoilThemeState);
  const [recoilColor, setRecoilColor] = useRecoilState(recoilColorState);
  const defaultColor: colorState = { ...recoilColor };

  const pastelArray = Object.values(Pastel);
  const NeonArray = Object.values(Neon);
  const RetroArray = Object.values(Retro);
  const pastelNameArray = Object.keys(Pastel);
  const NeonNameArray = Object.keys(Neon);
  const RetroNameArray = Object.keys(Retro);

  const [themeState, setThemeState] = useState(pastelArray);
  const [colorState, setColorState] = useState(defaultColor.color);
  const [colorNameState, setColorNameState] = useState(defaultColor.name);

  useEffect(() => {
    const tmpState: themeState = { ...recoilTheme };
    switch (tmpState.theme) {
      case "Pastel":
        setThemeState(pastelArray);
        onColorChangeHandler(pastelArray[0], 0);
        break;
      case "Neon":
        setThemeState(NeonArray);
        onColorChangeHandler(NeonArray[0], 0);
        break;
      case "Retro":
        setThemeState(RetroArray);
        onColorChangeHandler(RetroArray[0], 0);
        break;
      default:
        break;
    }
  }, [recoilTheme]);

  const onColorChangeHandler = (color: string, index: number) => {
    setColorState(color);

    const tmpState: themeState = { ...recoilTheme };
    switch (tmpState.theme) {
      case "Pastel":
        setColorNameState(pastelNameArray[index]);
        break;
      case "Neon":
        setColorNameState(NeonNameArray[index]);
        break;
      case "Retro":
        setColorNameState(RetroNameArray[index]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const changedColor: colorState = {
      name: colorNameState,
      color: colorState,
    };
    setRecoilColor(changedColor);
  }, [colorState]);

  return (
    <Container>
      <Pallete>
        {themeState.map((color, index) => (
          <ColorCircle key={color} background={color}>
            <label htmlFor={color}></label>
            <input
              type="radio"
              id={color}
              checked={colorState === color}
              onChange={() => onColorChangeHandler(color, index)}
            />
          </ColorCircle>
        ))}
      </Pallete>
    </Container>
  );
}
