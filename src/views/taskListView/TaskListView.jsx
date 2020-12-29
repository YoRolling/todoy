import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
  Switch,
} from 'react-router-dom'

import styled from 'styled-components'

import TaskView from './components/TaskView'
import Editor from './components/Editor'
import AsideBarView from './components/Aside'
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
export function TaskListView({ children }) {
  const match = useRouteMatch()
  return (
    <MainFrame>
      <Router>
        <AsideBarView />
        <ContentFrame>
          <Switch>
            <Route path={`${match.path}/editor`} exact>
              <Editor />
            </Route>
            <Route path={`${match.path}/*`}>
              <TaskView />
            </Route>
          </Switch>
        </ContentFrame>
      </Router>
    </MainFrame>
  )
}
