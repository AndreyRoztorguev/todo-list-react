import { useState } from "react";
import "./App.css";
import { AddTodoButton } from "./components/AddTodoButton/AddTodoButton";
import { EmptyListMessage } from "./components/EmptyListMessage/EmptyListMessage";
import { TodoInput } from "./components/TodoInput/TodoInput";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoListTitle } from "./components/TodoListTitle/TodoListTitle";
import type { Optional } from "./vite-env";

export type Todo = {
  id: string;
  value: string;
};

function App() {
  const [currentTodo, setCurrentTodo] = useState<Optional<Todo, "id">>({ value: "" });
  const [todos, setTodos] = useState<Required<Todo>[]>([
    { id: crypto.randomUUID(), value: "Learn Tailwind CSS" },
    { id: crypto.randomUUID(), value: "Build a Todo App" },
    { id: crypto.randomUUID(), value: "Explore React" },
  ]);

  function addTodoHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!currentTodo.value) return;
    if (currentTodo.id) {
      updateTodo({ id: currentTodo.id, value: currentTodo.value });
    } else {
      setTodos((prev) => [...prev, createNewTodo({ value: currentTodo.value })]);
    }
    setCurrentTodo({ value: "" });
  }
  function updateTodo(todo: { id: string; value: string }) {
    const oldTodo = todos.find((t) => t.id === todo.id);
    if (!oldTodo) return;
    oldTodo.value = todo.value;
    setCurrentTodo(todo);
  }
  function createNewTodo({ value }: { value: string }) {
    return { id: crypto.randomUUID(), value };
  }

  function deleteTodoHandler(id: string) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }
  function editTodoHandler(todo: { id: string; value: string }) {
    setCurrentTodo(todo);
  }

  function changeCurrentTodo(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentTodo((prev) => ({ ...prev, value: event.target.value }));
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <TodoListTitle title="Todo List" />
        <form onSubmit={addTodoHandler} className="mb-4 flex items-center">
          <TodoInput
            handleChange={changeCurrentTodo}
            value={currentTodo.value}
            placeholder="Add a new task"
          />
          <AddTodoButton type="submit" disabled={!currentTodo.value} />
        </form>
        <EmptyListMessage isEmpty={!todos.length} />
        <TodoList
          todos={todos}
          editTodoHandler={editTodoHandler}
          deleteTodoHandler={deleteTodoHandler}
        />
      </div>
    </div>
  );
}

export default App;
