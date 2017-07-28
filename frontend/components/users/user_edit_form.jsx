import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

class UserEditForm extends React.Component {

  render() {

    return (
      <div className='editForm'>
        <form>
          <div className="editUsernameInput">
            <div>
              <h2 className='editUserNameListItem'>Username:</h2>
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
              className="btn-primary"
              onClick={this.props.onSave}
              className="edit-submit-button"/>
          </div>
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
