import styled from 'styled-components'

const MenuContainer = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1450A3;
`

const Menu = styled.ul`
  display: flex;
  gap: 10px;
`

const MenuItem = styled.li`
    padding: 6px;
    border-radius: 8px;

    &:hover {
        background-color: rgba(25, 29, 136, .2);
        color: #001C30; 
        cursor: pointer;
    }
`

export default function Header() {
    return (
        <MenuContainer>
            <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>Planos</MenuItem>
                <MenuItem>Ajuda</MenuItem>
            </Menu>
        </MenuContainer>
    )
}