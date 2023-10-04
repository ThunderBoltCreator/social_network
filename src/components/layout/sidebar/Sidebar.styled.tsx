import styled from 'styled-components/macro'

const Sidebar = styled.nav`
  grid-area: n;
  background-color: #3f8241;
  padding: 15px;

  a.active {
    color: #e6c140;
  }

  a:active {
    color: unset;
  }
`

export default {Sidebar}