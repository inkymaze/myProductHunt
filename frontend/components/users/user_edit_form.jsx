import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

class UserEditForm extends React.Component {

  handleCloudinary(field) {
    return (e) => {
    e.preventDefault();
    cloudinary.openUploadWidget(window.CLOUDINARY_OPTIONS, function(error, results) {
        if(error) {
          console.log(error);
        } else {
          // issue = cant pass on user id to state
          //   console.log(this.props.user);
          // // console.log(field);
          // console.log(this.state);
          // this.props.user.id
          this.props.user[field] = results[0].url;
          console.log(this.props.user.id);
          this.setState({ [this.props.user]: {id: this.props.user.id, [field]: results[0].url }});
        }
      }.bind(this));
    };
  }



  render() {

    return (
      <div>
      <div className='editForm'>
        <form className="editFormDetails">
          <div className="editUsernameInput">
            <div>
              <h3 className='editListItem'>Name</h3>
            </div>
            <div>
              <TextInput name="username" label="username" placeholder={this.props.user.username}
                onChange={this.props.onChange}/>
            </div>
          </div>
          <div className="editUsernameInput">
            <div>
              <h3 className='editListItem'>Profile Header</h3>
            </div>
              <h3 className='editListItemDesc'>Upload an Image:</h3>
                <input
                  className="editProfileImage"
                  name="image_url"
                  onClick={this.handleCloudinary("image_url").bind(this)}
                  style={{backgroundImage:`url(${this.props.user.image_url})`}}
                  onChange={this.props.onChange}
                />
          </div>
        </form>
      </div>
      <div className="editSubmitButton">
        <button
          type="submit"
          onClick={this.props.onSave}
          className="edit-submit-button">UPDATE</button>
      </div>
    </div>
    );
  }
}

UserEditForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired

};

export default UserEditForm;
