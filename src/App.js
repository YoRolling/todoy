import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { AppFrame } from './components/AppFrame/AppFrame'
import { TaskListView } from './views/taskListView'
import TaskEditor from 'views/taskListView/components/Editor'
import 'remixicon/fonts/remixicon.css'

function App() {
  const [colorScheme, setColorScheme] = useState('light')
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }} withGlobalStyles>
        <Router>
          <Routes>
            <Route path="/editor" element={<TaskEditor />} />
            <Route path="/" element={<AppFrame />}>
              <Route index element={<TaskListView />}></Route>
              <Route path="settings" element={<div>Settings</div>}></Route>
              {/* <Route render={() => <Redirect to="task" />}></Route> */}
            </Route>
          </Routes>
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
