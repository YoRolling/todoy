import React from 'react'
const colorScheme = 'light'

const ColorSchemeContext = React.createContext({
  colorScheme,
  setColorScheme: () => {},
})
export { ColorSchemeContext, colorScheme }
