import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Icon from 'components/Icon'
import { CheckListService } from 'db/'
import { Navbar, Button } from '@mantine/core'
import { useRouteMatch } from 'react-router-dom'

const d = new Date()
export default function AsideBarView(props) {
  const match = useRouteMatch()
  console.log(match)
  // const match = useRouteMatch({ path: '/task' })
  const params = useParams()
  // const [isOpen, setIsOpen] = useState(false)
  // const close = () => setIsOpen(false)
  // const open = () => setIsOpen(true)
  const [taskOrderList, setTaskOrderList] = useState([])
  async function getAll() {
    try {
      const result = await CheckListService.getAll()
      setTaskOrderList(result)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!params.id && taskOrderList.length > 0) {
      // const v = taskOrderList[0]
      // history.push(`${match.url}/${v.id}`)
    }
  }, [params, taskOrderList])

  useEffect(() => {
    getAll()
  }, [])

  return (
    <>
      <Navbar {...props}>
        <Navbar.Section>
          <h2>我的一天</h2>
          <h6>{d.getMonth() + 1 + '-' + d.getDate()} 星期一</h6>
        </Navbar.Section>
        <Navbar.Section>
          <Button iconLeft={<Icon name="ri-plus-line" />}>新建清单</Button>
        </Navbar.Section>
        <Navbar.Section grow>
          {/* {taskOrderList.map((v) => (
            <CustomItem
              href={`${match.url}/${v.id}`}
              component={CustomLink}
              iconBefore={<Icon name="task-line" />}
              key={v.id}
              active={parseInt(params.id, 10) === v.id}
            >
              {v.name}
            </CustomItem>
          ))} */}
        </Navbar.Section>
      </Navbar>

      {/* <ModalTransition>
        {isOpen && (
          <Modal heading="新建清单">
            <Form
              onSubmit={(data) => {
                console.log('form data', data)
                return CheckListService.add(data)
                  .then((res) => {
                    console.log({ res })
                    getAll()
                    close()
                  })
                  .catch((error) => error)
              }}
            >
              {({ formProps, submitting }) => (
                <form {...formProps} style={{ marginBottom: '30px' }}>
                  <Field
                    name="name"
                    label="清单名称"
                    isRequired
                    defaultValue=""
                  >
                    {({ fieldProps, error }) => (
                      <Fragment>
                        <TextField
                          autoComplete="off"
                          {...fieldProps}
                          placeholder="清单名称"
                        />
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                      </Fragment>
                    )}
                  </Field>
                  <FormFooter>
                    <ButtonGroup>
                      <Button appearance="subtle" onClick={close}>
                        取消
                      </Button>
                      <LoadingButton
                        type="submit"
                        appearance="primary"
                        isLoading={submitting}
                      >
                        新建清单
                      </LoadingButton>
                    </ButtonGroup>
                  </FormFooter>
                </form>
              )}
            </Form>
          </Modal>
        )}
      </ModalTransition> */}
    </>
  )
}
