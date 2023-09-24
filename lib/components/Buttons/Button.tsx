import { styled } from "styled-components";
import StyledThemeProvider from "../../Theme/StyledThemeProvider";
import { CustomTheme } from "../../Theme/theme";

type variantType = 'transparent' | 'success' | 'danger' | 'default'

const getVariantBasedColor = (variant: variantType, theme: CustomTheme ) => {
  switch(variant){
    case "success":
      return theme.colors.$green5;
    case "danger":
      return theme.colors.$red5;
    case "transparent":
      return "transparent";
    default:
      return theme.colors.$blue2
  }
}


const StyledButton = styled("button")<{ variant: variantType  }>`
  border: none;
  padding:15px;
  border-radius: 8px;
  cursor: pointer;
  color: ${({theme}) => theme.colors.$textColor};
  background-color: ${({variant, theme}) => `${getVariantBasedColor(variant, theme)}`};
`;


interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'transparent' | 'success' | 'danger' | 'default';
  label: string;
  onClick?: () => void;
}


export const Button = ({
  variant = "default",
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledThemeProvider>
      <StyledButton
        type="button"
        variant={variant}
        {...props}
      >
        {label}
      </StyledButton>
    </StyledThemeProvider>

  );
};