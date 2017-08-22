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
          this.props.user.image_url = results[0].url;
          this.setState({ [field]: results[0].url });
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
              <h3 className='editListItem'>Headline</h3>
            </div>
            <div>
              <TextInput name="headline" label="headline" placeholder={this.props.user.headline}
                onChange={this.props.onChange}/>
            </div>
          </div>
          <div className="editUsernameInput">
            <div>
              <h3 className='editListItem'>Profile Header</h3>
            </div>
              <h3 className='editListItemDesc'>Upload an Image:</h3>
            <button
              className="editProfileImage"
              name="image_url"
              label="image_url"
              onClick={this.handleCloudinary("image_url").bind(this)}
              onChange={this.props.onChange}
              style={{backgroundImage:`url(${this.props.user.image_url})`}}>
            </button>
          </div>

        </form>

      </div>
      <div className="editSubmitButton">
        <input
          type="submit"
          onClick={this.props.onSave}
          className="edit-submit-button" placeholder="Update"/>
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
