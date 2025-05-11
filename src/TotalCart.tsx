import { TotalWrapper } from './styles/Cart.style.ts';
import { BodyText, Subtitle } from './styles/typhography.ts';
import { useTheme } from 'styled-components';
import { useCartStore } from './store/cartStore.hook.tsx';

function TotalCart() {
  const theme = useTheme();
  const getTotal = useCartStore((state) => state.getTotal);

  return (
    <TotalWrapper>
      <BodyText>Order Total</BodyText>
      <Subtitle color={theme.colors.black}>{getTotal()}</Subtitle>
    </TotalWrapper>
  );
}

export default TotalCart;
