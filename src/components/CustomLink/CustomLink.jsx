import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
export const CustomLink = forwardRef((props, ref) => {
  const { children, href, active, ...rest } = props
  return (
    <Link
      to={href}
      {...rest}
      className={rest.className + ' ' + (active ? 'active' : '')}
    >
      {children}
    </Link>
  )
})
