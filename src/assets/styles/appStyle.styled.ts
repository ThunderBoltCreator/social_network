import styled from 'styled-components/macro'

const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;

  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
  grid-template-areas: 'h h' 'n c';
  grid-gap: 10px;
`

const AppContent = styled.div`
  grid-area: c;
  background-color: #4394b7;
`

export default {AppContent, AppWrapper}