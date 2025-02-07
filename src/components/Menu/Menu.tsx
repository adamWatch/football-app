import { StyledMenu, StyledNavItem } from './StyledMenu';

interface MenuProps {
    changeTab: React.Dispatch<React.SetStateAction<string>>;
}

export const Menu = (props: MenuProps) => {
    const { changeTab } = props;

    const handleClick = (tabName: string) => {
        changeTab(tabName);
    };
 
    return (
        <StyledMenu>
            <StyledNavItem onClick={() => handleClick('Player Base')}>Player Base</StyledNavItem>
            <StyledNavItem onClick={() => handleClick('Teams Base')}>Teams Base</StyledNavItem>
            <StyledNavItem onClick={() => handleClick('Match Base')}>Match Base</StyledNavItem>
            <StyledNavItem onClick={() => handleClick('Stats')}>Stats</StyledNavItem>
        </StyledMenu>
    );
};
