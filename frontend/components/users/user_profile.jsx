import React from 'react';
import { withRouter } from 'react-router-dom';
import UserProfileIndexContainer from './user_profile_index_container';


class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }


  componentDidMount() {
    if (!this.props.user) {
      this.props.requestSingleUser(this.props.userId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId)
     {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }
  }



  //
  // render() {
  //   return (
  //
  //   );
  // }
}



extends default withRouter(UserProfile);
