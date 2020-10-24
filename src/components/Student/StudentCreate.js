import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, FileField,FileInput } from 'react-admin'

const StudentCreate = (props) => {
  return (
    <Create title='Create a Job Post' {...props}>
      <SimpleForm>
        <TextInput source='title' />        
        <TextInput multiline source='body' />
        <DateInput label='Published Date' source='publishedAt' />
        <DateInput label='Expiry Date' source='expiryAt' />
        <TextInput label='URL' source='url' />
        <FileInput source="files" label="Related files" accept="application/pdf">
            <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Create>
  )
}

export default StudentCreate