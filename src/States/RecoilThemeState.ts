import { atom } from "recoil";

export interface themeState {
  theme: string;
}

const initialState: themeState = {
  theme: "Pastel",
};

export const recoilThemeState = atom({
  key: "recoilThemeState",
  default: initialState,
});
