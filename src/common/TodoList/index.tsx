import { remove } from "mobx";
import React from "react";

type props = {
    todos: Map<number, string>,
    remove: (id: number) => void
}

function TodoList({todos, remove}: props) {

    return (
        <ul style={{listStyle: 'none'}}>
            {[...todos].map(([key, value]) => (
                <li key={key} style={{display: 'grid', gridTemplateColumns: '50px 1fr', gap: '20px', margin: '10px 0'}}>
                    <button onClick={() => {remove(key)}}>X</button>
                    {value}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;