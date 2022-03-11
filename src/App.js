import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import React, { useMemo } from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import Settings from 'views/Settings/Settings'
import TaskEditor from 'views/taskListView/components/Editor'
import TaskView from 'views/taskListView/components/TaskView'
import './App.css'
import { AppFrame } from './components/AppFrame/AppFrame'
import { colorScheme, ColorSchemeContext } from './context/ThemeContext'
import { TaskListView } from './views/taskListView'
function App() {
  const [colorSchemeValue, updateColorScheme] = React.useState(colorScheme)
  const colorSchemeProvider = useMemo(
    () => ({
      colorScheme: colorSchemeValue,
      setColorScheme: () => {
        updateColorScheme(colorSchemeValue === 'dark' ? 'light' : 'dark')
      },
    }),
    [colorSchemeValue]
  )
  return (
    <ColorSchemeContext.Provider value={colorSchemeProvider}>
      <MantineProvider
        withGlobalStyles
        theme={{ colorScheme: colorSchemeProvider.colorScheme }}
      >
        <ModalsProvider>
          <Router>
            <Routes>
              <Route path="/" element={<AppFrame />}>
                <Route path="task/*" element={<TaskListView />}>
                  <Route path=":id" element={<TaskView />} />
                  <Route path="editor" element={<TaskEditor />} />
                </Route>
                <Route path="editor" element={<TaskEditor />} />
                <Route path="settings" element={<Settings />}></Route>
                <Route path="*" element={<Navigate to="/task" />}></Route>
              </Route>
            </Routes>
          </Router>
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  )
}

export default App
