import { connect } from 'react-redux';

import { login, clearErrors, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {


  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: user => dispatch(processForm(user)),

    demo: user => dispatch(login(user)),

    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
