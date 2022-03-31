import { useState } from 'react'
import {
  Card,
  Checkbox,
  Divider,
  Group,
  Text,
  Drawer,
  TextInput,
} from '@mantine/core'
import { Formik } from 'formik'
export default function TaskItem(props) {
  const { item } = props
  const [opened, setOpened] = useState(false)
  return (
    <>
      <Card
        shadow="md"
        withBorder
        p="lg"
        style={{ cursor: 'pointer' }}
        onClick={(e) => {
          console.log('item click ')
          setOpened(!opened)
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <Group>
            <Checkbox
              checked={item.status === 'done'}
              disabled={item.status === 'done'}
              onChange={(e) => {
                e.stopPropagation()
                props.onUpdate(item)
              }}
            />

            <Text>{item.title}</Text>
          </Group>
          <Divider my="sm" />
          <ol style={{ listStyle: 'circle inside', paddingLeft: 40 }}>
            <li>{item.description || 'adsasd'}</li>
            <li>{item.description || 'adsasd'}</li>
          </ol>
        </div>
      </Card>
      <Drawer
        position="right"
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
      >
        <Formik initialValues={item} onSubmit={(values) => {}}>
          {({ values, handleChange, handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <TextInput
                    required
                    name="title"
                    label="任务名称"
                    placeholder="Title"
                    value={values.title}
                    onChange={handleChange}
                  />
                </div>
              </form>
            )
          }}
        </Formik>
      </Drawer>
    </>
  )
}
