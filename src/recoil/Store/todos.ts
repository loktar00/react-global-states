import { atom } from "recoil";

const todoState = atom({
    key: 'todoState',
    default: [{id: 0, title: 'test'}]
});

export { todoState };