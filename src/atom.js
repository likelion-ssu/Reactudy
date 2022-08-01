import { atom } from "recoil";
import { colors } from "./colors";

export const btnListState = atom({
  key: "btnList",
  default: [],
});

export const colorState = atom({
  key: "bgColor",
  default: "",
});

export const selectedBtnState = atom({
  key: "selected",
  default: "#bdc3c7",
});

export const btnArrayState = atom({
  key: "btnArray",
  default: [
    { id: "red", bgColor: colors.red },
    { id: "orange", bgColor: colors.orange },
    { id: "yellow", bgColor: colors.yellow },
    { id: "green", bgColor: colors.green },
    { id: "blue", bgColor: colors.blue },
    { id: "navy", bgColor: colors.navy },
    { id: "purple", bgColor: colors.purple },
  ],
});
