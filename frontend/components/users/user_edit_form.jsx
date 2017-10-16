import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

class UserEditForm extends React.Component {
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
                <TextInput
                  className="editProfileImage"
                  name="image_url"
                  placeholder="Paste an image address here"
                  onChange={this.props.onChange}/>
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
