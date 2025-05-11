import Modal from './Modal.tsx';
import { BodyText, Subtitle } from '../../styles/typhography.ts';
import CartList from '../CartList.tsx';
import { CartListWrapper, CartModalHeader } from '../../styles/Cart.style.ts';
import TotalCart from '../../TotalCart.tsx';
import { ButtonPrimary } from '../button/button.style.ts';
import { useCartStore } from '../../store/cartStore.hook.tsx';
import { useModalControlStore } from '../../store/modalControlStore.hook.tsx';
import { useProductStore } from '../../store/productStore.hook.tsx';

interface CartModal {
  isOpen: boolean;
}

function CartModal({ isOpen }: CartModal) {
  const clearCart = useCartStore((state) => state.clearCart);
  const closeModal = useModalControlStore((state) => state.handleClose);
  const renderProduct = useProductStore((state) => state.initProduct);
  function handleClearOrder() {
    clearCart();
    closeModal();
    renderProduct();
  }
  return (
    <Modal isOpen={isOpen} showClose={false}>
      <CartModalHeader>
        <Subtitle marginBottom={'8px'}>Order Confirmed</Subtitle>
        <BodyText>We hope you enjoy your food!</BodyText>
      </CartModalHeader>
      <CartListWrapper>
        <CartList inSummary={true} withThumbnail={true} />
        <TotalCart />
      </CartListWrapper>
      <ButtonPrimary
        onClick={handleClearOrder}
        fullWidth={true}
        type={'primary'}
      >
        Start New Order
      </ButtonPrimary>
    </Modal>
  );
}

export default CartModal;
