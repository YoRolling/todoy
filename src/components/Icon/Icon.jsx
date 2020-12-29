import React from 'react'
import styled from 'styled-components'
const IconFrame = styled.i`
  color: ${(props) => props.color || 'black'};
  vertical-align: bottom;
`
export function Icon({ name, size, ...rest }) {
  return (
    <IconFrame className={[`ri-${name}`, `ri-${size || 'fw'}`]} {...rest} />
  )
}
