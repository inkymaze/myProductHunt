import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout, login, signup  } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user))

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting));
