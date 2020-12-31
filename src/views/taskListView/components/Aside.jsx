import { useState, Fragment, useEffect } from 'react'
import styled from 'styled-components'
import {
  MenuGroup,
  Section,
  CustomItem,
  HeadingItem,
  ButtonItem,
} from '@atlaskit/menu'
import { useParams, useRouteMatch, useHistory } from 'react-router-dom'
import ButtonGroup from '@atlaskit/button/button-group'
import LoadingButton from '@atlaskit/button/loading-button'
import Button from '@atlaskit/button'
import TextField from '@atlaskit/textfield'
import Modal, { ModalTransition } from '@atlaskit/modal-dialog'
import Form, { ErrorMessage, Field, FormFooter } from '@atlaskit/form'

import { CustomLink } from 'components/CustomLink/CustomLink'
import { Icon } from 'components/Icon/Icon'
import { CheckListService } from 'db/'

const MenuListFrame = styled.aside.attrs({ className: 'aside' })`
  flex: 1 1 20%;
  padding: 10px 30px;
  .active {
    color: #172b4d;
    background-color: #f4f5f7;
    -webkit-text-decoration: none;
    text-decoration: none;
  }
`
const d = new Date()
export default function AsideBarView() {
  const match = useRouteMatch({ path: '/task' })
  const params = useParams()
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)
  const open = () => setIsOpen(true)
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
      const v = taskOrderList[0]
      history.push(`${match.url}/${v.id}`)
    }
  }, [params, taskOrderList, match, history])

  useEffect(() => {
    getAll()
  }, [])

  return (
    <>
      <MenuListFrame className="leaft">
        <MenuGroup>
          <HeadingItem>
            <h2>我的一天</h2>
            <h6>{d.getMonth() + 1 + '-' + d.getDate()} 星期一</h6>
          </HeadingItem>
          <Section title="Starred">
            <ButtonItem iconBefore={<Icon name="add-line" />} onClick={open}>
              新建清单
            </ButtonItem>
          </Section>
          <Section hasSeparator title="Task">
            {taskOrderList.map((v) => (
              <CustomItem
                href={`${match.url}/${v.id}`}
                component={CustomLink}
                iconBefore={<Icon name="task-line" />}
                key={v.id}
                active={parseInt(params.id, 10) === v.id}
              >
                {v.name}
              </CustomItem>
            ))}
          </Section>
        </MenuGroup>
      </MenuListFrame>
      <ModalTransition>
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
      </ModalTransition>
    </>
  )
}
