import { makeObservable, observable, action, autorun } from "mobx"

class Todos {
    todoIds;
    todoList = new Map([[0, "test"]]);

    constructor() {
        makeObservable(this, {
            todoList: observable,
            add: action.bound,
            remove: action.bound
        });
        this.todoIds = 1;
    }

    add(title:string) {
        this.todoList.set(this.todoIds++, title);
    }

    remove(id:number) {
        this.todoList.delete(id);
    }

}

const todos = new Todos();
export default todos;
