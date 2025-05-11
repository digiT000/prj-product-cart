import { styled } from 'styled-components';

export const CartWrapper = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 16px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px; /* Optional gap between the columns */
  @media (min-width: 1024px) {
    grid-template-columns: 1fr max-content;
    gap: 16px;
  }
`;
