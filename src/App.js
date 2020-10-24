import React from 'react'
import { Admin, Resource,AppBar,Layout } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import PostList from './components/Posts/PostList'
import PostCreate from './components/Posts/PostCreate'
import PostEdit from './components/Posts/PostEdit'
import Login from './components/Login'
import UserList from './components/User/UserList'
import ShowUser from './components/User/ShowUser'
import ShowPost from './components/Posts/ShowPost';
import { createMuiTheme } from '@material-ui/core/styles';
import Dashboard from './components/User/Dashboard'
import { Box,Button, Typography } from '@material-ui/core';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import useLocalStorage from './components/useLocalStorage'
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  // eslint-disable-next-line
  const [permissions,setPermissions]=React.useState('student');
  const [toggle,setToggle]=useLocalStorage('toggle',false)
  // eslint-disable-next-line
  const [email,setEmail]=useLocalStorage('email','');
  React.useEffect(() => {            
      setEmail('1705500@kiit.ac.in')
  }, [setEmail]);
  const theme = createMuiTheme({
    palette: {
      type: toggle===true?'dark':'light' 
    },
  });

  const MyAppBar = props => (
    <AppBar {...props}>
        <Box flex="1">
            <Typography variant="h6" id="react-admin-title"></Typography>
        </Box>
        <Button onClick={e=>setToggle(!toggle)}>{toggle===true?(<ToggleOnIcon />):(<ToggleOffIcon />)}</Button>
    </AppBar>
  );
  const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;


  return (
    <Admin layout={MyLayout} theme={theme} dashboard={permissions==='student'?Dashboard:null} authProvider={Login} dataProvider={dataProvider} >     
        {permission=>[
          permissions==='admin'?<Resource
          options={{ label: 'Jobs' }}
          name='posts'                        
          list={PostList}
          show={ShowPost}
          create={PostCreate}
          edit={PostEdit}
          />:null,
          permissions==='student'?<Resource
          options={{ label: 'Jobs' }}
          name='users'        
          list={UserList}        
          show={ShowUser}
          /> :null,          
        ]}    
    </Admin>
  )
}
export default App;