import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput,FileInput,FileField,maxLength,minLength,regex } from 'react-admin'

const PostEdit = (props) => {
  const validateTitle = [ minLength(2), maxLength(30)];
  const validateBody = [ minLength(10), maxLength(100)];  
  const validateUrl=[regex(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,'Must be a valid URL')];
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' validate={validateTitle} />      
        <TextInput multiline source='body' validate={validateBody} />
        <DateInput label='Published' source='publishedAt' />
        <DateInput label='Expiry Date' source='expiryAt' />
        <TextInput label='URL' source='url' validate={validateUrl} />
        <FileInput source="files" label="Related files" accept="application/pdf" >
            <FileField source="src" title="title" />
        </FileInput>      
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit