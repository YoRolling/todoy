import React from 'react'
import { Route } from 'react-router-dom'

import styled from 'styled-components'

import TaskView from 'views/taskListView/components/TaskView'
// import Editor from './components/Editor'
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
  // const match = useRouteMatch()
  return (
    <MainFrame>
      <ContentFrame>
        {/* <Route path={`${match.path}/:id`} exact>
          <TaskView />
        </Route> */}
        {/* <Route path={`${match.path}/:id/editor`}>
            <Editor />
          </Route> */}

        {/* <Route path={`${match.path}`}>
              <Redirect to={`${match.path}/editor/1`} />
            </Route> */}
      </ContentFrame>
    </MainFrame>
  )
}
