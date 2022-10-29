import cn from "classnames";
import "./button.scss";

interface IProps {
  text: String;
  onClick: () => void,
  children?: React.ReactNode;
  className?: String;
}

function Button({ text, onClick, children, className }: IProps) {
  return (
    <button className={cn('button', { className })} onClick={onClick} >
      {children ? children : null}
      <span>{text}</span>
    </button>
  );
}

export default Button;
