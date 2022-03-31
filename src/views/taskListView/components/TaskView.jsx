import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TextInput } from '@mantine/core'

import { TaskService } from 'db'
import Icon from 'components/Icon'
import TaskItem from './TaskItem'
export default function TaskView() {
  const { id } = useParams()
  const [taskList, setTaskList] = useState([])
  useEffect(() => {
    TaskService.getAllByCid(id).then((result) => {
      setTaskList(result)
    })
  }, [id])

  const addTask = (e) => {
    if (e.code === 'Enter') {
      console.log(e.target.value)
    }
    // return CheckListService.add({ name: e.target.value, cid: id })
    TaskService.add({
      cid: id,
      title: e.target.value,
      description: '',
      status: 'todo',
    }).then(() => {})
  }
  const onUpdate = (item) => {
    TaskService.update({
      ...item,
      status: item.status === 'done' ? 'todo' : 'done',
    }).then(() => {
      TaskService.getAllByCid(id).then((result) => {
        setTaskList(result)
      })
    })
  }

  return (
    <div
      className="h-100"
      style={{
        height: '100% ',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <div
        className="flex justify-between items-center p-4"
        style={{ flexGrow: 1 }}
      >
        {taskList.map((v) => {
          return <TaskItem item={v} key={v.id} onUpdate={onUpdate} />
        })}
      </div>
      <TextInput
        placeholder="请输入"
        size="lg"
        onKeyDown={addTask}
        icon={<Icon name="ri-task-line" />}
      />
    </div>
  )
}
