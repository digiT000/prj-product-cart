import {
  CartContent,
  CartDetailWrapper,
  CartItemWrapper,
  CartTitle,
  ContentWrapper,
  ImageThumbnail,
} from '../styles/Cart.style.ts';
import { BodyText } from '../styles/typhography.ts';
import { useTheme } from 'styled-components';
import { ButtonIcon } from './button/button.style.ts';
import CloseIcon from './IconSet/CloseIcon.tsx';
import { useCartStore } from '../store/cartStore.hook.tsx';
import { useProductStore } from '../store/productStore.hook.tsx';

interface CartItemProps {
  image: string;
  title: string;
  qty: number;
  price: number;
  inSummary: boolean;
  withThumbnail: boolean;
}

function CartItem({
  image,
  title,
  qty,
  price,
  withThumbnail,
  inSummary,
}: CartItemProps) {
  const theme = useTheme();
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const removeProduct = useProductStore((state) => state.removeProduct);
  const totalPrice = qty * price;

  return (
    <CartItemWrapper>
      <ContentWrapper>
        {withThumbnail && <ImageThumbnail src={image} />}
        <CartContent>
          <CartTitle>{title}</CartTitle>
          <CartDetailWrapper>
            <BodyText fontWeight={'600'} color={theme.colors.primary}>
              {qty}x
            </BodyText>
            <BodyText fontWeight={'400'} color={theme.colors.rose_500}>
              @ ${price}
            </BodyText>
            {inSummary ? null : (
              <BodyText fontWeight={'600'} color={theme.colors.rose_500}>
                ${totalPrice}
              </BodyText>
            )}
          </CartDetailWrapper>
        </CartContent>
      </ContentWrapper>

      <ButtonIcon
        onClick={() => {
          removeFromCart(title);
          removeProduct(title);
        }}
      >
        {inSummary ? (
          <BodyText fontWeight={'600'} color={theme.colors.rose_500}>
            ${totalPrice}
          </BodyText>
        ) : (
          <CloseIcon />
        )}
      </ButtonIcon>
    </CartItemWrapper>
  );
}

export default CartItem;
