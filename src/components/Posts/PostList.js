import React from 'react'
import {
  List,  
  TextInput,
  TextField,
  DateField,
  EditButton,  
  ShowButton,
  Filter,  
  useListContext,  
} from 'react-admin'
import { Card, CardActions, CardContent, CardHeader, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const PostFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search by ID" source="id"  />
      <TextInput label="Search by Title" source="title"  />
  </Filter>
)
const cardStyle = {
    width: 300,
    height: 400,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};

const CommentGrid = () => {
    const { ids, data, basePath } = useListContext();
    return (
        <div style={{ margin: '1em' }}>            
        {ids.map(id =>
            <Card key={id} style={cardStyle}>
                <CardHeader
                    title={<TextField record={data[id]} source="title" />}
                    subheader={<DateField record={data[id]} source="created_at" />}
                    avatar={<Avatar icon={<PersonIcon />} />}
                />
                <CardContent>
                    <TextField record={data[id]} source="body" />
                </CardContent>                
                <CardActions style={{ textAlign: 'right' }}>
                    <ShowButton resource="posts"  basePath={basePath} record={data[id]}/>
                    <EditButton resource='posts' record={data[id]} basePath={basePath}/>                  
                </CardActions>
            </Card>
        )}        
        </div>
    );
};
const PostList = (props) => {
  return (
    <List title="All Posts" {...props} filters={<PostFilter />} exporter={false}>
      <CommentGrid/>      
    </List>
  )
}

export default PostList