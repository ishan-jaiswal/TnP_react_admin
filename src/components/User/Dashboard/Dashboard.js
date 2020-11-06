import * as React from "react";
import Card from '@material-ui/core/Card';
import { Title,} from 'react-admin';
import EditInfo from './EditInfo'
import useLocalStorage from "../../useLocalStorage";
import { Button, CardActions, CardHeader } from "@material-ui/core";


export default () => {       
    
    // eslint-disable-next-line  
    const [username,setUsername]=useLocalStorage('username','');    
    const [edit,setEdit]=useLocalStorage('edit',false);    
    React.useEffect(() => {       
    }, [edit])
    const handleEdit=()=>{
        setEdit(!edit)
    }
    return (
        <Card style={{margin:'2vh'}}>
            <Title title='Kiit TnP' /> 
            <CardHeader title={`Welcome ${username}`} />
            {edit===false&&(                
                // <CardContent>
                // Placed In
                // {(placed.map((item,i)=>{
                //     return [(<li key={i}>{item}</li>)]
                // }))}
                // </CardContent>                
                <CardActions>
                    <Button variant='outlined' color='primary' onClick={handleEdit} >Edit My Profile</Button>
                </CardActions>
            )}       
            {edit&&(<EditInfo edit={edit} onChange={handleEdit} />)}            
        </Card>
    )
};