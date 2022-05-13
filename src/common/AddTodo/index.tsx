import React, { useState } from "react";

type props = {
    add: (arg: string) => void
}

function AddTodo({ add }: props) {
    const [todoTitle, setTodoTitle] = useState("");

    return (
        <div>
            <input type="text" name="todo" value={todoTitle}
                onChange={(e) => {
                    const element = e.currentTarget as HTMLInputElement
                    setTodoTitle(element.value);
                }}
            />
            <button onClick={() => {
                add(todoTitle);
                setTodoTitle("");
            }}>Add Todo</button>
        </div>
    );
}

export default AddTodo;
