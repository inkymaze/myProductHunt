import React from 'react';
import { withRouter } from 'react-router-dom';
// import UserProfileIndexContainer from './user_profile_index_container';
import { Link } from 'react-router-dom';


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

  render() {
    const { user } = this.props;

    if (!user) return null;


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
            <Link to={`/user/update/${user.id}`} style={{color:'black'}}>
              Edit
            </Link>
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
