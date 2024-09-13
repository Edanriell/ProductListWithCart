import styled from "styled-components";

export const NotFoundPageStyled = styled.main`
	position: relative;
	width: 100%;
	height: 100vh;
	padding-left: 24rem;
	padding-right: 24rem;
`;

export const NotFoundPageContent = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const NotFoundPageTitle = styled.h1`
	font-family: var(--font-family), sans-serif;
	font-weight: 700;
	font-size: 64rem;
	line-height: 120%;
	color: var(--color-rose-900);
	margin-bottom: 14rem;
`;

export const NotFoundPageText = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 300;
	font-size: 26rem;
	line-height: 120%;
	color: var(--color-rose-900);
	margin-bottom: 28rem;
	text-align: center;
`;
