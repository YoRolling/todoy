import React from 'react'
import './App.less'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { AppFrame } from './components/AppFrame/AppFrame'
import { Sidebar } from './components/Sidebar/'
import { Content } from './components/Content'
import { TaskListView } from './views/taskListView'
import TaskEditor from 'views/taskListView/components/Editor'

const SideFrame = styled(Sidebar)`
  flex: 1 1 240px;
  width: 240px;
`
const ContentFrame = styled(Content)`
  flex: 9 9 85vw;
  width: 85vw;
`
function App() {
  return (
    <Router>
      <AppFrame>
        <Switch>
          <Route path="/editor">
            <TaskEditor />
          </Route>
          <Route>
            <Route path={['/task', '/settings']}>
              <SideFrame></SideFrame>
            </Route>
            <ContentFrame flex>
              <Switch>
                <Route path="/task">
                  <TaskListView />
                </Route>
                <Route path="/settings">
                  <div>Settings</div>
                </Route>

                <Route>
                  <Redirect to="/task" />
                </Route>
              </Switch>
            </ContentFrame>
          </Route>
        </Switch>
      </AppFrame>
    </Router>
  )
}

export default App
