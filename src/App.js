import './App.css';
import React from 'react';
import { atom, RecoilRoot, selector, useRecoilValue, useSetRecoilState } from 'recoil';

const colordata = {
  RED: "RED",
  BLUE: "BLUE",
  YELLOW: "YELLOW",
  GREEN: "GREEN",
  PURPLE: "PURPLE"
};

const ColorState = atom({
  key: "colorState",
  default: [
      {
          id: 1,
          name: colordata.RED
      },
      {
          id: 2,
          name: colordata.BLUE
      },
      {
          id: 3,
          name: colordata.YELLOW
      },
      {
          id: 4,
          name: colordata.GREEN
      },
      {
          id: 5,
          name: colordata.PURPLE
      },
  ]
});

const ALL = "all";

const colorFilterState = atom ({
  key: "colorFilterState",
  default: ALL
})

const setcolorState = selector({
  key: "setcolorState",
  get: ({get}) => {
    const filter = get(colorFilterState);
    const color = get(ColorState);
    return color.filter(color => color.name === filter);
  }
});

const Colors = () => {
  const color = useRecoilValue(setcolorState);
  return (
    <div>
      <h1>Colors:</h1>
      {color.map(color => (
        <div key={color.id}>
          {color.name}
        </div>
      ))}
    </div>
  )
}

const ColorButton = () => {
  const setColorFilter = useSetRecoilState(colorFilterState);
  return (
    <div className='buttons'>
      <button onClick={() => setColorFilter(colordata.RED)}>RED</button>
      <button onClick={() => setColorFilter(colordata.BLUE)}>BLUE</button>
      <button onClick={() => setColorFilter(colordata.YELLOW)}>YELLOW</button>
      <button onClick={() => setColorFilter(colordata.GREEN)}>GREEN</button>
      <button onClick={() => setColorFilter(colordata.PURPLE)}>PURPLE</button>
    </div>
  );
};

function App() {
  return (
    <RecoilRoot>
      <div className='App'>
        <ColorButton />
        <Colors />
      </div>
    </RecoilRoot>
  );
};

export default App;
