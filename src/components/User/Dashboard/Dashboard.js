import * as React from "react";
import Card from '@material-ui/core/Card';
import { Title,} from 'react-admin';
import EditInfo from './EditInfo'
import ChangePassword from './ChangePassword'
import useLocalStorage from "../../useLocalStorage";
import { CardContent } from "@material-ui/core";

export default () => {       
    // eslint-disable-next-line  
    const [username,setUsername]=useLocalStorage('username','');
    // eslint-disable-next-line  
    const [change,setChange]=useLocalStorage('change',false);
    // eslint-disable-next-line  
    const [edit,setEdit]=useLocalStorage('edit',false);
    return (
        <Card style={{margin:'2vh'}}>
        <Title title='Kiit TnP' /> 
        {(change===false&&edit===false)&&(
            <CardContent>Welcome {username}</CardContent>
        )}       
        {edit&&(<EditInfo />)}
        {change&&(<ChangePassword />)}
    </Card>
    )
};