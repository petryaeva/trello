import styled from 'styled-components';
import { COLORS } from '../styles/colors';

export const ButtonStyled = styled.button`
	display: flex;
	border: none;
	font-size: 16px;
	cursor: pointer;
	color: ${COLORS.gray800};
	padding: 10px;
	background: ${COLORS.$gray50};
	height: min-content;
	border-radius: 4px;

	&:hover {
		background: rgba(236, 239, 241, .7);
	}

	.btn-icon {
		margin-right: 5px;
	}
`;
