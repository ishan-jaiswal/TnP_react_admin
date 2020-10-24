import * as React from 'react';
import { useListContext, List, TextField, DateField, ShowButton, UrlField,Filter,SelectInput } from 'react-admin';
import { Card, CardActions, CardContent, CardHeader, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import useLocalStorage from '../useLocalStorage'
const cardStyle = {
    width: '167vh',    
    margin: '0.5em',    
    verticalAlign: 'top'
};
const PostFilter = (props) => (
    <Filter {...props}>
        <SelectInput source="category" choices={[
          { id: 'Applied', name: 'Applied' },
          { id: 'Inactive', name: 'Inactive' },    
          ]} />
    </Filter>
  )
const CommentGrid = () => {
    const { ids, data, basePath } = useListContext();
    // eslint-disable-next-line
    const [name,setName]=useLocalStorage('name','');    
    return (
        <div style={{ margin: '1em' }}>            
        {ids.map(id =>
            <Card key={id} style={cardStyle}>
                <CardHeader
                    title={<TextField record={data[id]} source="name" />}
                    subheader={<DateField record={data[id]} source="created_at" />}
                    avatar={<Avatar icon={<PersonIcon />} />}
                />
                <CardContent>
                    <TextField record={data[id]} source="body" />
                </CardContent>
                <CardContent>                    
                    <UrlField record={data[id]} source='name'/>
                </CardContent>
                <CardActions style={{ textAlign: 'right' }}>
                    <ShowButton resource="comments" basePath={basePath} record={data[id]}  onClick={e=>setName(data[id])}/>
                </CardActions>
            </Card>
        )}        
        </div>
    );
};

const UserList = (props) => (
    <List title="All comments" filters={<PostFilter />} {...props} exporter={false} >
        <CommentGrid />
    </List>
);
export default UserList;