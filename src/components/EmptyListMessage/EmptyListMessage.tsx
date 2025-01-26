type EmptyListMessageProps = {
  isEmpty: boolean;
};

const EmptyListMessage = ({ isEmpty }: EmptyListMessageProps) => {
  if (!isEmpty) return null;

  return (
    <p className="rounded-lg bg-gray-100 p-4 text-center text-lg text-gray-600 shadow-md">
      You don't have any todo!
    </p>
  );
};

export { EmptyListMessage };
