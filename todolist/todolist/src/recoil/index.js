import { atom, selector } from "recoil";

export function makeTodo(id, content, isToday, type, isDone) {
    return {
        id: id,
        content: content,
        isToday: isToday,
        type: type,
        isDone: isDone,
    };
}

export const todoState = atom({
    key: "todoState",
    default: Object.freeze([]),
});

export const todaySelector = selector({
    key: "todaySelector",
    get: ({ get }) => {
        const todos = get(todoState);
        const todays = todos.filter((v) => v.isToday);
        return todays;
    },
    set: ({ set }, newValue) => {
        set(todoState, newValue);
    },
});

export const weekSelector = selector({
    key: "weekSelector",
    get: ({ get }) => {
        const todos = get(todoState);
        const weeks = todos.filter((v) => !v.isToday);
        return weeks;
    },
    set: ({ set }, newValue) => {
        set(todoState, newValue);
    },
});

export const todoTabState = atom({
    key: "todoTabState",
    default: "Today",
});
