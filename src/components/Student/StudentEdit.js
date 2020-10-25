import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput,FileInput,FileField } from 'react-admin'

const StudentEdit = (props) => {
  return (
    <Edit title='Edit Student' {...props}>
      <SimpleForm>
        <TextInput  label='Roll No.' source='id' />
        <TextInput label='Name' source='title' />              
        <DateInput label='Date of Birth' source='dob' />        
        <FileInput source="files" label="Related files" accept="application/pdf" maxSize={2000000}>
            <FileField source="src" title="title" />
        </FileInput>      
      </SimpleForm>
    </Edit>
  )
}

export default StudentEdit