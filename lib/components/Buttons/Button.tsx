import { styled } from "styled-components";
import StyledThemeProvider from "../../Theme/StyledThemeProvider";
import { CustomTheme } from "../../Theme/theme";

type variantType = 'transparent' | 'success' | 'danger' | 'default';
type size = 'large' | 'small' | 'default'

const DEFAULT_VARIANT: variantType = 'default';
const DEFAULT_SIZE: size = 'default';

const getVariantBasedPrimaryColor = (variant: variantType, theme: CustomTheme, isHover?: boolean): string => {
  switch (variant) {
    case "success":
      return theme.colors.$green5;
    case "danger":
      return theme.colors.$red5;
    case "transparent":
      return isHover ? theme.colors.$black : "transparent";
    default:
      return theme.colors.$purple;
  }
};

const getVariantBasedTextColor = (variant: variantType, theme: CustomTheme): string => {
  switch (variant) {
    case "transparent":
      return theme.colors.$black;
    default:
      return theme.colors.$white;
  }
};

const getButtonSize = (size?: size): string => {
  switch (size) {
    case 'small':
      return `
        min-width: 4rem;
        min-height: 1.5rem;
        font-size: 0.8rem;
      `;
    case 'large':
      return `
        min-width: 8rem;
        min-height: 3rem;
        font-size: 1.1rem;
      `;
    default:
      return `
        min-width: 6rem;
        min-height: 2rem;
        font-size: 1rem;
      `;
  }
};

const StyledButton = styled.button<{ variant: variantType, size: size  }>`
  border-radius: 3px;
  cursor: pointer;
  border: ${({ theme }) => `2px solid ${theme.colors.$borderColor}; `};
  color: ${({ variant, theme }) => getVariantBasedTextColor(variant, theme as CustomTheme)};
  background-color: ${({ variant, theme }) => `${getVariantBasedPrimaryColor(variant, theme as CustomTheme)}`};
  ${({ size }) => getButtonSize(size)}
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: ${({ variant, theme }) => `${getVariantBasedPrimaryColor(variant, theme as CustomTheme, true)}`};
  }
`;

interface ButtonProps {
  size?: size;
  variant?: variantType;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  variant = DEFAULT_VARIANT,
  children,
  onClick: onButtonClick,
  size = DEFAULT_SIZE,
  ...props
}: ButtonProps) => {

  return (
    <StyledThemeProvider>
      <StyledButton
        type="button"
        variant={variant}
        onClick={onButtonClick}
        size={size}
        {...props}
      >
        {children}
      </StyledButton>
    </StyledThemeProvider>
  );
};
