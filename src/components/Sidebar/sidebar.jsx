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
import Icon from 'components/Icon/'
import { CustomLink } from 'components/CustomLink'
import { useRouteMatch } from 'react-router'

const Frame = styled.div`
  .active {
    background-color: #ebecf0;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: #42526e;
  }
`
export function Sidebar({ children, ...props }) {
  const match = useRouteMatch()
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
            </CustomItem>
          </Section>
        </NavigationContent>
        <NavigationFooter>
          <Footer>
            <Icon name="heart" iconStyle="fill" color="red" />
            Love & Peace
          </Footer>
        </NavigationFooter>
      </SideNavigation>
    </Frame>
  )
}
