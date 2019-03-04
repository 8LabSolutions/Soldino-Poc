/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import { Typography } from '@material-ui/core';


const styles = theme => ({
  container: {
    display: 'flex',
    height: '10%',
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignContent: 'center',

  },
  textField: {
    width: 'auto',
    background: 'grey',
    borderRadius: 3,
    //border: 0,
    color: 'white',
    height: 'auto',
    padding: 'auto',
    //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  button: {
    width: '40%',
    marginTop: 16,
    backgroundColor: '#decba4',
    color: '#3e5151',
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
    color: "white",
    width: '100%',
    textAlign: 'center'
  },
  all:{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
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

    const businessContent = () => (
      <div className={classes.container}>
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
      </div>
    )
    const content = () => {
      /*if (userType==='citizen')
        return citizenContent()
      else*/
        return businessContent()
    }
    return (
      <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
        <Typography className={classes.title} variant="headline">Registration</Typography>
        <div className={classes.all}>
          <ToggleButtonGroup
            className={classes.button}
            //value={userType}
            exclusive
            onChange={this.handleType}
          >
            <ToggleButton className={classes.toggle} value="citizen">Citizen</ToggleButton>
            <ToggleButton className={classes.toggle} value="business">Business</ToggleButton>
          </ToggleButtonGroup>
        </div>
        {content()}
        <div className={classes.all}>
          <Button className={classes.button} variant="contained" onClick={this.handleSubmit}>Sign in</Button>
        </div>
      </form>
    )
  }
}

export default withStyles(styles)(RegistrationForm);
