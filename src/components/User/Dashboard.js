import * as React from "react";
import Card from '@material-ui/core/Card';
import { Title,} from 'react-admin';
import EditInfo from './EditInfo'


export default () => {    
    return (
        <Card>
        <Title title="Welcome to the administration" />        
        <EditInfo />        
    </Card>
    )
};