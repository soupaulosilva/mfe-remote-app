import styled from 'styled-components';

const SidebarContainer = styled.div`
    width: 260px;
    height: 100vh;
    background-color: #337CCF;
`

const SidebarList = styled.ul`
  list-style: none;
`

const SidebarListItem = styled.li`
    padding: 12px;
    &:hover {
        cursor: pointer;
        background-color: rgba(25, 29, 136, .2);
    }
`

export default function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarList>
                <SidebarListItem>Menu 1</SidebarListItem>
                <SidebarListItem>Menu 2</SidebarListItem>
                <SidebarListItem>Menu 3</SidebarListItem>
                <SidebarListItem>Menu 4</SidebarListItem>
                <SidebarListItem>Menu 5</SidebarListItem>
                <SidebarListItem>Menu 13</SidebarListItem>
            </SidebarList>
        </SidebarContainer>
    )
}