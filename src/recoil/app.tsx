import React from 'react';
import { useRecoilState } from 'recoil';

import { todoState } from './Store/todos';
import TodoList from '../common/TodoList';
import AddTodo from '../common/AddTodo';

const App = () =>{
    const [todoListItems, setTodoListItems] = useRecoilState(todoState);

    const add = (title: string) => {
        setTodoListItems((oldTodoList) => [
            ...oldTodoList,
            {
                id: Date.now(),
                title,
            },
        ]);
    };

    const remove = (id: number) => {
        const filteredList = todoListItems.filter((todo) => todo.id !== id);
        setTodoListItems(filteredList);
    };

    const todoList = new Map(todoListItems.map(todo => [todo.id, todo.title]));

    return (
        <>
            <h1>Recoil List</h1>
            <AddTodo add={add} />
            <TodoList todos={todoList} remove={remove} />
        </>
    );
};

export default App;
