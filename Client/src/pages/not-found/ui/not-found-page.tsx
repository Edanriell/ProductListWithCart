import { FC } from "react";

import {
	NotFoundPageContent,
	NotFoundPageStyled,
	NotFoundPageText,
	NotFoundPageTitle
} from "./styles.ts";

export const NotFoundPage: FC = () => {
	return (
		<NotFoundPageStyled className="not-found-page">
			<NotFoundPageContent className="not-found">
				<NotFoundPageTitle className="not-found__title">404</NotFoundPageTitle>
				<NotFoundPageText className="not-found__text">
					Sorry, the page you are looking for does not exist.
				</NotFoundPageText>
				<a href="/" target="_parent">
					Go Back to Home
				</a>
			</NotFoundPageContent>
		</NotFoundPageStyled>
	);
};
