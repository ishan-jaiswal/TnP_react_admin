import React from 'react';
import { Admin, Resource, AppBar, Layout } from 'react-admin';
// import {fetchUtils} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server';
import PostList from './components/Posts/PostList';
import PostCreate from './components/Posts/PostCreate';
import PostEdit from './components/Posts/PostEdit';
//import Menu from './components/Menu'
// import { Provider } from 'react-redux'
import authProvider from './components/authProvider';
import UserList from './components/User/UserList';
import ShowUser from './components/User/ShowUser';
import ShowPost from './components/Posts/ShowPost';
import { createMuiTheme } from '@material-ui/core/styles';
import Dashboard from './components/User/Dashboard/Dashboard';
import { Box, Button, Typography } from '@material-ui/core';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import useLocalStorage from './components/useLocalStorage';
import { createBrowserHistory as createHistory } from 'history';
import Logout from './components/Logout';
// import store from './redux/store'

const history = createHistory();
// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//       options.headers = new Headers({ Accept: 'application/json' });
//   }
//   const { token } = JSON.parse(localStorage.getItem('auth'));
//   options.headers.set('Authorization', `Bearer ${token}`);
//   return fetchUtils.fetchJson(url, options);
// };
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  // eslint-disable-next-line
  const [permissions, setPermissions] = useLocalStorage('permissions', '');
  const [toggle, setToggle] = useLocalStorage('toggle', false);

  const theme = createMuiTheme({
    palette: {
      type: toggle === true ? 'dark' : 'light',
    },
  });

  const MyAppBar = props => (
    <AppBar {...props}>
      <Box flex='1'>
        <Typography variant='h6' id='react-admin-title'></Typography>
      </Box>
      <Button onClick={() => setToggle(!toggle)}>
        {toggle === true ? <ToggleOnIcon /> : <ToggleOffIcon />}
      </Button>
    </AppBar>
  );
  const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;    
  return (   
      <Admin
      history={history}      
      layout={MyLayout}
      logoutButton={Logout}
      theme={theme}
      dashboard={permissions === 'student' ? Dashboard : null}
      authProvider={authProvider}
      dataProvider={dataProvider}>
      {
        permission => [
          permissions === 'admin' ? (
            <Resource            
              options={{ label: 'Jobs' }}
              name='posts'
              list={PostList}              
              show={ShowPost}
              create={PostCreate}
              edit={PostEdit}
            />
          ) : null,
          permissions === 'student' ? (
            <Resource
              options={{ label: 'Jobs' }}
              name='users'
              list={UserList}
              show={ShowUser}
            />
          ) : null,
          // permissions === '' ? history.push('/login') : null
        ]
         
        
      }
    </Admin>
  );
}
export default App;
