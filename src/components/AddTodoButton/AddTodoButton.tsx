type AddTodoButtonProps = {
  disabled?: boolean;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const AddTodoButton = ({ disabled, type }: AddTodoButtonProps) => (
  <button
    disabled={disabled}
    type={type}
    className={`rounded-r-lg border border-blue-500 bg-blue-500 px-4 py-3 text-white hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-400 ${
      disabled && "opacity-70 bg-gray-400 hover:bg-gray-400 cursor-not-allowed border-gray-400"
    }`}>
    Add
  </button>
);

export { AddTodoButton };
