import React, { useState, useEffect } from 'react'
import { useHistory, useParams, useRouteMatch } from 'react-router-dom'
import Button from '@atlaskit/button'

import { TaskService } from 'db'
import Icon from 'components/Icon'
export default function TaskView() {
  const { id } = useParams()
  const [taskList, setTaskList] = useState([])
  const history = useHistory()
  const match = useRouteMatch()
  console.log(match)
  function navigateToEditor() {
    history.push(`/editor`)
  }
  useEffect(() => {
    async function getTaskByCheckId() {
      try {
        const result = await TaskService.getAllByCid(id)
        setTaskList(result)
      } catch (error) {}
      console.log(111)
    }
    getTaskByCheckId(id)
  }, [id])
  return (
    <div>
      <header>
        <Button
          appearance="primary"
          iconBefore={<Icon name="add-line" />}
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
