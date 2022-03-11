import React from 'react'
import styled from 'styled-components'
import { Button, TextInput } from '@mantine/core'

import MarkdownEditor from '@uiw/react-markdown-editor'
import { Formik } from 'formik'
const FormEle = styled.form`
  margin-bottom: '30px';
  display: 'flex';
  flex-direction: 'column';
  height: '100%';
`

const TaskEditor = () => {
  return (
    <Formik>
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <FormEle onSubmit={handleSubmit}>
          <TextInput
            name="title"
            label="标题"
            value={values.title}
            onChange={handleChange}
            error={errors.title}
            touched={touched.title}
          />
          <MarkdownEditor
            name="content"
            label="内容"
            value={values.content}
            onChange={handleChange}
            error={errors.content}
            touched={touched.content}
          />
          <Button type="submit">新建清单</Button>
        </FormEle>
      )}
    </Formik>
  )
}
export default TaskEditor
