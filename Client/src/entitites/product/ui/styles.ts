import styled from "styled-components";

export const ProductStyled = styled.article`
	position: relative;
`;

export const ProductImageWrapper = styled.div`
	position: relative;
	border-radius: 8rem;
	width: 100%;
	max-height: 212rem;
`;

export const ProductImage = styled.img`
	object-fit: cover;
	width: 100%;
	max-height: 212rem;
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

export const Button = styled.button`
	border: 1rem solid var(--color-rose-400);
	border-radius: 999rem;
	max-width: 160rem;
	background: var(--color-white);
	box-sizing: border-box;
	padding: 28rem 12.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	column-gap: 8rem;
`;

export const ButtonText = styled.span`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 14rem;
	color: var(--color-rose-900);
`;
