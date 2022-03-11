import { forwardRef } from 'react'
import { Link, useResolvedPath, useMatch } from 'react-router-dom'
import { Box, ThemeIcon } from '@mantine/core'
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

export function NavItem(props) {
  const reslove = useResolvedPath({
    pathname: props.to,
  })
  const matched = useMatch({
    path: reslove.pathname,
    end: true,
    caseSensitive: true,
  })
  return (
    <Box
      component={Link}
      to={props.to}
      className={matched ? 'active' : ''}
      sx={(theme) => ({
        padding: theme.spacing.sm,
        paddingLeft: theme.spacing.lg,
        paddingRight: theme.spacing.lg,
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textDecoration: 'none',
        gap: theme.spacing.xs,
        color:
          theme.colorScheme === 'dark'
            ? theme.colors.gray[0]
            : theme.colors.dark[6],
        '&:hover, &.active': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[5]
              : theme.colors.gray[1],
        },
      })}
    >
      <ThemeIcon variant="light">
        <i className={`ri-lg ${props.leftIcon || 'ri-list-check'}`} />
      </ThemeIcon>
      {props.label}
      {props.rightIcon && <i className={`ri-lg ${props.rightIcon}`} />}
    </Box>
  )
}
