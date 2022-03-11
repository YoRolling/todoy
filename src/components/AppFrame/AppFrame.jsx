import { AppShell } from '@mantine/core'
import { Sidebar } from 'components/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export function AppFrame() {
  return (
    <AppShell padding="md" fixed navbar={<Sidebar width={{ base: 300 }} />}>
      {/* <AppShell navbar={<AsideBarView width={{ base: 200 }} padding="xs" />}> */}

      <Outlet />
      {/* </AppShell> */}
    </AppShell>
  )
}
