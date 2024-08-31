import { FC } from "react";

export const NotFoundPage: FC = () => {
	return (
		<main className="not-found-page">
			<section className="not-found">
				<h1 className="not-found__title">404</h1>
				<p className="not-found__text">Sorry, the page you are looking for does not exist.</p>
				<a href="/" target="_parent">
					Go Back to Home
				</a>
			</section>
		</main>
	);
};
