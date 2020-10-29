import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, FileField,FileInput, required,minLength,maxLength, regex } from 'react-admin'

const PostCreate = (props) => {
  const validateTitle = [required(), minLength(2), maxLength(30)];
  const validateBody = [required(), minLength(10), maxLength(100)];
  const validateDate=[required()];
  const validateUrl=[required(),regex(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,'Must be a valid URL')];

  return (
    <Create title='Create a Job Post' {...props}>
      <SimpleForm>
        <TextInput source='title' validate={validateTitle} />        
        <TextInput multiline source='body' validate={validateBody} />
        <DateInput label='Published Date' source='publishedAt' validate={validateDate} />
        <DateInput label='Expiry Date' source='expiryAt' validate={validateDate} />
        <TextInput label='URL' source='url' validate={validateUrl} />
        <FileInput source="files" label="Related files" accept="application/pdf" validate={[required()]}>
            <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Create>
  )
}

export default PostCreate