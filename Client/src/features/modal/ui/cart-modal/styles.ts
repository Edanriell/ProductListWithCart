import styled from "styled-components";

export const StyledCartModal = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	border-radius: 12rem 12rem 0 0;
	padding: 40px 24px 24px 24px;
	background: var(--color-white);
`;

export const CartModalHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const CartModalTitle = styled.h2`
	font-family: var(--font-family), sans-serif;
	font-weight: 700;
	font-size: 40rem;
	line-height: 120%;
	color: var(--color-rose-900);
	margin-top: 24rem;
	margin-bottom: 8rem;
	text-align: left;
`;

export const CartModalText = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 400;
	font-size: 16rem;
	color: var(--color-rose-500);
`;

export const CartModalContent = styled.div`
	position: relative;
	margin-top: 32rem;
	margin-bottom: 32rem;
	border-radius: 8rem;
	padding: 24rem;
	background: var(--color-rose-50);
`;

export const CartProductList = styled.ul`
	position: relative;
	display: flex;
	flex-direction: column;
	row-gap: 16rem;
`;

export const CartProductListItem = styled.li`
	position: relative;
`;

export const CartProduct = styled.div`
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

export const CartProductImage = styled.img`
	border-radius: 4rem;
	width: 48rem;
	height: 48rem;
	object-fit: cover;
`;

export const CartProductContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	flex: 1 1 auto;
`;

export const CartProductContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 8rem;
`;

export const CartProductName = styled.strong`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 14rem;
	color: var(--color-rose-900);
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	max-width: 153rem;
`;

export const CartProductInfo = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 8rem;
`;

export const CartProductCount = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 14rem;
	color: var(--color-red);
	min-width: 21rem;
`;

export const CartProductPrice = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 400;
	font-size: 14rem;
	color: var(--color-rose-500);
`;

export const CartProductTotalPrice = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 16rem;
	color: var(--color-rose-900);
`;

export const CartModalOrderTotal = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 24rem;
`;

export const CartModalOrderTotalText = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 400;
	font-size: 14rem;
	color: var(--color-rose-900);
`;

export const CartModalOrderTotalValue = styled.strong`
	font-family: var(--font-family), sans-serif;
	font-weight: 700;
	font-size: 24rem;
	color: var(--color-rose-900);
`;

export const CartModalFooter = styled.footer`
	position: relative;
`;
