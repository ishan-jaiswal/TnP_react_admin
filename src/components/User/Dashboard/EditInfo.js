import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid,MenuItem,Select, Typography } from '@material-ui/core';
import useLocalStorage from '../../useLocalStorage';
import ChangePassword from './ChangePassword'
import {DropzoneDialog} from 'material-ui-dropzone'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import {KeyboardDatePicker} from '@material-ui/pickers/';
import AddCircleIcon from '@material-ui/icons/AddCircle';
//import Logo from '../../KIIT-Logo-side-w540.png';

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
    const [certifications,setCertifications]=React.useState([''])    
    const [projects,setProjects]=React.useState([{name:'',description:'',url:''}]);        
    const [workDetails,setWorkDetails]=React.useState([{name:'',startedOn:'',workType:''}]);    
    const [opencv,setOpencv]=React.useState(false)            
    const [change,setChange]=useLocalStorage('change',false);
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
    const handleChange=()=>{
      setChange(!change)
  }
    function handleEdit(){
      props.onChange(!props.edit)
    }
    const ValidateEmail=(mail)=>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)/.test(mail))
      {
        return (false)
      }        
        return (true)
    }
    const handleClick = () => {
      setOpen(true);
    };
    const handleCertificateListChange=(e,i)=>{
      var cert=certifications.slice()
      cert[i]=e.target.value
      setCertifications(cert)
    }
    const handleProjectsNameChange=(e,i)=>{
        var pro=projects.slice()
        pro[i].name=e.target.value
        setProjects(pro)
    }
    const handleProjectsDescriptionChange=(e,i)=>{
      var pro=projects.slice()
      pro[i].description=e.target.value
      setProjects(pro)
    }
    const handleProjectsUrlChange=(e,i)=>{
      var pro=projects.slice()
      pro[i].url=e.target.value
      setProjects(pro)
    }
    const handleWorkNameChange=(e,i)=>{
      var work=workDetails.slice()
      work[i].name=e.target.value
      setWorkDetails(work)
    }
    const handleWorkDateChange=(e,i)=>{
      var work=workDetails.slice()
      work[i].startedOn=e.target.value
      setWorkDetails(work)
      console.log(workDetails);
    }
    const handleWorkTypeChange=(e,i)=>{
      var work=workDetails.slice()
      work[i].workType=e.target.value
      setWorkDetails(work)
    }
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
                direction="column"
                justify="flex-start"               
                alignItems="center"
                >
                <Grid container direction='column' justify='flex-start' alignItems='center'>     
                    <Grid item xs={12} style={{paddingTop:'1vh'}}>     
                      <form className={classes.root} autoComplete="on">
                        <TextField required error={details.first===''} style={{width:'15vh'}} id="first-name" value={details.first} onChange={e=>setDetails({...details,first:e.target.value})} label="First Name" variant="outlined" />
                        {/* <img src={Logo} style={{paddingLeft:'85vh'}} alt='Logo' /> */}
                        <TextField required error={details.last===''} style={{width:'15vh'}} id="last-name" value={details.last} onChange={e=>setDetails({...details,last:e.target.value})} label="Last Name" variant="outlined"/>            
                      </form>
                    </Grid>                    
                    <Grid item xs={12} style={{paddingTop:'1vh'}}>                    
                      <form className={classes.root} autoComplete="on">
                        <TextField required id="email" defaultValue={email}
                            style={{width:'25vh'}}
                            InputProps={{
                              readOnly: true,
                            }}  label="Email" variant="outlined"/>     
                        <TextField  id="alt-email" error={ValidateEmail(details.alt_email)} value={details.alt_email} onChange={e=>setDetails({...details,alt_email:e.target.value})} label="Alternate Email" variant="outlined"/>                                
                        <TextField required style={{width:'20vh'}} error={details.phone.toString().length===10?false:true} id="phone" value={details.phone} onChange={e=>setDetails({...details,phone:parseInt(e.target.value)})} label="Phone No." variant="outlined"/>            
                      </form>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                <Typography variant='h5' style={{paddingLeft:'2vh',color:'darkgray'}}>Address</Typography>           
                  <form className={classes.root} autoComplete="on">
                      <TextField id='address-line-1' style={{width:'30vh'}} error={details.address1.length>=10?false:true} required onChange={e=>setDetails({...details,address1:e.target.value})} value={details.address1} label='Address Line 1' variant='outlined' />
                      <TextField id='address-line-2' style={{width:'30vh'}} error={details.address2.length>=10?false:true} required onChange={e=>setDetails({...details,address2:e.target.value})} value={details.address2} label='Address Line 2' variant='outlined' />
                      <TextField id='city' style={{width:'15vh'}} error={details.city.length>=5?false:true} required onChange={e=>setDetails({...details,city:e.target.value})} value={details.city} label='City' variant='outlined' />                      
                  </form>                  
                </Grid>
                <Grid item xs={12}>
                  <form className={classes.root} autoComplete="on">
                    <TextField id='state' style={{width:'20vh'}} error={details.state.length>=3?false:true} required onChange={e=>setDetails({...details,state:e.target.value})} value={details.state} label='State' variant='outlined' />
                    <TextField id='country' style={{width:'20vh'}} error={details.country.length>=5?false:true} required onChange={e=>setDetails({...details,country:e.target.value})} value={details.country} label='Country' variant='outlined' />
                    <TextField id='pincode' style={{width:'20vh'}} error={details.pincode.toString().length===6?false:true} required onChange={e=>setDetails({...details,pincode:e.target.value})} value={details.pincode} label='Pincode' variant='outlined' />
                  </form>
                </Grid>        
                <Grid item xs={12}>
                <Typography variant='h5' style={{paddingLeft:'2vh',color:'darkgray'}}>Class 10 Details</Typography>           
                  <form className={classes.root} autoComplete="on">
                    <TextField required style={{width:'20vh'}} id='class_10_marks' error={details.class_10_per<=30 || details.class_10_per>=100} value={details.class_10_per} onChange={e=>setDetails({...details,class_10_per:parseFloat(e.target.value)})} label='Class 10 Percentage' variant='outlined' />
                    <TextField required style={{width:'20vh'}} id='class_10_year' error={details.class_10_year<2015 || details.class_10_year>=2020} value={details.class_10_year} onChange={e=>setDetails({...details,class_10_year:parseInt(e.target.value)})} label='Class 10 Passing Year' variant='outlined' />
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
                      <TextField required id='class-10-school' style={{width:'30vh'}} error={details.class10_school.length>=10?false:true} value={details.class10_school} onChange={e=>setDetails({...details,class10_school:e.target.value})} variant='outlined' label='Class 10 School Name' />
                  </form>
                </Grid>
                <Grid item xs={12}>
                <Typography variant='h5' style={{paddingLeft:'2vh',color:'darkgray'}}>Class 12 Details</Typography>           
                  <form className={classes.root} autoComplete="on">
                    <TextField required style={{width:'20vh'}} id='class_12_marks' error={details.class_12_per<=30 || details.class_12_per>=100} value={details.class_12_per} onChange={e=>setDetails({...details,class_12_per:e.target.value})} label='Class 12 Percentage' variant='outlined' />
                    <TextField required style={{width:'20vh'}} id='class_12_year' error={details.class_12_year<2015 || details.class_12_year>=2020} value={details.class_12_year} onChange={e=>setDetails({...details,class_12_year:e.target.value})} label='Class 12 Passing Year' variant='outlined' />                                      
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
                      <TextField required style={{width:'30vh'}} id='class-12-school' error={details.class12_school.length>=10?false:true} value={details.class12_school} onChange={e=>setDetails({...details,class12_school:e.target.value})} variant='outlined' label='Class 12 School Name' />                      
                  </form>
                </Grid>
                <Grid container justify='flex-start' alignItems='center' direction='column'> 
                <Grid item xs={12}>
                <Typography variant='h5' style={{paddingLeft:'2vh',color:'darkgray'}}>College Details</Typography>           
                  <form className={classes.root} autoComplete="on">
                    <TextField required id='cgpa' style={{width:'10vh'}} error={details.cgpa<3 ||details.cgpa>=10} value={details.cgpa} onChange={e=>setDetails({...details,cgpa:parseFloat(e.target.value)})} label='CGPA' variant='outlined' />
                    <TextField required id='backlogs' style={{width:'15vh'}} error={details.backlogs<0 ||details.backlogs>8} value={details.backlogs} onChange={e=>setDetails({...details,backlogs:parseInt(e.target.value)})} label='No. of Backlogs' variant='outlined' />
                    <TextField required id='passing_year' style={{width:'20vh'}} error={details.pass_year<2020 || details.pass_year>2022} value={details.pass_year} onChange={e=>setDetails({...details,pass_year:parseInt(e.target.value)})} label='Passing Year' variant='outlined' />
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
                </Grid>
                <Grid container justify='flex-start' alignItems='center' direction='column'>                  
                      {certifications.map((item,i)=>{                        
                        return[
                          <Grid item xs={12}>
                            <form className={classes.root} autoComplete="on">                                                                  
                              <TextField label='Certification' style={{width:'30vh'}} variant='outlined' id='certification' error={certifications[i].length===0?true:false} value={certifications[i]}  onChange={e=>{handleCertificateListChange(e,i)}} />
                              {/* <Button variant='contained' color='primary' onClick={()=>setCertifications([...certifications,''])}>Add</Button> */}
                              {certifications.length-1===i&&(<Button onClick={()=>{setCertifications([...certifications,''])}}><AddCircleIcon /></Button>)}
                            </form>
                          </Grid>
                        ]
                      })}                      
                </Grid>                         
                <Typography variant='h5' style={{color:'darkgray',paddingRight:'72vh'}}>Project Details</Typography>           
                <Grid container justify='flex-start' alignItems='center' direction='column'>                
                  {projects.map((item,i)=>{
                    return[                      
                          <Grid item>
                            <form className={classes.root} autoComplete="on">
                              <TextField variant='outlined' label='Project Name' color='primary' error={projects[i].name.length<=2?true:false} value={projects[i].name} onChange={e=>handleProjectsNameChange(e,i)} />
                              <TextField variant='outlined' label='Project Description' style={{width:'30vh'}} color='primary' value={projects[i].description} error={projects[i].description.length<=10?true:false} onChange={e=>handleProjectsDescriptionChange(e,i)} />
                              <TextField variant='outlined' label='Project GitHub URL' color='primary' value={projects[i].url} error={ValidateUrl(projects[i].url)} onChange={e=>handleProjectsUrlChange(e,i)} />
                              {/* <Button variant='contained' color='primary' onClick={()=>setProjects([...projects,project])}>Add</Button>*/}
                              {projects.length-1===i&&(<Button onClick={()=>{setProjects([...projects,{name:'',description:'',url:''}])}}><AddCircleIcon /></Button>)}
                            </form>
                          </Grid>
                    ]                    
                  })}                         
                  </Grid>
                  <Typography variant='h5' style={{color:'darkgray',paddingRight:'53vh'}}>Work Experience</Typography>           
                  <Grid container justify='flex-start' alignItems='center' direction='column'>
                  {workDetails.map((item,i)=>{
                    return[
                      <Grid item > 
                          <form className={classes.root} autoComplete="on">
                            <TextField variant='outlined' label='Company Name' color='primary' value={workDetails[i].name} error={workDetails[i].name.length<=2?true:false} onChange={e=>handleWorkNameChange(e,i)} />                            
                            <TextField
                                id="date"
                                label="Started On"
                                type="date"
                                error={workDetails[i].startedOn.length===0?true:false}
                                value={workDetails[i].startedOn}
                                onChange={e=>handleWorkDateChange(e,i)}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            <TextField variant='outlined' label='Work Type' style={{width:'20vh'}} color='primary' value={workDetails[i].workType} error={workDetails[i].workType.length<=2?true:false} onChange={e=>handleWorkTypeChange(e,i)} />
                            {/* <Button variant='contained' color='primary' onClick={()=>setWorkDetails([...workDetails,workDetail])}>Add</Button> */}
                            {workDetails.length-1===i&&(<Button onClick={()=>{setWorkDetails([...workDetails,{name:'',startedOn:'',workType:''}])}}><AddCircleIcon /></Button>                                )}
                          </form>
                      </Grid>
                    ]
                  })}                                    
                  </Grid>
                <Grid item xs={12} style={{padding:'3vh'}}>
                  <Button onClick={handleUploadOpen} style={{marginLeft:'1vh'}} variant='contained'>Upload Resume</Button>
                  <Button variant='outlined' style={{marginLeft:'2vh'}} color='primary' onClick={e=>setChange(!change)} >Change Password</Button> 
                  {change===true &&(<ChangePassword change={change} onChange={handleChange} />)}
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