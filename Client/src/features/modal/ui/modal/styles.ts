import styled from "styled-components";

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
	background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	border-radius: 12rem 12rem 0 0;
	padding: 40px 24px 24px 24px;
	background: var(--color-white);
`;
