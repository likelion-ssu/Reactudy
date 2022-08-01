import { atom } from "recoil";

export interface colorState {
  name: string;
  color: string;
}

const initialState: colorState = {
  name: "SkyBlue",
  color: "#ABC9FF",
};

export const recoilColorState = atom({
  key: "recoilColorState",
  default: initialState,
});
