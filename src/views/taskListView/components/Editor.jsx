import React from 'react'
import styled from 'styled-components'
import Button, { ButtonGroup, LoadingButton } from '@atlaskit/button'
import Form, { ErrorMessage, Field, FormFooter } from '@atlaskit/form'
import TextField from '@atlaskit/textfield'
import MarkdownEditor from '@uiw/react-markdown-editor'
const FormEle = styled.form`
  margin-bottom: '30px';
  display: 'flex';
  flex-direction: 'column';
  height: '100%';
`
const EditorField = styled(Field)`
  flex-grow: 1;
`

const TaskEditor = () => (
  <Form
    onSubmit={(data) => {
      console.log('form data', data)
    }}
  >
    {({ formProps, submitting }) => (
      <FormEle {...formProps}>
        <Field name="name" label="清单名称" isRequired defaultValue="">
          {({ fieldProps, error }) => (
            <>
              <TextField
                autoComplete="off"
                {...fieldProps}
                placeholder="清单名称"
              />
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </>
          )}
        </Field>
        <EditorField name="content" defaultValue={'<p>adss</p>'}>
          {({ fieldProps, error }) => (
            <MarkdownEditor
              {...fieldProps}
              onChange=""
              style={{ height: '100%' }}
            />
          )}
        </EditorField>
        <FormFooter>
          <ButtonGroup>
            <Button appearance="subtle">取消</Button>
            <LoadingButton
              type="submit"
              appearance="primary"
              isLoading={submitting}
            >
              新建清单
            </LoadingButton>
          </ButtonGroup>
        </FormFooter>
      </FormEle>
    )}
  </Form>
)
export default TaskEditor
