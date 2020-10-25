import React from 'react'
import { Resource } from 'react-admin'
import StudentList from '../Student/StudentList'
import StudentCreate from '../Student/StudentCreate'
// import StudentEdit from '../Student/StudentEdit'
function ShowPost(props) {
    return (
        <div>            
            <Resource name='posts'                
                options={{ label: 'Student' }}
                // edit={StudentEdit}
                list={StudentList}                
                create={StudentCreate}                
                {...props}
            />                        
        </div>
    )
}

export default ShowPost
