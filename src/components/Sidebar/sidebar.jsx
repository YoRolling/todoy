import Icon from 'components/Icon/'
import {
  Group,
  Navbar,
  ScrollArea,
  Text,
  ThemeIcon,
  ActionIcon,
} from '@mantine/core'
import { NavItem } from 'components/CustomLink'
import { ColorSchemeContext } from 'context/ThemeContext'

export default function LayoutSideNav(props) {
  return (
    <Navbar {...props}>
      <Navbar.Section>
        <Group
          spacing="md"
          position="apart"
          sx={(theme) => ({
            padding: theme.spacing.lg,
            borderBottom: `1px solid ${theme.colors.gray[2]}`,
          })}
        >
          <Group>
            <ThemeIcon variant="light" color="red">
              <Icon name="ri-home-2-line" className="ri-xxl" />
            </ThemeIcon>
            <Text>To-Do</Text>
          </Group>
          <ColorSchemeContext.Consumer>
            {({ colorScheme, setColorScheme }) => (
              <ActionIcon
                variant="outline"
                color={colorScheme === 'dark' ? 'yellow' : 'blue'}
                onClick={() => setColorScheme()}
                title="Toggle color scheme"
              >
                <i
                  className={
                    colorScheme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'
                  }
                />
              </ActionIcon>
            )}
          </ColorSchemeContext.Consumer>
        </Group>
      </Navbar.Section>
      <Navbar.Section component={ScrollArea} grow mt="lg">
        <NavItem leftIcon="ri-user-line" label="任务管理" to="/task" />
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
