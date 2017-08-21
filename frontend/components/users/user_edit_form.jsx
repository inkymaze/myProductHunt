import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

class UserEditForm extends React.Component {

  render() {

    return (
      <div className='editForm'>
        <form>
          <div className="editUsernameInput">
            <div>
              <h3 className='editUserNameListItem'>Username:</h3>
            </div>
            <div>
              <TextInput
              name="username"
              label="username"
              placeholder={this.props.user.username}
              onChange={this.props.onChange}/>
            </div>
          </div>
          <div className="editSubmitButton">
            <input
              type="submit"
              disabled={this.props.saving}
              onClick={this.props.onSave}
              className="edit-submit-button"/>
          </div>
        </form>
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
