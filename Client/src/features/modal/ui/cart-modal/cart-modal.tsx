import { FC, useEffect, useRef, useState } from "react";

import { formatNumberToTwoDecimalPlaces } from "@entities/product/lib/functions";

import { Button } from "@shared/ui/button";
import { Icon, IconType } from "@shared/ui/icon";
import { useAppSelector } from "@shared/lib/hooks";

import {
	CartModalContent,
	CartModalFooter,
	CartModalHeader,
	CartModalOrderTotal,
	CartModalOrderTotalText,
	CartModalOrderTotalValue,
	CartModalText,
	CartModalTitle,
	CartProduct,
	CartProductContent,
	CartProductContentWrapper,
	CartProductCount,
	CartProductImage,
	CartProductInfo,
	CartProductList,
	CartProductListItem,
	CartProductName,
	CartProductPrice,
	CartProductTotalPrice,
	StyledCartModal
} from "./styles";

type CartModalProps = {
	onModalClose: () => void;
};

export const CartModal: FC<CartModalProps> = ({ onModalClose }) => {
	const cartProducts = useAppSelector((state) => state.cart.products);
	const orderTotal = useAppSelector((state) => state.cart.products).reduce(
		(accumulator, { count, price }) => accumulator + count * price,
		0
	);

	const [isCartProductListOverflowing, setIsCartProductListOverflowing] = useState<boolean>(false);
	const cartProductListRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (cartProductListRef.current) {
			const hasOverflow =
				cartProductListRef.current.scrollHeight > cartProductListRef.current.clientHeight;
			setIsCartProductListOverflowing(hasOverflow);
		}
	}, []);

	const renderCartProducts = () => {
		return cartProducts.map(({ imageUrl, name, price, count, id }, index) => (
			<CartProductListItem key={id}>
				<CartProduct
					style={{ paddingBottom: cartProducts.length - 1 === index ? "24rem" : "16rem" }}
				>
					<CartProductImage src={imageUrl} alt={"Image of " + name} />
					<CartProductContent>
						<CartProductContentWrapper>
							<CartProductName>{name}</CartProductName>
							<CartProductInfo>
								<CartProductCount>{count}x</CartProductCount>
								<CartProductPrice>@ {formatNumberToTwoDecimalPlaces(price)}</CartProductPrice>
							</CartProductInfo>
						</CartProductContentWrapper>
						<CartProductTotalPrice>
							${formatNumberToTwoDecimalPlaces(count * price)}
						</CartProductTotalPrice>
					</CartProductContent>
				</CartProduct>
			</CartProductListItem>
		));
	};

	return (
		<StyledCartModal>
			<CartModalHeader>
				<Icon iconType={IconType.Checkmark} />
				<CartModalTitle>Order Confirmed</CartModalTitle>
				<CartModalText>We hope you enjoy your food!</CartModalText>
			</CartModalHeader>
			<CartModalContent>
				<CartProductList ref={cartProductListRef} isOverflowing={isCartProductListOverflowing}>
					{renderCartProducts()}
				</CartProductList>
				<CartModalOrderTotal>
					<CartModalOrderTotalText>Order Total</CartModalOrderTotalText>
					<CartModalOrderTotalValue>
						${formatNumberToTwoDecimalPlaces(orderTotal)}
					</CartModalOrderTotalValue>
				</CartModalOrderTotal>
			</CartModalContent>
			<CartModalFooter>
				<Button onClick={onModalClose}>Start New Order</Button>
			</CartModalFooter>
		</StyledCartModal>
	);
};
