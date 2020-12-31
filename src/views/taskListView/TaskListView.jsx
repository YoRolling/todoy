import React from 'react'
import { Route, useRouteMatch, Switch } from 'react-router-dom'

import styled from 'styled-components'

import TaskView from 'views/taskListView/components/TaskView'
import AsideBarView from 'views/taskListView/components/Aside'
const MainFrame = styled.article`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const ContentFrame = styled.div.attrs({ className: 'content' })`
  flex: 4 4 80%;
  padding: 10px 30px;
  border-left: 1px solid #f1f1f1;
`
export function TaskListView() {
  const match = useRouteMatch()
  return (
    <MainFrame>
      <Route path={[`${match.path}/:id`, `${match.path}`]}>
        <AsideBarView />
      </Route>
      <ContentFrame>
        <Switch>
          <Route path={`${match.path}/:id`}>
            <TaskView />
          </Route>
          {/* <Route path={`${match.path}`}>
              <Redirect to={`${match.path}/editor/1`} />
            </Route> */}
        </Switch>
      </ContentFrame>
    </MainFrame>
  )
}
