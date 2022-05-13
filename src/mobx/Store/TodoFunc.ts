import { observable, action } from "mobx"

const todoState = observable({ todoList: new Map([[0, "test"]]), todoIds: 1 })

const add = action((title:string) => {
    todoState.todoList.set(todoState.todoIds++, title);
});

const remove = action((id:number) => {
    todoState.todoList.delete(id);
});

export {todoState, add, remove};