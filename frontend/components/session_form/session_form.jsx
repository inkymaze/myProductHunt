import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
  position        : 'fixed',
  top             : 0,
  left            : 0,
  right           : 0,
  bottom          : 0,
  background: 'rgba(255,255,255,0.97)',
  zIndex          : 10
 },
  content : {
  position                   : 'absolute',
  height: "350px",
  width: "350px",
  top                        : '50%',
  left                       : '50%',
  "transform"                : 'translate(-50%, -50%)',
  padding                    : '36px',
  overflow                   : 'auto',
  WebkitOverflowScrolling    : 'touch',
  outline                    : 'none',
  zIndex          : 11,
  opacity         : 70,
  transition      : 'opacity 0.5s'
 }
};

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      username: '',
      password: '',
      image_url: "https://res.cloudinary.com/dbyoymbpd/image/upload/v1503434829/original_msduei.jpg"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  openModal() {
    this.props.clearErrors();
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.props.clearErrors();
    this.setState({modalIsOpen: false});
    this.props.history.push('/');
  }

  demoAccount(e){
   this.setState({
     username: "maggie",
     password: "secretpw"
   });
   const user = { username: "maggie", password: "secretpw" };
   this.props.demo({ user });
 }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    if (this.state.modalIsOpen === undefined){
      this.openModal();
    }


    return (
      <div>
      <button className="modalCloseButton"  onClick={this.closeModal}>X</button>
      <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="SessionForm Modal">

        <div className="login-form-container">
          <div onSubmit={this.handleSubmit} className="login-form-box">

            <div className="login-form">
                <div className="auth-prompt">
                  Please {this.props.formType} to begin hunting!
                </div>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Username"
                />
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                  />
              <br/>

              <div className="form-buttons">
                <input type="submit" className="signup-buttons" value={this.props.formType} onClick={(e) => this.handleSubmit(e)} />
              <br/>
                <input type="submit" className="signup-buttons" value="GUEST LOGIN" onClick={(e) => this.demoAccount(e)}/>
              </div>
              <br/>
              <div className="auth-errors">
                {this.renderErrors()}

              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
    );
  }

}

export default withRouter(SessionForm);
