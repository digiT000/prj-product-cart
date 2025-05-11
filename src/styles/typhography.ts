import { styled } from 'styled-components';

export const typographyStyles = {
  textPreset_1: {
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '120%',
  },
  textPreset_2: {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '125%',
  },
  textPreset_3: {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '150%',
  },
  textPreset_4: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '150%',
  },
};

interface TyphographyProps {
  color?: string;
  fontWeight?: '400' | '500' | '600' | '700';
  marginBottom?: string;
}

export const Title = styled.h1<TyphographyProps>`
  font-size: ${typographyStyles.textPreset_1.fontSize};
  font-weight: ${typographyStyles.textPreset_1.fontWeight};
  line-height: ${typographyStyles.textPreset_1.lineHeight};
  color: ${(props) => props.color || props.theme.colors.black};
  margin-bottom: ${(props) => props.marginBottom || 0};
`;
export const Subtitle = styled.h2<TyphographyProps>`
  font-size: ${typographyStyles.textPreset_2.fontSize};
  font-weight: ${typographyStyles.textPreset_2.fontWeight};
  line-height: ${typographyStyles.textPreset_2.lineHeight};
  color: ${(props) => props.color || props.theme.colors.black};
  margin-bottom: ${(props) => props.marginBottom || 0};
`;

export const BodyText = styled.p<TyphographyProps>`
  font-size: ${typographyStyles.textPreset_4.fontSize};
  line-height: ${typographyStyles.textPreset_4.lineHeight};
  font-weight: ${(props) => props.fontWeight || '400'};
  color: ${(props) => props.color || props.theme.colors.black};
  margin-bottom: ${(props) => props.marginBottom || 0};
`;
