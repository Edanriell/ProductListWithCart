import styled from "styled-components";

export const HomePageStyled = styled.main`
	padding-left: 24rem;
	padding-right: 24rem;

	@media (width >= 768px) {
		padding-left: 40rem;
		padding-right: 40rem;
	}
`;

export const HomePageContent = styled.section`
	margin-top: 21rem;
	margin-bottom: 24rem;
	display: flex;
	flex-direction: column;
	row-gap: 32rem;

	@media (width >= 768px) {
		margin-top: 37rem;
		margin-bottom: 40rem;
	}
`;

export const HomePageMainContent = styled.div`
	position: relative;
`;

export const HomePageTitle = styled.h1`
	font-family: var(--font-family), sans-serif;
	font-weight: 700;
	font-size: 40rem;
	line-height: 120%;
	color: var(--color-rose-900);
	margin-bottom: 29rem;
`;

export const HomePageProductList = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 24rem;

	@media (width >= 768px) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(207px, 1fr));
		grid-template-rows: auto;
		column-gap: 24rem;
		row-gap: 32rem;
		align-items: center;
		justify-content: center;
	}
`;

export const HomePageProductListItem = styled.li`
	position: relative;
`;
