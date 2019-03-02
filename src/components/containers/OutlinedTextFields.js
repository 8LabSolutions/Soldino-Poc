import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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

const types = [
  {
    value: 'Business',
    label: 'Business',
  },
  {
    value: 'Citizen',
    label: 'Citizen',
  },
];

class OutlinedTextFields extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Name"
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-surname"
          label="Surname"
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-select-types"
          select
          label="Select"
          margin="normal"
          variant="outlined"
        >
          {types.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      </form>
    );
  }
}


export default withStyles(styles)(OutlinedTextFields);