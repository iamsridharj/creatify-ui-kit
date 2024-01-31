import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";
import StyledThemeProvider from "../../Theme/StyledThemeProvider";

type Variant = 'large' | 'small' | 'default';
const DEFAULT_SIZE: Variant = 'default';

const getInputSize = (variant?: Variant): string => {
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

const StyledTextArea = styled("textarea") <{ variant: Variant; hasTransparentStyle: boolean }>`
    padding: 5px;
    box-shadow: ${({ hasTransparentStyle }) => hasTransparentStyle ? "none" : `4px 4px`};
    border: ${({ theme, hasTransparentStyle }) => hasTransparentStyle ? "none" : `2px solid ${theme.colors.$borderColor}; `};
    ${({ variant }) => getInputSize(variant)}
    &:focus {
      outline: none;
      &::placeholder {
        color: transparent;
      }
    }
`

interface TextBoxProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  variant?: Variant;
  hasTransparentStyle?: boolean
  placeholder?: string;
  enableShadow?: boolean;
}

export const TextArea = ({ variant = DEFAULT_SIZE, placeholder, hasTransparentStyle = false, enableShadow = false, ...props }: TextBoxProps) => {
  return (
    <StyledThemeProvider>
      <StyledTextArea
        variant={variant}
        hasTransparentStyle={hasTransparentStyle}
        placeholder={placeholder || "Search Anything"}
        {...props}
      />
    </StyledThemeProvider>
  )
}