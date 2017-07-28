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
            className="logout-header-button"/>
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
