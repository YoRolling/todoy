import { AppShell } from '@mantine/core'
import { Sidebar } from 'components/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export function AppFrame() {
  return (
    <AppShell padding={0} fixed navbar={<Sidebar width={{ base: 300 }} />}>
      <Outlet />
    </AppShell>
  )
}
