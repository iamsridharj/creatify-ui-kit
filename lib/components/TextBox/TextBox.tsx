import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";
import StyledThemeProvider from "../../Theme/StyledThemeProvider";

type variant = 'large' | 'small' | 'default';
const DEFAULT_SIZE: variant = 'default';

const getInputSize = (variant?: variant): string => {
    switch (variant) {
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

const StyledInput = styled("input")<{variant: variant, hasTransparentStyle: boolean}>`
    padding: 5px;
    box-shadow: ${({hasTransparentStyle}) => hasTransparentStyle ? "none" : `4px 4px`};
    border: ${({ theme, hasTransparentStyle }) => hasTransparentStyle ? "none" : `2px solid ${theme.colors.$borderColor}; `};
    ${({ variant }) => getInputSize(variant)}
    &:focus {
    outline: none;
  }

`

interface TextBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: variant;
    hasTransparentStyle: boolean
    placeholder?: string,
}

export const TextBox = ({variant = DEFAULT_SIZE, placeholder, hasTransparentStyle=false, ...props}: TextBoxProps) => {
  return (
    <StyledThemeProvider>
        <StyledInput {...props} variant={variant} hasTransparentStyle={hasTransparentStyle} placeholder={placeholder || "Search Anything"}/>
    </StyledThemeProvider>
  )
}