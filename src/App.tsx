import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import CartLayout from './component/layout/CartLayout.tsx';
import ProductSection from './component/section/ProductSection.tsx';
import CartSection from './component/section/CartSection.tsx';

function App() {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  return (
    <CartLayout>
      <ProductSection />
      <CartSection />
    </CartLayout>
  );
}

export default App;
