import React  from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <ButtonContainer>
        <Redbutton/>
        <Bluebutton/>
      </ButtonContainer>
      <box></box>
    </RecoilRoot>
  );
}
const ButtonContainer = styled.div`
  margin-top: 50px;
  width: 700px;
  display: block;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 5px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Redbutton = styled(Button)`
  background: red;
`;
console.log(Redbutton);
const Bluebutton = styled(Button)`
  background: blue;
`;

const box = styled.div`
padding:20px,
position:left,
color:black
 `
// export const changeColor = atom({
//   key:'changeColor',
//   default: 0,
// });


// function changeColor({
//   const [click,setColor] = useRecoilState(changeColor);
// })

// const change = selector({
//   key:'change',
//   get:({get}) => {
//       const color: get(changeColor);
//       return box.color.black;
//   },
// });
 
export default App;
