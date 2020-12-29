import React from 'react'
import styled from 'styled-components'
const Frame = styled.div`
  display: ${(props) => (props.flex ? 'flex' : 'block')};
`
export function Content({ children, className = '', ...props }) {
  return (
    <Frame className={className} {...props}>
      {children}
    </Frame>
  )
}
