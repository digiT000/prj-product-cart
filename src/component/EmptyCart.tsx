import { FlexContainer } from '../styles/general.style.ts';
import { BodyText } from '../styles/typhography.ts';
import { useTheme } from 'styled-components';

function EmptyCart() {
  const theme = useTheme();
  return (
    <FlexContainer gap={8} align={'center'}>
      <img
        src={'./assets/images/illustration-empty-cart.svg'}
        style={{ width: '128px', height: '128px' }}
      />
      <BodyText fontWeight={'600'} color={theme.colors.rose_500}>
        Your added items will appear here
      </BodyText>
    </FlexContainer>
  );
}

export default EmptyCart;
