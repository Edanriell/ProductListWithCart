import { FC, Fragment, ReactNode } from "react";

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return <Fragment>{children}</Fragment>;
};
