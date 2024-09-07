import styled from "styled-components";

export const ProductImageWrapper = styled.div`
	position: relative;
	width: 100%;
	max-height: 212rem;

	@media (width >= 1440px) {
		max-height: 240px;
	}
`;

export const ProductContent = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 4rem;
`;

export const ProductType = styled.h2`
	font-family: var(--font-family), sans-serif;
	font-weight: 400;
	font-size: 14rem;
	color: var(--color-rose-500);
`;

export const ProductName = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 16rem;
	color: var(--color-rose-900);
`;

export const ProductPrice = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 16rem;
	color: var(--color-red);
`;
