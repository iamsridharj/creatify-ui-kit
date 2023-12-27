import React, { HTMLAttributes } from 'react';
import StyledThemeProvider from '../../Theme/StyledThemeProvider';
import { styled } from 'styled-components';

type TabConfig = {
    icon?: React.ReactNode,
    title: string
    identifier: string
}

interface TabsProps {
    tabs: TabConfig[]
    onClick: ( identifier: string ) => void
    defaultActiveTab: string
    tabContainerProps?: HTMLAttributes<HTMLDivElement>,
    tabProps?:HTMLAttributes<HTMLButtonElement>
}

const StyledTab = styled("button")<{isActive: boolean}>`
    width: 8rem;
    height: 3rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    color: ${({ isActive, theme }) => isActive ? theme.colors.$white : theme.colors.$black};
    background-color: ${({theme, isActive}) => isActive ? theme.colors.$purple : theme.colors.$white };
`
const StyledTabContainer = styled("div")`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    border: ${({ theme }) => `2px solid ${theme.colors.$borderColor}; `};
    min-width: 0; /* Ensure the container can shrink */
    max-width: 100%; /* Allow it to take full width */
    width: fit-content; /* Adjust width based on content */

`

export const Tabs = ({tabs, onClick, defaultActiveTab, tabContainerProps, tabProps}: TabsProps) => {

    const [active, setActive] = React.useState("");

    React.useEffect(() => {
        setActive(defaultActiveTab)
    }, []);

    const handleOnclick = (identifier: string) => {
        if(onClick){
            onClick(identifier);
        }
        setActive(identifier)
    };

    return (
        <StyledThemeProvider>
            <StyledTabContainer {...tabContainerProps}>
                {tabs.map(tab => (
                    <StyledTab 
                    isActive={active === tab.identifier} 
                    onClick={() => handleOnclick(tab.identifier)} 
                    key={tab.identifier}
                    {...tabProps}
                    >
                        {tab.title}
                    </StyledTab>
                ))}
            </StyledTabContainer>
        </StyledThemeProvider>
    )
}
