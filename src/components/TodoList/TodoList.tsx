import { Todo } from "../../App";
import { TodoItem } from "./TodoItem/TodoItem";

type TodoListProps = {
  todos: Todo[];
  editTodoHandler: (todo: Todo) => void;
  deleteTodoHandler: (id: Todo["id"]) => void;
};

const TodoList = ({ todos, deleteTodoHandler, editTodoHandler }: TodoListProps) => (
  <ul aria-label="todo-list" className="space-y-3">
    {todos.map((todo) => (
      <TodoItem
        todo={todo}
        key={todo.id}
        deleteTodoHandler={deleteTodoHandler}
        editTodoHandler={editTodoHandler}
      />
    ))}
  </ul>
);

export { TodoList };
