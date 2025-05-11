import { styled } from 'styled-components';
import { typographyStyles } from './typhography.ts';

export const ProductWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProductHeader = styled.div``;
export const ProductImage = styled.img`
  position: relative;
  z-index: -1;
  margin-bottom: -22px;
  width: 100%;
  max-height: 240px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
`;
export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ProductTitle = styled.h2`
  font-size: ${typographyStyles.textPreset_3.fontSize};
  font-weight: ${typographyStyles.textPreset_3.fontWeight};
  line-height: ${typographyStyles.textPreset_3.lineHeight};
  color: ${({ theme }) => theme.colors.rose_900};
`;
export const ProductCategory = styled.p`
  font-size: ${typographyStyles.textPreset_4.fontSize};
  font-weight: ${typographyStyles.textPreset_4.fontWeight};
  line-height: ${typographyStyles.textPreset_4.lineHeight};
  color: ${({ theme }) => theme.colors.rose_500};
`;
export const ProductPrice = styled.h4`
  font-size: ${typographyStyles.textPreset_3.fontSize};
  font-weight: ${typographyStyles.textPreset_3.fontWeight};
  line-height: ${typographyStyles.textPreset_3.lineHeight};
  color: ${({ theme }) => theme.colors.primary};
`;
