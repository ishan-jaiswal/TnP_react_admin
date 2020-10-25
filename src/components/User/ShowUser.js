import * as React from "react";
import { SimpleShowLayout, TextField, DateField,UrlField, Show,FileField } from 'react-admin';
import { Avatar, Button } from '@material-ui/core';
import useLocalStorage from '../useLocalStorage'
const ShowUser = (props) => {   
    const [name]=useLocalStorage('name','');        
    return (
        <Show {...props} title={name.name}>
            <SimpleShowLayout>                  
                <Avatar style={{background:"red"}}>{name.name.charAt(0).toUpperCase()}</Avatar>
                <TextField  label='Company'source='name' />
                <TextField label='Body' source='body' />
                <DateField label='Published Date' source='id'/>  
                <DateField label='Expiry Date' source='id'/>    
                <UrlField label='URL' source='name' />              
                <FileField title='PDF' label='File' download source='name'/>
                <Button variant='outlined' color='primary'>Apply Now</Button>                      
            </SimpleShowLayout>    
        </Show>
    )};
export default ShowUser;