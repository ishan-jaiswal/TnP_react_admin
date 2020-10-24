import React from 'react';
import{ List,Datagrid,TextField,EditButton,DeleteButton,TextInput,Filter } from 'react-admin'
const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by ID" source="id"  />
        <TextInput label="Search by Title" source="title"  />
    </Filter>
  )
const PostList = (props) => {
    return (
      <List title="All Posts" {...props} filters={<PostFilter />}>        
        <Datagrid>
          <TextField source='id' />
          <TextField source='title'/>          
          <EditButton basePath='/posts' />
          <DeleteButton basePath='/posts' />
        </Datagrid>
      </List>
    )
  }
  
  export default PostList