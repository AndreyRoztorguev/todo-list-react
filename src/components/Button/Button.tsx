import { ReactNode } from "react";

type ButtonProps = {
  name?: string;
  children: ReactNode;
  className?: string;
  handleClick: () => void;
};
const Button = ({ handleClick, children, className, name }: ButtonProps) => (
  <button aria-label={name} name={name} onClick={handleClick} className={className}>
    {children}
  </button>
);
export { Button };
