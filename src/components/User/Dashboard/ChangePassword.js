import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Button, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
//import useLocalStorage from '../../useLocalStorage';
import CloseIcon from '@material-ui/icons/Close';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),      
    }    
  },
}));

export default function MyAccount(props) {
    const classes = useStyles();    
    const [pwd,setPwd]=React.useState('');    
    const [showPassword,setShowPassword]=React.useState(false);
    const [open, setOpen] = React.useState(false);    
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
      };
    const handleChangePassword=()=>{      
      setOpen(true)      
      setTimeout(() => {
        handleChange();
      }, 3000); 
      
      
    }    
    function handleChange(){
      props.onChange(!props.change)
    }
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    return (
        <div >            
            <Grid container
                direction="column"
                justify="flex-start"               
                alignItems="center"
                >            
                <Grid item style={{paddingTop:'2vh'}}>
                    <form className={classes.root} autoComplete="on">   
                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>                            
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}                        
                        value={pwd}
                        error={pwd.length<4}
                        style={{width:'25vh'}}
                        onChange={e=>setPwd(e.target.value)}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}                            
                            edge="end"
                            >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }                        
                    />
                    </form>                    
                    <Button variant='contained' style={{margin:'1vh'}} onClick={handleChangePassword}>Change Password</Button>
                </Grid>                
            </Grid>      
            <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Password Changed"
                action={
                  <React.Fragment>                  
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
              />
               
        </div>
    )
}