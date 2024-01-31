import { HtmlHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import StyledThemeProvider from '../../Theme/StyledThemeProvider';

const StyledImage = styled("img") <{ enableShadow: boolean }>`
  max-width: 100%;
  height: auto;
  border: ${({ theme }) => `2px solid ${theme.colors.$borderColor}; `};
  box-shadow: ${({ enableShadow }) => enableShadow ? `4px 4px` : ''};
`;

interface ImageProps extends HtmlHTMLAttributes<HTMLImageElement> {
  imageUrl: string
  enableShadow?: boolean;
}

export const Image = ({ imageUrl = "https://image-service-sridhar.s3.us-east-1.amazonaws.com/1703618921140.jpeg", enableShadow = false, ...props }: ImageProps) => {
  return (
    <StyledThemeProvider>
      <StyledImage enableShadow={enableShadow} src={imageUrl} {...props} />
    </StyledThemeProvider>
  )
}
