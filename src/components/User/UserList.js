import * as React from 'react';
import { useListContext, List, TextField, DateField, ShowButton,Filter,SelectInput } from 'react-admin';
import { Card, CardActions, CardContent, CardHeader,} from '@material-ui/core';
import useLocalStorage from '../useLocalStorage'
const cardStyle = {
    width: '167vh',    
    margin: '0.5vh',    
    verticalAlign: ''
};
const PostFilter = (props) => (
    <Filter {...props}>
        <SelectInput source="category" choices={[
          { id: 'Applied', name: 'Applied' },
          { id: 'Inactive', name: 'Inactive' },    
          ]} />
    </Filter>
  )
const UserGrid = () => {
    const { ids, data, basePath } = useListContext();
    // eslint-disable-next-line
    const [name,setName]=useLocalStorage('name','');    
    return (
        <div style={{ margin: '1vh' }}>            
        {ids.map(id =>
            <Card key={id} style={cardStyle}>
                <CardHeader
                    title={<TextField record={data[id]} source="name" />}
                    subheader={<DateField record={data[id]} source="name" />}                    
                />
                <CardContent>
                    Body<br/>
                    <TextField label='Body' record={data[id]} source="name" />
                </CardContent>                
                <CardContent>    
                    Expiry Date <br/>                
                    <DateField  label='URL' record={data[id]} source='name'/>
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
    <List title="All Jobs" filters={<PostFilter />} {...props} exporter={false} >
        <UserGrid />
    </List>
);
export default UserList;