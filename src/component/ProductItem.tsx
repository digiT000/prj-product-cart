import { Product } from '../interface/interface.ts';
import {
  ProductCard,
  ProductCategory,
  ProductContent,
  ProductHeader,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from '../styles/Product.style.ts';

import CartButton from './CartButton.tsx';

function ProductItem(product: Product) {
  return (
    <ProductCard>
      <ProductHeader>
        <picture>
          <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
          <source media="(min-width: 768px)" srcSet={product.image.tablet} />
          <ProductImage
            src={product.image.mobile}
            alt={`Image - ${product.name}`}
          />
        </picture>
        <CartButton inCart={product.inCart} product={product} />
      </ProductHeader>
      <ProductContent>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>${product.price}</ProductPrice>
      </ProductContent>
    </ProductCard>
  );
}

export default ProductItem;
