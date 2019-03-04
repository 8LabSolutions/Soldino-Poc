import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid'
//import Register from '../containers/Register';
import GovPageContainer from '../containers/GovPageContainer';
import MetaMaskGuide from './MetaMaskGuide'

class Page extends Component {
  render() {
    let props = this.props
    if(props.logged === false){
      return (
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={6}>
            ciao
          </Grid>
          <Grid item xs={6}>
            <center>
              <MetaMaskGuide />
            </center>
          </Grid>
        </Grid>
      )
    }else{
      return (
        <div>
          <h1>Government page</h1>
          <div><GovPageContainer /></div>
        </div>
      )
    }
  }
}

export default Page;
