import React from 'react'
import { Resource } from 'react-admin'
import StudentList from '../Student/StudentList'
import StudentCreate from '../Student/StudentCreate'
import StudentEdit from '../Student/StudentEdit'
function ShowPost(props) {
    return (
        <div>            
            <Resource name='posts'
                {...props}
                options={{ label: 'User' }}
                list={StudentList}
                create={StudentCreate}
                edit={StudentEdit}        
            />                        
        </div>
    )
}

export default ShowPost
