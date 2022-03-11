import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '@mantine/core'

import { TaskService } from 'db'
import Icon from 'components/Icon'
export default function TaskView() {
  const { id } = useParams()
  const [taskList, setTaskList] = useState([])
  // const match = useRouteMatch()
  // console.log(match)
  function navigateToEditor() {
    // history.push(`/editor`)
  }
  useEffect(() => {
    TaskService.getAllByCid(id).then((result) => {
      setTaskList(result)
    })
  }, [id])
  return (
    <div>
      <header>
        <Button
          variant="outline"
          leftIcon={<Icon name="ri-add-line" />}
          onClick={navigateToEditor}
        >
          创建
        </Button>
      </header>
      {taskList.map((v) => {
        return <div>{v.title}</div>
      })}
    </div>
  )
}
