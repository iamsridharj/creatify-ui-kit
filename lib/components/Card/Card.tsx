import { HTMLAttributes, ReactNode } from "react";
import { styled } from "styled-components";
import StyledThemeProvider from "../../Theme/StyledThemeProvider";

const StyledCard = styled("section")<{ enableShadow: boolean  }>`
  display: flex;
  flex-direction: column;
  min-width: 308px;
  min-height: 380px;
  box-shadow: ${({enableShadow}) => enableShadow ? `4px 4px` : ''};
  border: ${({ theme }) => `2px solid ${theme.colors.$borderColor}; `};
` 

interface CardProps {
  children: ReactNode,
  enableShadow?: boolean
}

const Header = styled("header")``;

const Content = styled("div")`
  padding: 10px;
  flex-grow: 1;
`;

const Footer = styled("aside")``;

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  headerContent?: ReactNode;
  bodyContent: ReactNode;
  footerContent?: ReactNode;
  enableShadow?: boolean;
}



export function Card({bodyContent, headerContent, footerContent, enableShadow = false, ...props}: CardProps) {
  return (
    <StyledThemeProvider>
        <StyledCard {...props} enableShadow={enableShadow}>
          {headerContent && <Header>{headerContent}</Header>}
          <Content>{bodyContent}</Content>
          {footerContent && <Footer>{footerContent}</Footer>}
        </StyledCard>
    </StyledThemeProvider>
  )
}
