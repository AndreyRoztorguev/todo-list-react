type TodoListTitleProps = {
  title: string;
};

const TodoListTitle = ({ title }: TodoListTitleProps) => (
  <h1 className="mb-4 text-center text-2xl font-bold text-gray-800">{title}</h1>
);

export { TodoListTitle };
