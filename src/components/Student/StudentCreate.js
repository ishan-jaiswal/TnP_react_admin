import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, FileField,FileInput } from 'react-admin'

const StudentCreate = (props) => {
  return (
    <Create title='Add a Student' {...props}>
      <SimpleForm>
        <TextInput label='Roll No.' source='id' />
        <TextInput label='Name' source='name' />        
        <DateInput label='Date of Birth' source='dob' />        
        <TextInput label='CGPA' source='cgpa' />        
        <FileInput source="files" label="Resume" accept="application/pdf" maxSize={2000000}>
            <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Create>
  )
}

export default StudentCreate