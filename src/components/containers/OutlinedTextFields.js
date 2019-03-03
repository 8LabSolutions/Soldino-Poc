/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class OutlinedTextFields extends React.Component {


  state={
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
    console.log('informazioni spedite alla funzione di backend')
    console.log(this.state)
    //dispatchare l'azione di registrazione ed in caso reindirizzare
    //alla pagina dell'utente logged
  }

  handleType(event){
    this.setState({
      ...this.state,
      userType: event.target.value
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          name="name"
          label="Name"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
        />

        <TextField
          id="outlined-surname"
          name="surname"
          label="Surname"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
        />

        <TextField
          id="outlined-email"
          name="email"
          label="email"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
        />


        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
          Sign in
        </Button>
      </form>
    );
  }
}


export default withStyles(styles)(OutlinedTextFields);
