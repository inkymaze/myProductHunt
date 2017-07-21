import React from 'react';


class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
              <input type="submit" className="signup-buttons" value={this.props.formType} onClick={(e) => this.handleSubmit(e)} />
            <br/>
              <input type="submit" className="signup-buttons" value="GUEST LOGIN" onClick={(e) => this.demoAccount(e)}/>
            </div>
            <br/>

            {this.renderErrors()}
          </div>
        </div>
      </div>
    );
  }

}
