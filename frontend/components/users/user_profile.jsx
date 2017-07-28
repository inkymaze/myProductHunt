import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserEditForm from './user_edit_form';


class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      user: {}};
      this.updateUserState = this.updateUserState.bind(this);
      this.toggleEdit = this.toggleEdit.bind(this);
      this.saveUser = this.saveUser.bind(this);
  }

  updateUserState(event) {
   const field = event.target.name;
   const user = this.state.user;
   user.id = this.props.userId;
   user[field] = event.target.value;
   return this.setState({user: user});
 }


  componentDidMount() {
    if (!this.props.user) {
      this.props.requestSingleUser(this.props.userId);
    }
  }

  saveUser(event) {
   event.preventDefault();
   this.props.requestUpdateUser(this.state.user)
   .then(this.setState({isEditing: false}));
 }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId)
     {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }


  }

  toggleEdit() {
   this.setState({isEditing: !this.state.isEditing});
 }



  render() {
    const { user } = this.props;
    if (!user) return null;

    console.log(this.props);


    if (this.state.isEditing) {
      return (
      <div className="editFormCont">
        <h1 className='editUserTitle'>Edit Info Below</h1>
        <UserEditForm user={this.props.user}
          onSave={this.saveUser}
          onChange={this.updateUserState}/>
      </div>
    );
    }


    return (
      <div className="userProfileCont">
        <section className="user-detail">
          <div className="user-show-info">
            <figure className="userProfileImage">
              <img src={user.image_url} alt={user.username} />
            </figure>
            <ul>
              <li className="user-show-name">@{user.username}</li>

            </ul>
          </div>
          <div className="user-show-info">
          <div className="editUserinfo">
            <button className="edit-form-button" onClick={this.toggleEdit}>EDIT</button>
          </div>
        </div>
        </section>

        <section className="profileUpvotedProductsList">
        </section>
      </div>
    );
  }
}



export default withRouter(UserProfile);


// <Link to={`/user/update/${user.id}`} style={{color:'black'}}>
//   Edit
// </Link>
