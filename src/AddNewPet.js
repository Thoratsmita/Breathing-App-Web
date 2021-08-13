import { Container } from '@material-ui/core';
import React, { Component, useState } from 'react'
import {Link} from 'react-router-dom';
import QrReader from 'react-qr-reader';
import DataService from "./service/Data";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ScannerImage from "./assets/bitmap@2x.png"; 


class QRcodeScanner extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '50%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}


const AddNewPet = () => {

  const [name, setName] = useState([]);
  const [showQR, setshowQR] = useState(false);

  const ChangeName = (event) => {
    setName({ name: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {name};
    console.log(data);
    DataService.create("ProfileData", data);
    console.log(`Data sent to server: ${JSON.stringify(data)}`);
    setName("");
    };

  const onQRScanner = () => {
    showQR ? setshowQR(false) : setshowQR(true);
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(0),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(5),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    save: {
      width: "179px",
      height: "49px",
      margin: "3px 15px 11px 118px",
      padding: "14px 65px 13px 66px",
      borderRadius: "34.5px",
      backgroundColor: "#4de382",
      justifyContent: "right",
      color: "#ffffff",
      float: "right",
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <center>
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <Button onClick={onQRScanner}>
                <img src={ScannerImage} alt="Scanner image not loaded" />
              </Button>
                
              <br></br>
              <br></br>
              <br></br>
              <TextField
                required
                fullWidth
                id="standard-basic"
                label="Name"
                name="Name"
                className="Username"
                autoFocus
                onChange={ChangeName}
                value={name}
              />
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <center>
                <Button
               variant="outlined"
                  className="save"
                  type="submit"
                  className={classes.save}
                  onClick = {onSubmit}
                >
                  <b>Add</b>
                </Button>
              </center>
               
              </form>
          </div>
          {showQR ? <QRcodeScanner/> : null}
        </Container>
      </center>
    </div>
  )
}

export default AddNewPet;
