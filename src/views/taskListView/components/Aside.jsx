import { useState, useEffect, useCallback, useRef } from 'react'

import Icon from 'components/Icon'
import { CheckListService } from 'db/'
import { Navbar, Button, Text, Modal, TextInput, Group } from '@mantine/core'
import { NavItem } from 'components/CustomLink'
import { Navigate, useParams } from 'react-router-dom'
import { useToggle } from '@mantine/hooks'

const d = new Date()
// weekdays in Chinese
const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
const dateInWeek = weekdays[d.getDay()]
export default function AsideBarView() {
  const params = useParams({})
  const [open, toggleModal] = useToggle(false, [true, false])
  const [taskOrderList, setTaskOrderList] = useState([])
  const getAll = useCallback(() => {
    return CheckListService.getAll().then((result) => {
      setTaskOrderList(result)
      return result
    })
  }, [])
  useEffect(() => {
    getAll()
  }, [getAll])

  const taskNameRef = useRef(null)

  if (params && !params.id && taskOrderList.length > 0) {
    return <Navigate to={`${taskOrderList[0].id}`} />
  }
  return (
    <>
      <Navbar width={{ base: 300 }} px="md">
        <Navbar.Section>
          <h2>我的一天</h2>
          <Text>
            {d.getMonth() + 1 + '-' + d.getDate()} {dateInWeek}
          </Text>
        </Navbar.Section>
        <Navbar.Section mt="md">
          <Button
            leftIcon={<Icon name="ri-sun-line" />}
            onClick={() => toggleModal()}
          >
            新建清单
          </Button>
        </Navbar.Section>
        <Navbar.Section grow mt="lg">
          {taskOrderList.map((v) => (
            <NavItem key={v.id} label={v.name} to={`/task/${v.id}`} />
          ))}
        </Navbar.Section>
      </Navbar>

      <Modal
        title="新建清单"
        opened={open}
        onClose={() => toggleModal()}
        centered
        closeOnClickOutside={false}
        closeOnEscape={false}
      >
        <Group direction="column" grow spacing="lg">
          <TextInput
            name="name"
            label="清单"
            variant="filled"
            required
            autoComplete="off"
            ref={taskNameRef}
          />
          <Group direction="row" spacing="md" position="right">
            <Button variant="outline" color="red" onClick={() => toggleModal()}>
              取消
            </Button>
            <Button
              variant="filled"
              leftIcon={<Icon name="ri-add-line" />}
              onClick={() => {
                return CheckListService.add({ name: taskNameRef.current.value })
                  .then((res) => {
                    getAll()
                    toggleModal()
                  })
                  .catch((error) => error)
              }}
            >
              创建
            </Button>
          </Group>
        </Group>
      </Modal>
    </>
  )
}
