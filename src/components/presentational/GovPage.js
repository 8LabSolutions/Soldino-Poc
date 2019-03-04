import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import ButtonAppBar from './ButtonAppBar';
import Error from './Error';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '30px',
  },
  textField: {
    width: '20em',
    display: 'block',
    height: '3rem',
    marginTop: '2%',
    margin: 'auto',
    background: 'white',
    borderRadius: 3,
    fontSize: '1.2em',
    color: 'black',
  },
  button: {
    backgroundColor: '#801336',
    color: 'white',
    display: 'block',
    margin: 'auto',
    marginTop: '1rem'
  },
  dense: {
    marginTop: 16,
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
    amount: ''
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
    var { address, amount } = this.state
    if(event.target.name == "mint") {
      mint(address, amount)
    }
    if(event.target.name == "distribute") {
      distribute(address, amount)
    }
  }

  render() {
    var { logged, classes } = this.props;
    var { address, amount } = this.state

    if(logged === true) {
      return (
        <div>
          <div className="container">
            <ButtonAppBar />
            <input
              id="address"
              className={classes.textField}
              name="address"
              label="Address"
              placeholder="Address"
              onChange={this.handleChange}
              value={address}
            />

            <input
              id="amount"
              className={classes.textField}
              type="number"
              name="amount"
              label="Amount"
              onChange={this.handleChange}
              placeholder="0"
              value={amount}
            />
            <div className="container">
              <Button name="mint" variant="contained" className={classes.button} onClick={this.handleClick}>mint</Button>
              <Button name="distribute" variant="contained" className={classes.button} onClick={this.handleClick}>distribute</Button>
            </div>

          </div>
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