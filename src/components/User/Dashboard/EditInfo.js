import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import useLocalStorage from '../../useLocalStorage';
// import ChangePassword from './ChangePassword'
import {DropzoneDialog} from 'material-ui-dropzone'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),      
    }    
  },
}));
export default function EditInfo() {
    const classes = useStyles();
    const [details,setDetails]=useLocalStorage('details','')
     // eslint-disable-next-line
    const [ email,setEmail ]=useLocalStorage('username','');
     // eslint-disable-next-line   
    const [files,setFiles]=React.useState(null)      
    const [opencv,setOpencv]=React.useState(false)
    // eslint-disable-next-line
    const [edit,setEdit]=useLocalStorage('edit',false);
    React.useEffect(() => {            
    }, [])
    const handleSubmit=()=>{      
      if(details.first===''||details.last===''||ValidateEmail(details.alt_email)||details.class_10_per<=30 || details.class_10_per>=100||details.class_10_year<2015 || details.class_10_year>=2020||details.class_12_per<=30 || details.class_12_per>=100||details.class_12_year<2015 || details.class_12_year>=2020||details.cgpa<3 ||details.cgpa>=10||details.backlogs<0 ||details.backlogs>8||details.pass_year<2020 || details.pass_year>2022){
        console.log('error');
      }
      else{
        console.log('accepted');
        setEdit(false)
      }
    }
    const ValidateEmail=(mail)=>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
      {
        return (false)
      }        
        return (true)
    }
    const handleUploadOpen=()=>{
      setOpencv(true)
    }
    const handleUploadClose=()=>{
      setOpencv(false)
    }    
    return (
        <div>             
            <Grid container
                direction="row"
                justify="center"               
                alignItems="flex-start"
                >
                <Grid item xs={12} style={{paddingTop:'1vh'}}>
                    <form className={classes.root} autoComplete="on">
                        <TextField required error={details.first===''} id="first-name" value={details.first} onChange={e=>setDetails({...details,first:e.target.value})} label="First Name" variant="outlined" />
                        <TextField required error={details.last===''} id="last-name" value={details.last} onChange={e=>setDetails({...details,last:e.target.value})} label="Last Name" variant="outlined"/>            
                        <TextField required id="email" defaultValue={email}
                            InputProps={{
                              readOnly: true,
                            }}  label="Email" variant="outlined"/>            
                        <TextField required error={details.phone.toString().length===10?false:true} id="phone" value={details.phone} onChange={e=>setDetails({...details,phone:parseInt(e.target.value)})} label="Phone No." variant="outlined"/>            
                        <TextField  id="alt-email" error={ValidateEmail(details.alt_email)} value={details.alt_email} onChange={e=>setDetails({...details,alt_email:e.target.value})} label="Alternate Email" variant="outlined"/>            
                    </form>                    
                </Grid>
                <Grid item xs={12}>
                  <form className={classes.root} autoComplete="on">
                    <TextField required id='class_10_marks' error={details.class_10_per<=30 || details.class_10_per>=100} value={details.class_10_per} onChange={e=>setDetails({...details,class_10_per:parseFloat(e.target.value)})} label='Class 10 Percentage' variant='outlined' />
                    <TextField required id='class_10_year' error={details.class_10_year<2015 || details.class_10_year>=2020} value={details.class_10_year} onChange={e=>setDetails({...details,class_10_year:parseInt(e.target.value)})} label='Class 10 Passing Year' variant='outlined' />
                  </form>
                </Grid>
                <Grid item xs={12}>
                  <form className={classes.root} autoComplete="on">
                    <TextField required id='class_12_marks' error={details.class_12_per<=30 || details.class_12_per>=100} value={details.class_12_per} onChange={e=>setDetails({...details,class_12_per:e.target.value})} label='Class 12 Percentage' variant='outlined' />
                    <TextField required id='class_12_year' error={details.class_12_year<2015 || details.class_12_year>=2020} value={details.class_12_year} onChange={e=>setDetails({...details,class_12_year:e.target.value})} label='Class 12 Passing Year' variant='outlined' />
                  </form>
                </Grid>
                <Grid item xs={12}>
                  <form className={classes.root} autoComplete="on">
                    <TextField required id='cgpa' error={details.cgpa<3 ||details.cgpa>=10} value={details.cgpa} onChange={e=>setDetails({...details,cgpa:parseFloat(e.target.value)})} label='CGPA' variant='outlined' />
                    <TextField required id='backlogs' error={details.backlogs<0 ||details.backlogs>8} value={details.backlogs} onChange={e=>setDetails({...details,backlogs:parseInt(e.target.value)})} label='No. of Backlogs' variant='outlined' />
                    <TextField required id='passing_year' error={details.pass_year<2020 || details.pass_year>2022} value={details.pass_year} onChange={e=>setDetails({...details,pass_year:parseInt(e.target.value)})} label='Passing Year' variant='outlined' />
                  </form>
                </Grid>
                <Grid item xs={12} >
                  <Button onClick={handleUploadOpen} style={{marginLeft:'1vh'}} variant='contained'>Upload Resume</Button>
                  {/* <Button variant='outlined' style={{marginLeft:'2vh'}} color='primary' onClick={e=>setChange(!change)} >Change Password</Button> */}
                  {/* {change===true &&(<ChangePassword />)} */}
                </Grid>
                <Grid item style={{margin:'1vh'}}>
                  <Button onClick={handleSubmit} variant='contained'>Save Changes</Button>                  
                </Grid>
                <DropzoneDialog
                    open={opencv}
                    onSave={e=>{setFiles(e);setOpencv(false)}}
                    acceptedFiles={['application/pdf']}
                    showPreviews={true}                 
                    filesLimit={1}
                    maxFileSize={2000000}
                    onClose={handleUploadClose}
                />                              
            </Grid>
        </div>
    )
}