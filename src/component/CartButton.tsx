import { ShoppingCart } from 'lucide-react';
import Button from './button/Button.tsx';
import { useCartStore } from '../store/cartStore.hook.tsx';
import { useTheme } from 'styled-components';
import { Product } from '../interface/interface.ts';
import { useProductStore } from '../store/productStore.hook.tsx';
import { ButtonIcon, ButtonWrapper } from './button/button.style.ts';
import { useMemo } from 'react';
import IncrementCart from './IconSet/IncrementCart.tsx';
import DecrementCart from './IconSet/DecrementCart.tsx';

interface CartButtonProps {
  inCart: boolean;
  product: Product;
}

function CartButton({ inCart, product }: CartButtonProps) {
  const theme = useTheme();
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const increment = useCartStore((state) => state.incrementCartItem);
  const decrement = useCartStore((state) => state.decrementCartItem);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const removeProduct = useProductStore((state) => state.removeProduct);

  const initialCart = useProductStore((state) => state.initialToCart);

  const qtyProduct = useMemo(
    () => (inCart ? cart?.find((item) => item.name === product.name)?.qty : 0),
    [cart]
  );

  return inCart ? (
    <ButtonWrapper>
      <ButtonIcon
        onClick={() => {
          if (cart.find((item) => item.name === product.name)?.qty === 1) {
            removeFromCart(product.name);
            removeProduct(product.name);
          }
          decrement(product);
        }}
      >
        <DecrementCart />
      </ButtonIcon>
      {qtyProduct}
      <ButtonIcon onClick={() => increment(product)}>
        <IncrementCart />
      </ButtonIcon>
    </ButtonWrapper>
  ) : (
    <Button
      onClick={() => {
        addToCart(product);
        initialCart(product.name);
      }}
      margin={'0 auto'}
      type={'secondary'}
    >
      <ShoppingCart color={theme.colors.primary} size={20} />
      Add to cart
    </Button>
  );
}

export default CartButton;
