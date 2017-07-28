import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

class UserEditForm extends React.Component {

  render() {

    return (
      <div className='editForm'>
        <form>

          <TextInput
            name="username"
            label="username"
            placeholder={this.props.user.username}
            onChange={this.props.onChange}/>

          <input
            type="submit"
            disabled={this.props.saving}
            className="btn-primary"
            onClick={this.props.onSave}
            className="editUserNameinput"/>
        </form>
      </div>
    );
  }
}

UserEditForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default UserEditForm;



// import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import Modal from 'react-modal';
//
// const customStyles = {
//   overlay : {
//   position        : 'fixed',
//   top             : 0,
//   left            : 0,
//   right           : 0,
//   bottom          : 0,
//   background: 'rgba(255,255,255,0.97)',
//
//   zIndex          : 10
// },
// content : {
//   position                   : 'absolute',
//   height: "350px",
//   width: "350px",
//   top                        : '50%',
//   left                       : '50%',
//   "transform"                : 'translate(-50%, -50%)',
//   padding                    : '36px',
//   overflow                   : 'auto',
//   WebkitOverflowScrolling    : 'touch',
//   outline                    : 'none',
//
//   zIndex          : 11,
//   opacity         : 70,
//   transition      : 'opacity 0.5s'
// }
// };
// class UserEditForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modalIsOpen: true,
//
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.openModal = this.openModal.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//   }
//
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.loggedIn) {
//       this.props.history.push('/');
//     }
//   }
//
//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     });
//   }
//
//   openModal() {
//     this.props.clearErrors();
//     this.setState({modalIsOpen: true});
//   }
//
//   closeModal() {
//     this.props.clearErrors();
//     this.setState({modalIsOpen: false});
//     this.props.history.push('/');
//   }
//
//
//
//   handleSubmit(e) {
//     e.preventDefault();
//     const user = this.state;
//     // has to change below?
//     // this.props.processForm({user});
//
//   }
//
//
//   renderErrors() {
//     return(
//       <ul>
//         {this.props.errors.map((error, i) => (
//           <li key={`error-${i}`}>
//             {error}
//           </li>
//         ))}
//       </ul>
//     );
//   }
//
//   render() {
//     if (this.state.modalIsOpen === undefined){
//       this.openModal();
//     }
//
//     return (
//       <div>
//       <button className="modalCloseButton"  onClick={this.closeModal}>X</button>
//       <Modal
//           isOpen={this.state.modalIsOpen}
//           onRequestClose={this.closeModal}
//           style={customStyles}
//           contentLabel="UserEditForm Modal">
//
//         <div className="login-form-container">
//           <div onSubmit={this.handleSubmit} className="login-form-box">
//
//             <div className="login-form">
//                 <input type="text"
//                 value={this.state.image_url}
//                 onChange={this.update('image_url')}
//                 className="userIMAGE"
//                 placeholder={this.state.image_url}
//                   />
//                 <br/>
//
//                 <input type="text"
//                   value={this.state.username}
//                   onChange={this.update('username')}
//                   className="login-input"
//                   placeholder={this.state.username}
//                 />
//               <br/>
//                 <input type="password"
//                   value={this.state.password}
//                   onChange={this.update('password')}
//                   className="login-input"
//                   placeholder={this.state.password}
//                   />
//               <br/>
//
//               <div className="form-buttons">
//                 <input type="submit" className="signup-buttons" value="SUBMIT" onClick={(e) => this.handleSubmit(e)} />
//               <br/>
//               </div>
//               <div className="auth-errors">
//                 {this.renderErrors()}
//
//               </div>
//               </div>
//               </div>
//               </div>
//
//
//
//       </Modal>
//     </div>
//     );
//   }
//
// }
//
// export default withRouter(UserEditForm);
