import { useState, Fragment } from 'react'
import styled from 'styled-components'
import {
  MenuGroup,
  Section,
  CustomItem,
  HeadingItem,
  ButtonItem,
} from '@atlaskit/menu'
import { useRouteMatch } from 'react-router-dom'
import ButtonGroup from '@atlaskit/button/button-group'
import LoadingButton from '@atlaskit/button/loading-button'
import Button from '@atlaskit/button'
import TextField from '@atlaskit/textfield'
import Modal, { ModalTransition } from '@atlaskit/modal-dialog'
import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  HelperMessage,
} from '@atlaskit/form'

import { CustomLink } from 'components/CustomLink/CustomLink'
import { Icon } from 'components/Icon/Icon'
const MenuListFrame = styled.aside.attrs({ className: 'aside' })`
  flex: 1 1 20%;
  padding: 10px 30px;
`
export default function AsideBarView() {
  const match = useRouteMatch({ path: '/task' })
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)
  const open = () => setIsOpen(true)

  const [name, setName] = useState('')

  return (
    <>
      <MenuListFrame className="leaft">
        <MenuGroup>
          <HeadingItem>
            <h2>我的一天</h2>
            <h6>12-28 星期一</h6>
          </HeadingItem>
          <Section title="Starred">
            <ButtonItem iconBefore={<Icon name="add-line" />} onClick={open}>
              新建清单
            </ButtonItem>
          </Section>
          <Section hasSeparator title="Task">
            <CustomItem
              href={`${match.path}/editor`}
              component={CustomLink}
              iconBefore={<Icon name="task-line" />}
            >
              我的一天
            </CustomItem>
          </Section>
        </MenuGroup>
      </MenuListFrame>
      <ModalTransition>
        {isOpen && (
          <Modal heading="新建清单">
            <Form
              onSubmit={(data) => {
                console.log('form data', data)
                return new Promise((resolve) =>
                  setTimeout(resolve, 2000)
                ).then(() =>
                  data.name === 'error' ? { name: '清单名称重复' } : undefined
                )
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
                          elemBeforeInput={<Icon name="medal-line" />}
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
