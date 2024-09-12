import styled from "styled-components";

export const CartStyled = styled.aside`
	border-radius: 12rem;
	background: var(--color-white);
	padding: 24rem 24rem 40rem 24rem;
	box-sizing: border-box;

	@media (width >= 1440px) {
		grid-column: 2 / 3;
		align-self: start;
	}
`;

export const CartPrimaryText = styled.strong`
	display: block;
	font-family: var(--font-family), sans-serif;
	font-weight: 700;
	font-size: 24rem;
	color: var(--color-red);
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

export const ProductList = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 16rem;
`;

export const OrderTotal = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 24rem;
`;

export const OrderTotalText = styled.div`
	font-family: var(--font-family), sans-serif;
	font-weight: 400;
	font-size: 14rem;
	color: var(--color-rose-900);
`;

export const OrderTotalValue = styled.strong`
	font-family: var(--font-family), sans-serif;
	font-weight: 700;
	font-size: 24rem;
	color: var(--color-rose-900);
`;

export const CartBanner = styled.div`
	border-radius: 8rem;
	background: var(--color-rose-50);
	padding-top: 16rem;
	padding-bottom: 16rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	column-gap: 8rem;
	margin-top: 24rem;
	margin-bottom: 24rem;
`;

export const CartBannerText = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 400;
	font-size: 14rem;
	color: var(--color-rose-900);
`;

export const CartBannerTextBold = styled.b`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 14rem;
	color: var(--color-rose-900);
`;
