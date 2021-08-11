import styled from 'styled-components'
import InnerIcon from 'reamix'
const StyledIcon = styled(InnerIcon)`
  vertical-align: bottom;
`
console.log(StyledIcon)
export default function Icon(props) {
  return <StyledIcon {...props} useStyle={{ verticalAlign: 'bottom' }} />
}
