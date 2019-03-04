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
      email: '',
      address: '',
      VATNumber: '',
      name: ''
  }

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      ...this.state,
      [event.target.name] : event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let { email, address, VATNumber, name } = this.state
    this.props.registerBusiness(email, address, VATNumber, name)
  }
  /*
  handleType(event, value){
    this.setState({
      ...this.state,
      userType: value
    })
  }
  */
  render() {
    let props = this.props
    const { classes } = props
    return (
      <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
        <Typography className={classes.title} variant="headline">Registration</Typography>
        <div className={classes.all}>
          <ToggleButtonGroup
            className={classes.button}
            value="business"
            exclusive
            onChange={this.handleType}
          >
            <ToggleButton className={classes.toggle} value="citizen">Citizen</ToggleButton>
            <ToggleButton className={classes.toggle} value="business">Business</ToggleButton>
          </ToggleButtonGroup>

          <TextField
            id="address"
            className={classes.textField}
            name="address"
            label="Address"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.address}
          />

          <TextField
            id="email"
            className={classes.textField}
            name="email"
            label="Email"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.email}
          />

          <TextField
            id="vatnumber"
            className={classes.textField}
            name="VATNumber"
            label="VATNumber"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.VATNumber}
          />

          <TextField
            id="name"
            className={classes.textField}
            name="name"
            label="name"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <div className={classes.all}>
          <Button className={classes.button} variant="contained" color="primary" type="submit">Sign in</Button>
        </div>
      </form>
    )
  }
}

export default withStyles(styles)(RegistrationForm);
