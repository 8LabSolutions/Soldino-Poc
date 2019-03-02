import { connect } from 'react-redux';
import Page from '../presentational/Page';

const mapStateToProps = (state) => {
  return {
    logged: state.logged
  }
}

const PageContent = connect(mapStateToProps, null)(Page);


export default PageContent