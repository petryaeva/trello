import styled from 'styled-components';
import { COLORS } from '../styles/colors';
import { ITaskEditor } from './types';

export const TaskStyled = styled.article`
	background: white;
	border-radius: 3px;
	box-shadow: 0 1px 0 #091e4240;
	cursor: pointer;
	margin-bottom: 8px;
	max-width: 100%;
	min-height: 30px;
	padding: 5px;
	position: relative;
	color: ${COLORS.gray800};

	&:last-child {
		margin-bottom: 0;
	}

	&:hover {
		background: $white;
	}
`;

export const TaskEditor = styled.input<ITaskEditor>`
	width: calc(100% - 3px);
	max-width: 100%;
	overflow: hidden;
	overflow-wrap: break-word;
	height: 35px;
	position: absolute;
	top: 0;
	left: 0;
	border: none;
	visibility: ${({isEditTask}) => !isEditTask ? 'hidden' : 'visible'};
	background: ${({isEditTask}) => !isEditTask ? 'none' : '$white'};
`;
