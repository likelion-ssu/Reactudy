import { useRecoilState } from "recoil";
import Modal from "./Components/Modal";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { recoilColorState } from "./States/RecoilColorState";

const Page = styled.div<{ background: string }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  background-color: ${(props) => props.background};
`;

const TextBox = styled.div<{ name: string }>`
  font-size: 2rem;
  font-weight: 900;
  color: ${(props) =>
    props.name === "Black" ||
    props.name === "Purple" ||
    props.name === "Blue" ||
    props.name === "DeepGreen" ||
    props.name === "Violet"
      ? "white"
      : "black"};
`;

interface colorState {
  name: string;
  color: string;
}

function App() {
  const [recoilColor, setRecoilColor] = useRecoilState(recoilColorState);
  const defaultColor: colorState = { ...recoilColor };

  const [color, setColor] = useState(defaultColor.color);
  const [name, setName] = useState(defaultColor.name);

  useEffect(() => {
    const tmpColor = { ...recoilColor };
    console.log(tmpColor.name);
    setColor(tmpColor.color);
    setName(tmpColor.name);
  }, [recoilColor]);

  return (
    <Page background={color}>
      <TextBox name={name}>{name}</TextBox>
      <Modal />
    </Page>
  );
}

export default App;
