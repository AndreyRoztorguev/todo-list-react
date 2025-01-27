type TodoInputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};
const TodoInput = ({ handleChange, value, placeholder = "Add new task here" }: TodoInputProps) => (
  <input
    onChange={handleChange}
    value={value}
    type="text"
    placeholder={placeholder}
    className="flex-grow rounded-l-lg border border-gray-300 p-3 focus:border-none focus:outline-none focus:ring-1 focus:ring-blue-500"
  />
);

export { TodoInput };
