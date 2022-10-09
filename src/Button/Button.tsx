import cn from "classnames";
import "./button.scss";

interface IProps {
  text: String;
  children?: React.ReactNode;
  className?: String;
}

function Button({ children, text, className }: IProps) {
  return (
    <button className={cn("button", { className })}>
      {children ? children : null}
      <span>{text}</span>
    </button>
  );
}

export default Button;
