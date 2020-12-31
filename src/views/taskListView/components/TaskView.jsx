import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from '@atlaskit/button'
import styled from 'styled-components'

import { TaskService } from 'db'
import { Icon } from 'components/Icon'
export default function TaskView() {
  const { id } = useParams()
  const [taskList, setTaskList] = useState([])
  async function getTaskByCheckId() {
    try {
      const result = await TaskService.getAllByCid(id)
      setTaskList(result)
    } catch (error) {}
  }
  useEffect(() => {
    getTaskByCheckId()
  }, [])
  return (
    <div>
      <header>
        <Button appearance="primary" iconBefore={<Icon name="add-line" />}>
          创建
        </Button>
      </header>
      {taskList.map((v) => {
        return <div>{v.title}</div>
      })}
    </div>
  )
}
