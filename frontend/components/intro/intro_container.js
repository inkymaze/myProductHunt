import { connect } from 'react-redux';
import { logout, login, signup  } from '../../actions/session_actions';
import Welcome from './intro';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
