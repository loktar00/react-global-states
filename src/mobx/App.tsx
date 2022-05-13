import React from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

import {todoState, add, remove} from './Store/TodoFunc';
import TodoList from '../common/TodoList';
import AddTodo from '../common/AddTodo';

const App = observer(() => {
    const { todoList } = todoState;


    return (
        <>
            <h1>Mobx List</h1>
            <AddTodo add={add} />
            <TodoList todos={toJS(todoList)} remove={remove}/>
        </>
    );
});

export default App;
