import styled from "styled-components";

type CartProductListProps = {
	isOverflowing: boolean;
};

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

export const CartProductList = styled.ul<CartProductListProps>`
	position: relative;
	display: flex;
	flex-direction: column;
	row-gap: 16rem;
	overflow: auto;
	max-height: 238rem;
	padding-right: ${({ isOverflowing }) => (isOverflowing ? "24rem" : "0")};

	&::-webkit-scrollbar {
		width: 10rem;
	}

	&::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 999rem;
	}

	&::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 999rem;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;

export const CartProductListItem = styled.li`
	position: relative;
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
