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

export const CartContent = styled.div`
	position: relative;
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

export const Button = styled.button`
	border-radius: 999rem;
	background: var(--color-red);
	padding-top: 16rem;
	padding-bottom: 16rem;
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 16rem;
	color: var(--color-white);
	width: 100%;
	text-align: center;
	cursor: pointer;
`;

export const ProductListItem = styled.li`
	position: relative;
`;

export const ProductRow = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 16rem;

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		display: block;
		background: var(--color-rose-100);
		height: 1rem;
	}
`;

export const ProductRowContent = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 8rem;
`;

export const ProductName = styled.strong`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 14rem;
	color: var(--color-rose-900);
`;

export const ProductInfo = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 8rem;
`;

export const ProductCount = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 14rem;
	color: var(--color-red);
`;

export const ProductPrice = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 400;
	font-size: 14rem;
	color: var(--color-rose-500);
`;

export const ProductTotalPrice = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 14rem;
	color: var(--color-rose-500);
`;
