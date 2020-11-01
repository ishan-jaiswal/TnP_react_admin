import * as React from "react";
import Card from '@material-ui/core/Card';
import { Title,} from 'react-admin';
import EditInfo from './EditInfo'
//import ChangePassword from './ChangePassword'
import useLocalStorage from "../../useLocalStorage";
import { Button, CardActions, CardHeader } from "@material-ui/core";
// import { useSelector, useDispatch } from 'react-redux'
// import {setEdit} from '../../../redux'

export default () => {       
    // eslint-disable-next-line  
    //const [placed,setPlaced]=React.useState(['Cognizant','IBM','Accenture','Robert Bosch']);
    // eslint-disable-next-line  
    const [username,setUsername]=useLocalStorage('username','');
    // eslint-disable-next-line  
    const [change,setChange]=React.useState(false);
    const [edit,setEdit]=React.useState(false)
    // const edit=useSelector(state=>state.edit.val);
    // const dispatch=useDispatch()
    React.useEffect(() => {       
    }, [edit,change])
    const handleEdit=()=>{
        setEdit(!edit)
    }
    return (
        <Card style={{margin:'2vh'}}>
            <Title title='Kiit TnP' /> 
            <CardHeader title={`Welcome ${username}`} />
            {change===false&&edit===false&&(                
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