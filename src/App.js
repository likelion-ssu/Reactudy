import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { btnArrayState, colorState, selectedBtnState } from "./atom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  height: 500px;
  left: 300px;
  position: absolute;
  background-color: #bdc3c7;
  padding: 50px;
`;

const Select = styled.div`
  width: 700px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  width: 100px;
  height: 100px;
  border: none;
  &:hover {
    opacity: 0.3;
  }
  background-color: ${(props) => props.color};
`;

// const Red = styled(Btn)``;
// const Orange = styled(Btn)``;
// const Yellow = styled(Btn)``;
// const Green = styled(Btn)``;
// const Blue = styled(Btn)``;
// const Navy = styled(Btn)``;
// const Purple = styled(Btn)``;

const Result = styled.div`
  width: 700px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
`;

function App() {
  const [color, setColor] = useRecoilState(colorState);
  const btnArray = useRecoilValue(btnArrayState);
  const [selected, setSelected] = useRecoilState(selectedBtnState);

  const onClick = (event) => {
    setSelected();
    setColor(event.target.style.backgroundColor);
    console.log(event.target);
  };

  return (
    <Container>
      <Result bgColor={color} />
      <Select>
        {/* <Red style={{ backgroundColor: "#eb2f06" }} onClick={onClick} />
        <Orange style={{ backgroundColor: "#e67e22" }} onClick={onClick} />
        <Yellow style={{ backgroundColor: "#f1c40f" }} onClick={onClick} />
        <Green style={{ backgroundColor: "#2ecc71" }} onClick={onClick} />
        <Blue style={{ backgroundColor: "#0984e3" }} onClick={onClick} />
        <Navy style={{ backgroundColor: "#000080" }} onClick={onClick} />
        <Purple style={{ backgroundColor: "#6c5ce7" }} onClick={onClick} />

        <Orange color={colors.orange} onClick={onClick} />
        <Yellow color={colors.yellow} onClick={onClick} />
        <Green color={colors.green} onClick={onClick} />
        <Blue color={colors.blue} onClick={onClick} />
        <Navy color={colors.navy} onClick={onClick} />
        <Purple color={colors.purple} onClick={onClick} /> */}
        {btnArray.map((btn) => (
          <Btn key={btn.id} color={btn.bgColor} onClick={onClick} />
        ))}
      </Select>
    </Container>
  );
}

export default App;
