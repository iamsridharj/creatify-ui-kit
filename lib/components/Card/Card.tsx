import { ReactNode } from "react";
import { styled } from "styled-components";
import StyledThemeProvider from "../../Theme/StyledThemeProvider";

const StyledCard = styled("article")`
  padding: 10px;
  min-width: 308px;
  min-height: 380px;
  border-radius: 10px;
  background-color: ${({theme}) => `${theme.colors.$blue10}`};
` 

interface CardProps {
  children: ReactNode
}


export function Card({children}: CardProps) {
  return (
    <StyledThemeProvider>
      <StyledCard>
        {children}
      </StyledCard>
    </StyledThemeProvider>
  )
}
