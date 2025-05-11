import { styled } from 'styled-components';
import { typographyStyles } from '../../styles/typhography.ts';

interface ButtonType {
  type: 'primary' | 'secondary';
  margin?: string;
  fullWidth?: boolean;
}

export const ButtonPrimary = styled.button<ButtonType>`
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
  height: ${(props) => (props.type === 'primary' ? '50px' : '44px')};
  padding: 12px;
  background-color: ${(props) =>
    props.type === 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 999px;
    color:${(props) => (props.type === 'primary' ? props.theme.colors.white : props.theme.colors.primary)}
  font-size: ${typographyStyles.textPreset_4.fontSize};
  font-weight: 700;
  line-height: ${typographyStyles.textPreset_4.lineHeight};
  margin:${(props) => props.margin || '0'};
  transition: all 0.3s ease;
  color: ${(props) => (props.type === 'primary' ? props.theme.colors.white : props.theme.colors.black)};
  
  &:hover{
    background-color: ${(props) => (props.type === 'primary' ? '' : '#f8f7f7')};
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  width: 24px;
  height: 24px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const ButtonWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: fit-content;
  height: 44px;
  min-width: 160px;
  border-radius: 999px;
  color: ${(props) => props.theme.colors.white};

  gap: 8px;
  padding: 12px;
  background-color: ${(props) => props.theme.colors.primary};
`;

const IconWrapper = styled.div`
  display: inline-block;
  padding: 8px;
  background: #333;
  border-radius: 4px;
  transition: color 0.3s ease;

  svg {
    color: #ccc;
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: white;
  }
`;
