import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid,MenuItem,Select } from '@material-ui/core';
import useLocalStorage from '../../useLocalStorage';
import ChangePassword from './ChangePassword'
import {DropzoneDialog} from 'material-ui-dropzone'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import {KeyboardDatePicker} from '@material-ui/pickers/';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Logo from '../../KIIT-Logo-side-w540.png';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),      
    }    
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
export default function EditInfo(props) {
    const classes = useStyles();
    const [details,setDetails]=useLocalStorage('details','')
     // eslint-disable-next-line
    const [ email,setEmail ]=useLocalStorage('username','');
     // eslint-disable-next-line   
    const [files,setFiles]=React.useState(null)      
    const [hidden,setHidden]=React.useState([false])
    const [certificate,setCertificate]=React.useState('');
    const [certifications,setCertifications]=React.useState([])
    const [hidden1,setHidden1]=React.useState([false]);
    const [projects,setProjects]=React.useState([]);
    const [project,setProject]=React.useState({name:'',description:'',url:''});
    const [hidden2,setHidden2]=React.useState([false]);
    const [workDetails,setWorkDetails]=React.useState([]);
    const [workDetail,setWorkDetail]=React.useState({name:'',startedOn:new Date(),workType:''});
    const [opencv,setOpencv]=React.useState(false)            
    const [change,setChange]=React.useState(false);
    const [open, setOpen] = React.useState(false);    
    React.useEffect(() => {            
    }, [change])    
    const handleSubmit=()=>{      
      if(details.first===''||details.last===''||ValidateEmail(details.alt_email)||details.class_10_per<=30 || details.class_10_per>=100||details.class_10_year<2015 || details.class_10_year>=2020||details.class_12_per<=30 || details.class_12_per>=100||details.class_12_year<2015 || details.class_12_year>=2020||details.cgpa<3 ||details.cgpa>=10||details.backlogs<0 ||details.backlogs>8||details.pass_year<2020 || details.pass_year>2022){
        console.log('error');
      }
      else{
        console.log('accepted');
        console.log(certifications); 
        setTimeout(() => {
          handleEdit()         
        }, 3000);        
        handleClick()
      }
    }
    function handleEdit(){
      props.onChange(!props.edit)
    }
    const ValidateEmail=(mail)=>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
      {
        return (false)
      }        
        return (true)
    }
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    const ValidateUrl=(url)=>{
      if(/^(?:(?:https?|http):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(url))
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
                <Grid container direction='column' justify='flex-start' alignItems='flex-start'>
                <form className={classes.root} autoComplete="on">
                    <Grid item xs={12} style={{paddingTop:'1vh'}}>                  
                        <TextField required error={details.first===''} id="first-name" value={details.first} onChange={e=>setDetails({...details,first:e.target.value})} label="First Name" variant="outlined" />
                        <img src={Logo} style={{paddingLeft:'85vh'}} alt='Logo' />
                    </Grid>
                    <Grid item xs={12} style={{paddingTop:'1vh'}}>
                        <TextField required error={details.last===''} id="last-name" value={details.last} onChange={e=>setDetails({...details,last:e.target.value})} label="Last Name" variant="outlined"/>            
                    </Grid>
                    <Grid item xs={12} style={{paddingTop:'1vh'}}>
                        <TextField required id="email" defaultValue={email}
                            InputProps={{
                              readOnly: true,
                            }}  label="Email" variant="outlined"/>            
                    </Grid>
                    <Grid item xs={12} style={{paddingTop:'1vh'}}>
                        <TextField required error={details.phone.toString().length===10?false:true} id="phone" value={details.phone} onChange={e=>setDetails({...details,phone:parseInt(e.target.value)})} label="Phone No." variant="outlined"/>            
                    </Grid>
                    <Grid item xs={12} style={{paddingTop:'1vh'}}>
                        <TextField  id="alt-email" error={ValidateEmail(details.alt_email)} value={details.alt_email} onChange={e=>setDetails({...details,alt_email:e.target.value})} label="Alternate Email" variant="outlined"/>                                
                    </Grid>
                </form>                    
                </Grid>
                <Grid item xs={12}>
                  <form className={classes.root} autoComplete="on">
                      <TextField id='address-line-1' error={details.address1.length>=10?false:true} required onChange={e=>setDetails({...details,address1:e.target.value})} value={details.address1} label='Address Line 1' variant='outlined' />
                      <TextField id='address-line-2' error={details.address2.length>=10?false:true} required onChange={e=>setDetails({...details,address2:e.target.value})} value={details.address2} label='Address Line 2' variant='outlined' />
                      <TextField id='city' error={details.city.length>=5?false:true} required onChange={e=>setDetails({...details,city:e.target.value})} value={details.city} label='City' variant='outlined' />
                      <TextField id='state' error={details.state.length>=3?false:true} required onChange={e=>setDetails({...details,state:e.target.value})} value={details.state} label='State' variant='outlined' />
                      <TextField id='country' error={details.country.length>=5?false:true} required onChange={e=>setDetails({...details,country:e.target.value})} value={details.country} label='Country' variant='outlined' />
                      <TextField id='pincode' error={details.pincode.toString().length===6?false:true} required onChange={e=>setDetails({...details,pincode:e.target.value})} value={details.pincode} label='Pincode' variant='outlined' />
                  </form>                  
                </Grid>
                <Grid item xs={12}>
                  <form className={classes.root} autoComplete="on">
                      
                  </form>
                </Grid>
                <Grid item xs={12}>
                  <form className={classes.root} autoComplete="on">
                    <TextField required id='class_10_marks' error={details.class_10_per<=30 || details.class_10_per>=100} value={details.class_10_per} onChange={e=>setDetails({...details,class_10_per:parseFloat(e.target.value)})} label='Class 10 Percentage' variant='outlined' />
                    <TextField required id='class_10_year' error={details.class_10_year<2015 || details.class_10_year>=2020} value={details.class_10_year} onChange={e=>setDetails({...details,class_10_year:parseInt(e.target.value)})} label='Class 10 Passing Year' variant='outlined' />
                    <Select                        
                        value={details.type10}
                        required
                        variant='outlined'                                                
                        onChange={e=>setDetails({...details,type10:e.target.value})}
                        label="Class 10 Result Type"
                        error={details.type10===''?true:false}
                      >
                        <MenuItem value="" >None</MenuItem>
                        <MenuItem value={'Percent'}>Percent</MenuItem>
                        <MenuItem value={'CGPA'}>CGPA</MenuItem>                        
                      </Select>
                      <TextField required id='class-10-school' error={details.class10_school.length>=10?false:true} value={details.class10_school} onChange={e=>setDetails({...details,class10_school:e.target.value})} variant='outlined' label='Class 10 School Name' />
                  </form>
                </Grid>
                <Grid item xs={12}>
                  <form className={classes.root} autoComplete="on">
                    <TextField required id='class_12_marks' error={details.class_12_per<=30 || details.class_12_per>=100} value={details.class_12_per} onChange={e=>setDetails({...details,class_12_per:e.target.value})} label='Class 12 Percentage' variant='outlined' />
                    <TextField required id='class_12_year' error={details.class_12_year<2015 || details.class_12_year>=2020} value={details.class_12_year} onChange={e=>setDetails({...details,class_12_year:e.target.value})} label='Class 12 Passing Year' variant='outlined' />                                      
                    <Select                        
                        value={details.type12}
                        variant='outlined'                                                
                        required
                        onChange={e=>setDetails({...details,type12:e.target.value})}
                        label="Class 12 Result Type"
                        error={details.type12===''?true:false}
                      >
                        <MenuItem value="" >None</MenuItem>
                        <MenuItem value={'Percent'}>Percent</MenuItem>
                        <MenuItem value={'CGPA'}>CGPA</MenuItem>                        
                      </Select>
                      <TextField required id='class-12-school' error={details.class12_school.length>=10?false:true} value={details.class12_school} onChange={e=>setDetails({...details,class12_school:e.target.value})} variant='outlined' label='Class 12 School Name' />                      
                  </form>
                </Grid>
                <Grid item xs={12}>
                  <form className={classes.root} autoComplete="on">
                    <TextField required id='cgpa' error={details.cgpa<3 ||details.cgpa>=10} value={details.cgpa} onChange={e=>setDetails({...details,cgpa:parseFloat(e.target.value)})} label='CGPA' variant='outlined' />
                    <TextField required id='backlogs' error={details.backlogs<0 ||details.backlogs>8} value={details.backlogs} onChange={e=>setDetails({...details,backlogs:parseInt(e.target.value)})} label='No. of Backlogs' variant='outlined' />
                    <TextField required id='passing_year' error={details.pass_year<2020 || details.pass_year>2022} value={details.pass_year} onChange={e=>setDetails({...details,pass_year:parseInt(e.target.value)})} label='Passing Year' variant='outlined' />
                    <Select                        
                        value={details.branch}
                        variant='outlined'                                                
                        required
                        onChange={e=>setDetails({...details,branch:e.target.value})}
                        label="Branch"
                        error={details.branch===''?true:false}
                      >
                        <MenuItem value="" >None</MenuItem>
                        <MenuItem value={'CSE'}>CSE</MenuItem>
                        <MenuItem value={'IT'}>IT</MenuItem>                        
                        <MenuItem value={'CSSE'}>CSSE</MenuItem>                        
                        <MenuItem value={'EEE'}>EEE</MenuItem>                        
                        <MenuItem value={'Civil'}>Civil</MenuItem>                        
                        <MenuItem value={'Mechanical'}>Mechanical</MenuItem>                        
                      </Select>
                  </form>
                </Grid>
                <Grid item xs={12} >
                  <form className={classes.root} autoComplete="on">                                                          
                      {hidden.map((item,i)=>{                        
                        return[
                          <TextField label='Certification' variant='outlined' id='certification' error={certificate.length===0?true:false}  onChange={e=>{setCertificate(e.target.value)}} />,
                          <Button variant='contained' color='primary' onClick={()=>setCertifications([...certifications,certificate])}>Add</Button>
                        ]
                      })}
                      <Button onClick={()=>{setHidden([...hidden,false]);setCertificate('')}}><AddCircleIcon /></Button>
                  </form>
                </Grid>                         
                  <Grid container justify='center' alignItems='flex-start' direction='column'>
                  {hidden1.map((item,i)=>{
                    return[
                      <Grid item > 
                          <form className={classes.root} autoComplete="on">
                            <TextField variant='outlined' label='Project Name' color='primary' error={project.name.length<=2?true:false} onChange={e=>setProject({...project,name:e.target.value})} />
                            <TextField variant='outlined' label='Project Description' color='primary' error={project.description.length<=10?true:false} onChange={e=>setProject({...project,description:e.target.value})} />
                            <TextField variant='outlined' label='Project GitHub URL' color='primary' error={ValidateUrl(project.url)} onChange={e=>setProject({...project,url:e.target.value})} />
                            <Button variant='contained' color='primary' onClick={()=>setProjects([...projects,project])}>Add</Button>
                          </form>
                      </Grid>
                    ]
                  })}                  
                  <Button onClick={()=>{setHidden1([...hidden1,false]);setProject({name:'',description:'',url:''})}}><AddCircleIcon /></Button>                                
                  </Grid>
                  <Grid container justify='space-between' alignItems='flex-start' direction='column'>
                  {hidden2.map((item,i)=>{
                    return[
                      <Grid item > 
                          <form className={classes.root} autoComplete="on">
                            <TextField variant='outlined' label='Company Name' color='primary' error={workDetail.name.length<=2?true:false} onChange={e=>setWorkDetail({...workDetail,name:e.target.value})} />                            
                            {/* <KeyboardDatePicker
                                // margin="normal"                                
                                label="Stated On"
                                format="MM/dd/yyyy"                                
                                onChange={date=>setWorkDetail({...workDetail,startedOn:date})}
                                KeyboardButtonProps={{
                                  'aria-label': 'change date',
                                }}
                              /> */}
                              <TextField
                                id="date"
                                label="Started On"
                                type="date"
                                // error={workDetail.startedOn===new Date()?true:false}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            <TextField variant='outlined' label='Work Type' color='primary' error={workDetail.workType<=2?true:false} onChange={e=>setWorkDetail({...workDetail,workType:e.target.value})} />
                            <Button variant='contained' color='primary' onClick={()=>setWorkDetails([...workDetails,workDetail])}>Add</Button>
                          </form>
                      </Grid>
                    ]
                  })}                  
                  <Button onClick={()=>{setHidden2([...hidden2,false]);setWorkDetail({name:'',startedOn:new Date(),workType:''})}}><AddCircleIcon /></Button>                                
                  </Grid>
                <Grid item xs={12} >
                  <Button onClick={handleUploadOpen} style={{marginLeft:'1vh'}} variant='contained'>Upload Resume</Button>
                  <Button variant='outlined' style={{marginLeft:'2vh'}} color='primary' onClick={e=>setChange(!change)} >Change Password</Button> 
                  {change===true &&(<ChangePassword />)}
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
                <Snackbar
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Changes Saved"
                    action={
                      <React.Fragment>                       
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </React.Fragment>
                    }
                  />                        
            </Grid>
        </div>
    )
}