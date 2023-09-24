import { styled } from "styled-components";

const StyledButton = styled("button")`
  color: white;
  background-color: blue;
`;
interface ButtonProps {

  primary?: boolean;

  size?: 'small' | 'medium' | 'large';

  label: string;

  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <StyledButton
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </StyledButton>
  );
};