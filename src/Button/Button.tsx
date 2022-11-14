import { ButtonStyled } from "./ButtonStyled";

interface IProps {
	text: String;
	onClick: () => void,
	children?: React.ReactNode;
	className?: String;
}

function Button({ text, onClick, children }: IProps) {
	return (
		<ButtonStyled onClick={onClick} >
			{children ? children : null}
			<span>{text}</span>
		</ButtonStyled>
	);
}

export default Button;
