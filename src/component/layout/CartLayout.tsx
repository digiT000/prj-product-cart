import { CartWrapper } from './CartLayout.style.ts';

interface CartLayoutProps {
  children: React.ReactNode;
}

function CartLayout({ children }: CartLayoutProps) {
  return <CartWrapper>{children}</CartWrapper>;
}

export default CartLayout;
