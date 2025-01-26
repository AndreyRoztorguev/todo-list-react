import { FaEdit, FaTrash } from "react-icons/fa";
import type { Todo } from "../../../App";
import { Button } from "../../Button/Button";

type TodoItemProps = {
  todo: Todo;
  editTodoHandler: (todo: Todo) => void;
  deleteTodoHandler: (id: Todo["id"]) => void;
};

const TodoItem = ({ todo, editTodoHandler, deleteTodoHandler }: TodoItemProps) => (
  <li className="flex items-center justify-between rounded-lg bg-gray-100 p-3 shadow-sm">
    <span className="text-gray-800">{todo.value}</span>
    <div>
      <Button
        handleClick={() => editTodoHandler({ ...todo })}
        className="w-5 text-blue-500 hover:text-blue-600 focus:outline-none">
        <FaEdit />
      </Button>
      <Button
        className="w-4 text-red-500 hover:text-red-600 focus:outline-none"
        handleClick={() => deleteTodoHandler(todo.id)}>
        <FaTrash />
      </Button>
    </div>
  </li>
);

export { TodoItem };
