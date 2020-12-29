import {
  SideNavigation,
  Section,
  NavigationHeader,
  Header,
  Footer,
  NavigationFooter,
  NavigationContent,
  CustomItem,
} from '@atlaskit/side-navigation'
import styled from 'styled-components'
import { Icon } from 'components/Icon/'
import { CustomLink } from 'components/CustomLink'

const Frame = styled.div``
export function Sidebar({ children, ...props }) {
  return (
    <Frame {...props}>
      <SideNavigation label="project">
        <NavigationHeader>
          <Header iconBefore={<Icon name="home-2-line" />}>To-Do</Header>
        </NavigationHeader>
        <NavigationContent>
          <Section>
            <CustomItem
              component={CustomLink}
              href="/task"
              iconBefore={<Icon name="sun-line"></Icon>}
            >
              任务面板
            </CustomItem>

            <CustomItem
              component={CustomLink}
              href="/settings"
              iconBefore={<Icon name="settings-line"></Icon>}
            >
              设置
            </CustomItem>
          </Section>
        </NavigationContent>
        <NavigationFooter>
          <Footer>
            <Icon name="heart-fill" color="red" /> Love & Peace
          </Footer>
        </NavigationFooter>
      </SideNavigation>
    </Frame>
  )
}
