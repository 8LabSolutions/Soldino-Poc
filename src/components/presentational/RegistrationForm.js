/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import { Typography } from '@material-ui/core';


const styles = () => ({
    container: {
      display: 'flex',
      width: '80%',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      alignContent: 'center',
    },
    textField: {
      width: '46%',
    },
    button: {
      width: '40%',
      marginTop: 16,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    toggle: {
      width: '50%',
      clear: 'both'
    },
    title:{
      width: '100%',
      textAlign: 'center'
    },
    all:{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
    }
  });

class RegistrationForm extends Component {
  state = {
      userType: 'citizen',
    }

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleType = this.handleType.bind(this)
  }

  handleChange(event){
    this.setState({
      ...this.state,
      [event.target.name] : event.target.value
    })
  }

  handleSubmit(event){

    event.preventDefault()
    //dispatchare l'azione di registrazione ed in caso reindirizzare
    //alla pagina dell'utente logged
    //const { userType, name, surname, email } = this.state
    var web3js = this.props.setWeb3
    console.log(web3js)
  }

  handleType(event, value){
    this.setState({
      ...this.state,
      userType: value
    })
  }
  render() {
    let props = this.props
    const { classes } = props;
    const { userType } = this.state;
    const citizenContent = () => (
      <div className={classes.container}>
        <TextField
          id="outlined-name"
          className={classes.textField}
          name="name"
          label="Name"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
        />

        <TextField
          id="outlined-surname"
          className={classes.textField}
          name="surname"
          label="Surname"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
        />

        <TextField
          id="outlined-email"
          className={classes.textField}
          name="email"
          label="email"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
        />
      </div>
    )

    const businessContent = () => (
      <div className={classes.container}>
        <TextField
          id="outlined-name"
          className={classes.textField}
          name="name"
          label="Name"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
        />

        <TextField
          id="outlined-pIva"
          className={classes.textField}
          name="pIva"
          label="pIva"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
        />

        <TextField
          id="outlined-address"
          className={classes.textField}
          name="address"
          label="address"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
        />
      </div>
    )
    const content = () => {
      if (userType === 'citizen')
        return citizenContent()
      else
        return businessContent()
    }
    return (
      <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
        <Typography className={classes.title} variant="headline">Registration</Typography>
        <div className={classes.all}>
          <ToggleButtonGroup
            className={classes.button}
            value={userType}
            exclusive
            onChange={this.handleType}
          >
            <ToggleButton className={classes.toggle} value="citizen">Citizen</ToggleButton>
            <ToggleButton className={classes.toggle} value="business">Business</ToggleButton>
          </ToggleButtonGroup>
        </div>
        {content()}
        <div className={classes.all}>
          <Button className={classes.button} variant="contained" color="primary" onClick={this.props.setWeb3}>Sign in</Button>
        </div>
      </form>
    )
  }
}

export default withStyles(styles)(RegistrationForm);
