import { FC } from "react";

import { MainLayout } from "@widgets/layouts/main/ui";

export const HomePage: FC = () => {
	return (
		<MainLayout>
			<main>
				<section>
					<div>
						<h1>Desserts</h1>
						<ul>
							<li>
								<article>
									<div>
										<picture>
											<img
												src="/images/raster/products/waffle-with-berries.jpg"
												alt="Waffle with Berries"
											/>
										</picture>
										<button type="button">
											<svg
												width="21"
												height="20"
												viewBox="0 0 21 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g clip-path="url(#clip0_1_448)">
													<path
														d="M6.75 18.75C7.44036 18.75 8 18.1904 8 17.5C8 16.8096 7.44036 16.25 6.75 16.25C6.05964 16.25 5.5 16.8096 5.5 17.5C5.5 18.1904 6.05964 18.75 6.75 18.75Z"
														fill="#C73B0F"
													/>
													<path
														d="M15.5 18.75C16.1904 18.75 16.75 18.1904 16.75 17.5C16.75 16.8096 16.1904 16.25 15.5 16.25C14.8096 16.25 14.25 16.8096 14.25 17.5C14.25 18.1904 14.8096 18.75 15.5 18.75Z"
														fill="#C73B0F"
													/>
													<path
														d="M3.6125 1.7525C3.58419 1.61087 3.5077 1.48341 3.39604 1.3918C3.28438 1.3002 3.14443 1.25009 3 1.25H0.5V2.5H2.4875L4.8875 14.4975C4.91581 14.6391 4.9923 14.7666 5.10396 14.8582C5.21562 14.9498 5.35557 14.9999 5.5 15H16.75V13.75H6.0125L5.5125 11.25H16.75C16.8922 11.25 17.0301 11.2015 17.141 11.1125C17.2519 11.0235 17.3291 10.8994 17.36 10.7606L18.7775 4.375H17.4981L16.2487 10H5.2625L3.6125 1.7525Z"
														fill="#C73B0F"
													/>
													<path
														d="M11.75 3.75V1.25H10.5V3.75H8V5H10.5V7.5H11.75V5H14.25V3.75H11.75Z"
														fill="#C73B0F"
													/>
												</g>
												<defs>
													<clipPath id="clip0_1_448">
														<rect width="20" height="20" fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
											<span>Add to Cart</span>
										</button>
									</div>
									<h2>Waffle</h2>
									<p>Waffle with Berries</p>
									<p>$6.50</p>
								</article>
							</li>
						</ul>
					</div>
					<div>
						<p>
							Your Cart <span>(0)</span>
						</p>
						<picture>
							<img
								src="/images/raster/products/waffle-with-berries.jpg"
								alt="Waffle with Berries"
							/>
						</picture>
						<p>Your added items will appear here</p>
					</div>
				</section>
			</main>
		</MainLayout>
	);
};
