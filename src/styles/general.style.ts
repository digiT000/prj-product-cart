import { styled } from 'styled-components';

interface FlexProp {
  gap?: number;
  direction?: 'column' | 'row';
  align?: 'start' | 'center';
}

export const FlexContainer = styled.div<FlexProp>`
  display: flex;
  gap: ${(props) => props.gap || 0}px;
  flex-direction: ${(props) => props.direction || 'column'};
  align-items: ${(props) => props.align};
`;

export const Separtor = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${(props) => props.theme.colors.rose_100};
`;
