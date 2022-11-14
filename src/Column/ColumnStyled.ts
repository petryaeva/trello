import styled from 'styled-components';
import { COLORS } from '../styles/colors';
import { IColumnHeaderEditor } from './types';

export const ColumnStyled = styled.section`
	min-width: 270px;
	max-width: 270px;
	max-height: 100%;
	background: ${COLORS.gray50};
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	padding: 15px 20px;
	height: max-content;
	margin-right: 15px;

	&:last-child {
		margin-right: 0;
	}
`;

export const ColumnHeader = styled.div`
	height: 35px;
	width: 100%;
	position: relative;
	min-height: 30px;
	margin-bottom: 5px;

	h2 {
		font-size: 16px;
		margin: 0;
	}
`;

export const ColumnHeaderEditor = styled.input<IColumnHeaderEditor>`
	width: calc(100% - 3px);
	max-width: 100%;
	overflow: hidden;
	overflow-wrap: break-word;
	height: 25px;
	font-size: 16px;
	position: absolute;
	top: 0;
	left: 0;
	border: none;
	visibility: ${props => !props.isEditHeader ? 'hidden' : 'visible'};
	font-weight: bold;
	color: $gray800;

	&--visible {
		visibility: visible;
	}
`;

export const ColumnContent = styled.div`
	overflow: auto;
	margin-bottom: 15px;
	}
`;
