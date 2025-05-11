import { ProductWrapper } from '../../styles/Product.style.ts';
import { Title } from '../../styles/typhography.ts';
import ProductItem from '../ProductItem.tsx';
import { Product } from '../../interface/interface.ts';
import { useProductStore } from '../../store/productStore.hook.tsx';

function ProductSection() {
  const productList = useProductStore((state) => state.products);
  return (
    <div>
      <Title marginBottom={'24px'}>Dessert</Title>
      <ProductWrapper>
        {productList.map((product: Product, i) => (
          <ProductItem
            name={product.name}
            image={product.image}
            key={i}
            category={product.category}
            price={product.price}
            inCart={product.inCart}
          />
        ))}
      </ProductWrapper>
    </div>
  );
}

export default ProductSection;
