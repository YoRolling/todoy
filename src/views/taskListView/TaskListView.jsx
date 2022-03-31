import React from 'react'
import { Outlet } from 'react-router-dom'

import styled from 'styled-components'

import AsideBarView from './components/Aside'
// import Editor from './components/Editor'
const MainFrame = styled.article`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const ContentFrame = styled.div.attrs({ className: 'content' })`
  flex: 4 4 80%;
  padding: 18px;
`
export function TaskListView() {
  return (
    <MainFrame>
      <AsideBarView />
      <ContentFrame>
        <Outlet />
      </ContentFrame>
    </MainFrame>
  )
}
