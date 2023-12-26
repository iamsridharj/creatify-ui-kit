import React from 'react';
import { styled } from 'styled-components';
import StyledThemeProvider from '../../Theme/StyledThemeProvider';

const StyledImage = styled("img")`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50px;
    border: ${({ theme }) => `2px solid ${theme.colors.$borderColor}; `};
`

export const Avatar = () => {
  return (
    <StyledThemeProvider>
        <StyledImage src='https://image-service-sridhar.s3.us-east-1.amazonaws.com/1703618921140.jpeg' />
    </StyledThemeProvider>
  )
}
