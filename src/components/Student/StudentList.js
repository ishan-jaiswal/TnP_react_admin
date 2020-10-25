import React from 'react';
import{ List,Datagrid,TextField,TextInput,Filter, DateField } from 'react-admin'
const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by Roll No." source="id"  />
        <TextInput label="Search by Name" source="title"  />
    </Filter>
  )
const PostList = (props) => {
    return (
      <List title="All Students" {...props} filters={<PostFilter />}>        
        <Datagrid>
          <TextField label='Roll No.' source='id' />
          <TextField label='Name' source='title'/>          
          <DateField label='Date of Birth' source='dob' />
          <TextField label='CGPA' source='cgpa' />
          {/* <EditButton basePath='/posts' />           */}
        </Datagrid>
      </List>
    )
  }
  
  export default PostList