import styled from "styled-components";

export const ProductRow = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

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
