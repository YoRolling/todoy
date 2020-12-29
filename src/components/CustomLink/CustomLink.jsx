import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
export const CustomLink = forwardRef((props, ref) => {
  const { children, href, ...rest } = props
  return (
    <Link to={href} {...rest}>
      {children}
    </Link>
  )
})
