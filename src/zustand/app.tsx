import React from 'react';

import useStore from './Store/todo';
import TodoList from '../common/TodoList';
import AddTodo from '../common/AddTodo';

const App = () =>{
    const { todos, add, remove } = useStore();

    const todoList = new Map(todos.map(todo => [todo.id, todo.title]));

    return (
        <>
            <h1>Zustand List</h1>
            <AddTodo add={add} />
            <TodoList todos={todoList} remove={remove} />
        </>
    );
};

export default App;
