import { styled } from 'styled-components';
import StyledThemeProvider from '../../Theme/StyledThemeProvider';

const StyledImage = styled("img") <{ enableShadow: boolean }>`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50px;
    border: ${({ theme }) => `2px solid ${theme.colors.$borderColor}; `};
    box-shadow: ${({ enableShadow }) => enableShadow ? `2px 2px` : ''};
`

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  enableShadow?: boolean;
}

export const Avatar = ({ enableShadow = true, ...props }: AvatarProps) => {
  return (
    <StyledThemeProvider>
      <StyledImage enableShadow={enableShadow} {...props} />
    </StyledThemeProvider>
  )
}
