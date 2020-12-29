import React from 'react'
import styled from 'styled-components'
const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`

export function AppFrame(props) {
  return <Page>{props.children}</Page>
}
