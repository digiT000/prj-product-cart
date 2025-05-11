import { CartContainer } from '../../styles/Cart.style.ts';
import { Subtitle } from '../../styles/typhography.ts';
import { useTheme } from 'styled-components';
import { useCartStore } from '../../store/cartStore.hook.tsx';
import EmptyCart from '../EmptyCart.tsx';
import CartList from '../CartList.tsx';
import { lazy, useMemo } from 'react';
import { ButtonPrimary } from '../button/button.style.ts';

import { useModalControlStore } from '../../store/modalControlStore.hook.tsx';
import TotalCart from '../../TotalCart.tsx';
const CartModal = lazy(() => import('../modal/CartModal.tsx'));

function CartSection() {
  const handleOpen = useModalControlStore((state) => state.handleOpen);
  const activeModal = useModalControlStore((state) => state.activeModal);
  const isOpen = useMemo(() => activeModal === 'cartSuccess', [activeModal]);
  const cart = useCartStore((state) => state.cart);
  const theme = useTheme();

  return (
    <CartContainer>
      <Subtitle marginBottom={'24px'} color={theme.colors.primary}>
        Your Cart ({cart.length})
      </Subtitle>

      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <CartList withThumbnail={false} inSummary={false} />
          <TotalCart />
          <ButtonPrimary
            onClick={() => handleOpen('cartSuccess')}
            fullWidth={true}
            type={'primary'}
          >
            Confirm Order
          </ButtonPrimary>
          {isOpen && <CartModal isOpen={isOpen} />}
        </>
      )}
    </CartContainer>
  );
}

export default CartSection;
