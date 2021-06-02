import React ,{useState,useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import DataService from "./services/Data";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


import './index.css';

const Propertyx = () => {
  const [area, setArea] = useState(0);
  const [BHK, setBHK] = useState(0);
  const [radioB, setradioB] = React.useState('Sale');
  const[country,setCountry] = useState(0);
  const[State, setState] = useState(0);
  const[district, setdistrict] = useState(0);
  const[city, setcity] = useState(0);
  const[description,setdescription] = useState(0);
  const[landmark,setlandmark] = useState([]);
  const[price,setprice] = useState([]);
  const[type,setType] = useState([]);
  const [amenities, setamenities] = React.useState({
    wifi: false,
    water_supply: false,
    security: false,
    shopping_center: false,
    power_backup: false,
    swimming_pool: false,
  });

 

  const ChangeArea =(event) =>
  {
    setArea({area:event.target.value});
  }
  const ChangeBHK =(event) =>
  {
    setBHK({BHK:event.target.value});
  }
  const ChangeradioB = (event) => {
    setradioB(event.target.value);
  };
 
  const handleChange = (event) => {
    setamenities({ ...amenities, [event.target.name]: event.target.checked });
  };

  const {wifi, water_supply, security, shopping_center, power_backup, swimming_pool } = amenities;
  
  const ChangeCountry =(event) =>
  {
    setCountry({country:event.target.value});
  }
  const ChangeDistrict =(event) =>
  {
    setdistrict({district:event.target.value});
  }
  const ChangeState =(event) =>
  {
    setState({State:event.target.value});
  }
  const ChangeCity =(event) =>
  {
    setcity({city:event.target.value});
  }
  const ChangeDescription =(event) =>
  {
    setdescription({description:event.target.value});
  }
  const ChangeLandmark =(event) =>
  {
    setlandmark({landmark:event.target.value});
  }
  const ChangePrice =(event) =>
  {
    setprice({price:event.target.value});
  }
  
  const ChangePropertyType =(event) =>
  {
    setType({type:event.target.value});
  }
  
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      
      margin:theme.spacing(3),
      
    },
    checkbox:{
      padding:'0 30px',
    },
    input: {
      display: 'none',
    },
    upload: {
     
      margin:'0 30px',
      height: '40px',
    },
    
  }));
  const classes = useStyles();
  
  
  
  //const [services, setServices] = useState([]);

 //const options = useEffect(() => {
   // DataService.getAll("servicesData").then((response) =>
    //  setServices(response)
   //);
 //}, []);
  

  return( 
  <div>
    <div className={classes.root}>
    <Paper elevation={3} />


    
    <br></br>
    <FormControl component="fieldset">
    <FormLabel component="legend">For:</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={radioB} onChange={ChangeradioB}>
        <FormControlLabel value="female" control={<Radio />} label="Sale" />
        <FormControlLabel value="male" control={<Radio />} label="Rent" />
        <FormControlLabel value="other" control={<Radio />} label="PG/hostel" />
      </RadioGroup>
    </FormControl>
    <br></br>
    <br></br>
    <form  noValidate autoComplete="off">
    <TextField required id="outlined-required" label="Property Type" defaultValue=" " variant="outlined" onChange ={ChangePropertyType} />
  
    <TextField required id="outlined-required" label="Area( in sq/ft)" defaultValue=" " variant="outlined" onChange ={ChangeArea} />
    <br></br>  
    <br></br>
      <TextField required id="outlined-required" label="BHK" defaultValue=" " variant="outlined" onChange ={ChangeBHK} />
    </form>
    <br></br>
    <br></br>

      <FormControl component="fieldset" className={classes.checkbox}>
      <FormLabel component="legend">Amenities</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={wifi} onChange={handleChange} name="wifi" />}
          label="Wifi"
        />
        <FormControlLabel
          control={<Checkbox checked={water_supply} onChange={handleChange} name="water_supply" />}
          label="Water Supply 24*7"
        />
        <FormControlLabel
          control={<Checkbox checked={security} onChange={handleChange} name="security" />}
          label="Security"
        />
        <FormControlLabel
          control={<Checkbox checked={shopping_center} onChange={handleChange} name="shopping_center" />}
          label="Shopping Center"
        />
        <FormControlLabel
          control={<Checkbox checked={power_backup} onChange={handleChange} name="power_backup" />}
          label="Power Backup"
        />
        <FormControlLabel
          control={<Checkbox checked={swimming_pool} onChange={handleChange} name="swimming_pool" />}
          label="Swimming Pool"
        />
      </FormGroup>
      </FormControl>


  </div>
 
   <form  noValidate autoComplete="off">
    
    <TextField required id="outlined-required" label="Country" defaultValue=" " variant="outlined" onChange ={ChangeCountry} />
    <TextField required id="outlined-required" label="State" defaultValue=" " variant="outlined" onChange ={ChangeState} />
      <br></br>
      <br></br>
    <TextField required id="outlined-required" label="District" defaultValue=" " variant="outlined" onChange ={ChangeDistrict} />
    <TextField required id="outlined-required" label="City" defaultValue=" " variant="outlined" onChange ={ChangeCity} />
      <br></br>
      <br></br>
    <TextField id="outlined-multiline-static" label="Full Address" multiline rows={4} fullWidth = "true" defaultValue=" " variant="outlined" onChange={ChangeDescription}/>
        <br></br>
        <br></br>
    <TextField id="outlined-multiline-flexible" label="LandMark" multiline rowsMax={4} FullWidth = "true" onChange={ChangeLandmark}variant="outlined" />
   
    <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span" className={classes.upload}>
          Upload
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
     
    <br></br>
    <br></br>
    <TextField id="outlined-multiline-flexible" label="Price" multiline FullWidth = "true" onChange={ChangePrice} variant="outlined" />
  </form>  
  <br></br>
  <br></br>
  <Button variant="contained" color="primary">Submit</Button>
<Paper/>
      
        

  
  
  </div>);
};

export default Propertyx;

//{services.map((service,index)=>
  //(
  //  <h1>{service.title}</h1>
 // )
// )}
    