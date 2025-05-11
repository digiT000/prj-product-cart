import { Fragment } from 'react';
import { useCartStore } from '../store/cartStore.hook.tsx';
import CartItem from './CartItem.tsx';
import { FlexContainer, Separtor } from '../styles/general.style.ts';

interface CartListProps {
  inSummary: boolean;
  withThumbnail: boolean;
}

function CartList({ inSummary, withThumbnail }: CartListProps) {
  const cart = useCartStore((state) => state.cart);
  return (
    <FlexContainer align={'start'} gap={16}>
      {cart.map((item, i) => (
        <Fragment key={i}>
          <CartItem
            title={item.name}
            qty={item.qty}
            price={item.price}
            inSummary={inSummary}
            withThumbnail={withThumbnail}
            image={item.image.thumbnail}
          />
          <Separtor key={i} />
        </Fragment>
      ))}
    </FlexContainer>
  );
}

export default CartList;
