import { useEffect } from 'react'

export default function Settings() {
  useEffect(() => {
    console.log('settings render')
  })
  return (
    <div>
      <h1>Settings</h1>
    </div>
  )
}
