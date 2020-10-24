import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput,FileInput,FileField } from 'react-admin'

const StudentEdit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' />      
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />
        <DateInput label='Expiry Date' source='expiryAt' />
        <TextInput label='URL' source='url' />
        <FileInput source="files" label="Related files" accept="application/pdf">
            <FileField source="src" title="title" />
        </FileInput>      
      </SimpleForm>
    </Edit>
  )
}

export default StudentEdit