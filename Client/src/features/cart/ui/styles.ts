import styled from "styled-components";

export const CartStyled = styled.aside`
	border-radius: 12rem;
	background: var(--color-white);
	padding: 24rem;
`;

export const CartPrimaryText = styled.strong`
	display: block;
	font-family: var(--font-family), sans-serif;
	font-weight: 700;
	font-size: 24rem;
	color: var(--color-red);
	margin-bottom: 40rem;
	text-align: left;
`;

export const CartSecondaryText = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 14rem;
	text-align: center;
	color: var(--color-rose-500);
	margin-top: 16rem;
`;

export const CartImage = styled.img`
	display: block;
	width: 128rem;
	height: 128rem;
	margin: 0 auto;
`;
