import styled from "styled-components";

export const ProductRowStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	column-gap: 16rem;

	&::after {
		content: "";
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1rem;
		background: var(--color-rose-100);
	}
`;

export const ProductRowProductImage = styled.img`
	border-radius: 4rem;
	width: 48rem;
	height: 48rem;
	object-fit: cover;
`;

export const ProductRowContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	flex: 1 1 auto;
`;

export const ProductRowContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 8rem;
`;

export const ProductRowProductName = styled.strong`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 14rem;
	color: var(--color-rose-900);
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	max-width: 153rem;

	@media (width >= 768px) {
		text-overflow: unset;
		overflow: auto;
		white-space: unset;
		max-width: unset;
	}
`;

export const ProductRowProductInfo = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 8rem;
`;

export const ProductRowProductCount = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 14rem;
	color: var(--color-red);
	min-width: 21rem;
`;

export const ProductRowProductPrice = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 400;
	font-size: 14rem;
	color: var(--color-rose-500);
`;

export const ProductRowProductTotalPrice = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 16rem;
	color: var(--color-rose-900);
`;
