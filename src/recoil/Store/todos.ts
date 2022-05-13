import { atom } from "recoil";

const todoState = atom({
    key: 'todoState',
    default: new Map([[0, "test"]])
});

export { todoState };