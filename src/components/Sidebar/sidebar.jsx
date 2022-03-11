import Icon from 'components/Icon/'
import { Box, Group, Navbar, ScrollArea, Text, ThemeIcon } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function LayoutSideNav(props) {
  console.log(props)
  return (
    <Navbar {...props}>
      <Navbar.Section>
        <Group
          spacing="md"
          sx={(theme) => ({
            padding: theme.spacing.lg,
            borderBottom: `1px solid ${theme.colors.gray[2]}`,
          })}
        >
          <ThemeIcon variant="light" color="red">
            <Icon name="ri-home-2-line" className="ri-xxl" />
          </ThemeIcon>
          <Text>To-Do</Text>
        </Group>
      </Navbar.Section>
      <Navbar.Section component={ScrollArea} grow mt="lg">
        <NavItem leftIcon="ri-user-line" label="任务管理" to="/" />
        <NavItem leftIcon="ri-settings-line" label="设置" to="settings" />
      </Navbar.Section>
      <Navbar.Section>
        <Group
          position="center"
          sx={(theme) => {
            return {
              padding: theme.spacing.md,
              borderTop: `1px solid ${theme.colors.gray[3]}`,
            }
          }}
        >
          <ThemeIcon color="red" variant="light">
            <Icon name="ri-heart-fill" />
          </ThemeIcon>

          <Text>Love & Peace</Text>
        </Group>
      </Navbar.Section>
    </Navbar>
  )
}

function NavItem(props) {
  return (
    <Box
      component={Link}
      to={props.to}
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
        {props.leftIcon && <i className={`ri-lg ${props.leftIcon}`} />}
      </ThemeIcon>
      {props.label}
      {props.rightIcon && <i className={`ri-lg ${props.rightIcon}`} />}
    </Box>
  )
}

export function Sidebar({ children, ...props }) {
  // const match = useRouteMatch()
  return (
    <Navbar {...props}>
      <Navbar.Section>
        <Icon name="home-2-line" />
        To-Do
      </Navbar.Section>
      <Navbar.Section grow>
        {/* <CustomLink
          to={`${match.url}/task`}
          className={match.isExact ? 'active' : ''}
        >
          我的任务
        </CustomLink> */}
        {/* <CustomItem
          component={CustomLink}
          href="/task"
          iconBefore={<Icon name="sun-line"></Icon>}
          active={match.path === '/task'}
        >
          任务面板
        </CustomItem>

        <CustomItem
          component={CustomLink}
          href="/settings"
          iconBefore={<Icon name="settings-line"></Icon>}
          active={match.path === '/settings'}
        >
          设置
        </CustomItem> */}
      </Navbar.Section>
      <Navbar.Section></Navbar.Section>
    </Navbar>
  )
}
