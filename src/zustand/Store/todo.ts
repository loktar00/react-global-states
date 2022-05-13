import create from 'zustand'

type Todo = {
    id: number,
    title: string
}

interface TodoState {
    todos: Array<Todo>;
    id: number;
    add: (description: string) => void;
    remove: (id: number) => void;
  }

const useStore = create<TodoState>(set => ({
    todos: [{ id: 0, title: 'test' }],
    id: 1,
    add: (todo: string) =>
        set((state: {id: number, todos: Array<{id: number, title: string}>}) =>
            ({ todos: [...state.todos, ...[{ id: state.id, title: todo }]], id: state.id + 1 })),
    remove: (id: number) =>
        set((state: {id: number, todos: Array<Todo>}) =>
            ({ todos: state.todos.filter((todo) => todo.id !== id) }))
}));

export default useStore;