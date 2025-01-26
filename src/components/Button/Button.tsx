import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className: string;
  handleClick: () => void;
};
const Button = ({ handleClick, children, className }: ButtonProps) => (
  <button onClick={handleClick} className={className}>
    {children}
  </button>
);
export { Button };
