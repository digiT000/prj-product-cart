import { styled } from 'styled-components';
import { typographyStyles } from './typhography.ts';

export const CartContainer = styled.div`
  min-width: 384px;
  min-height: 200px;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: 12px;
`;

export const CartListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`;

export const CartItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const CartContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CartDetailWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const CartTitle = styled.h4`
  font-size: ${typographyStyles.textPreset_4.fontSize};
  font-weight: ${typographyStyles.textPreset_4.fontWeight};
  line-height: ${typographyStyles.textPreset_4.lineHeight};
  color: ${(props) => props.theme.colors.rose_900};
`;

export const Cart = styled.p`
  font-size: ${typographyStyles.textPreset_4.fontSize};
  font-weight: ${typographyStyles.textPreset_4.fontWeight};
  line-height: 400;
  color: ${(props) => props.theme.colors.rose_900};
`;

export const TotalWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
`;

export const ImageThumbnail = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  object-fit: cover;
`;

export const CartListWrapper = styled.div`
  padding: 24px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.rose_50};
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const CartModalHeader = styled.div`
  display: flex;
  flex-direction: column;
`;
