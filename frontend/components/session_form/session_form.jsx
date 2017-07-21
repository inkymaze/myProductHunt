import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

const customStyle = {

    overlay: {
      position: 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(255, 255, 255, 0.75)'
    },
    content : {
      position                   : 'absolute',
      top                        : '40px',
      left                       : '40px',
      right                      : '40px',
      bottom                     : '40px',
      border                     : '1px solid #ccc',
      background                 : '#fff',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '4px',
      outline                    : 'none',
      padding                    : '20px',
      opacity                     : '0',

    }
};


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {modalOpen: false, formType: "login"};
    this.handleClick = this.handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
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

  handleClick(formType) {
     return () => {
       this.setState({modalOpen: true, formType: formType});
     };
   }

  onModalClose() {
    this.setState({modalOpen: false});
    customStyle.content.opacity = 0;
  }

  onModalOpen() {
    customStyle.content.opacity = 70;
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">SIGN UP</Link>;
    } else {
      return <Link to="/login">LOG IN</Link>;
    }
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


    return (
      <div>
        <Modal>
         isOpen={ this.state.modalOpen }
         onAfterOpen = { this.onModalOpen }
         onRequestClose={ this.onModalClose }
         style={ customStyle }
         contentLabel="Session Form Modal">

         <button
           className="closeModalButton"
           onClick={this.onModalClose}>
           {'X'}
         </button>
          <div className="login-form-container">
            <div onSubmit={this.handleSubmit} className="login-form-box">
              <div className="login-form">
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
                  <input type="submit" className="signup-buttons" value={this.props.formType} />
                <br/>
                  <input type="submit" className="signup-buttons" value="GUEST LOGIN" onClick={(e) => this.demoAccount(e)}/>
                </div>
                <br/>

                {this.renderErrors()}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(SessionForm);
