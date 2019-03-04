import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import ButtonAppBar from './ButtonAppBar';
import Error from './Error';

const styles = theme => ({
  container: {
    display: 'flex',
    height: '10%',
    width: 'auto',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignContent: 'center',
    margin: '30px',
  },
  textField: {
    width: '50%',
    marginTop: '2%',
    marginLeft: '30%',
    marginRight: '30%',
    background: 'white',
    borderRadius: 3,
    //border: 0,
    color: 'white',
    height: 'auto',
    //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  button: {
    width: '50%',
    marginTop: 16,
    backgroundColor: '#801336',
    color: 'white',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  toggle: {
    width: '50%',
    clear: 'both',
    color: 'white',
  },
  title:{
    color: "white",
    width: '100%',
    textAlign: 'center'
  },
  all:{
    width: '50%',
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



class GovPage extends Component {
  state = {
    address: '',
    ammount: 0
  }

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick= this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      ...this.state,
      [event.target.name] : event.target.value
    })
  }

  handleClick(event) {
    let {mint, distribute } = this.props;
    var { address, ammount } = this.state
    if(event.target.name == "mint") {
      mint(address, ammount)
    }
    if(event.target.name == "distribute") {
      distribute(address, ammount)
    }
  }

  render() {
    var { logged, classes } = this.props;
    var { address, ammount } = this.state

    if(logged === true) {
      return (
        <div>
          <ButtonAppBar />
          <TextField
            id="address"
            className={classes.textField}
            name="address"
            label="Address"
            variant="outlined"
            onChange={this.handleChange}
            value={address}
          />

          <TextField
            id="ammount"
            className={classes.textField}
            name="ammount"
            label="Ammount"
            variant="outlined"
            onChange={this.handleChange}
            type="number"
            value={ammount}
          />
          <Button name="mint" variant="contained" color="primary" onClick={this.handleClick}>mint</Button>
          <Button name="distribute" variant="contained" color="primary" onClick={this.handleClick}>distribute</Button>
        </div>
      )
    }
    else {
      return (
        <div>
          <Error message="Sign in to see this page." />
        </div>
      )
    }

  }
}

export default withStyles(styles)(GovPage);
