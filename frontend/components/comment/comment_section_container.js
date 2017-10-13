import { connect } from 'react-redux';
import { requestComments,
         requestCreateComment } from '../../actions/comment_actions';
import CommentSection from './comment_section';

const mapStateToProps = (state) => ({
  comments: state.comments.byId,
  currentUserId: state.session.currentUser
                  ? state.session.currentUser.id
                  : null,
  errors: state.comments.errors
});

const mapDispatchToProps = dispatch => ({
  requestComments: (productId) => dispatch(requestComments(productId)),
  requestCreateComment: (comment) => dispatch(requestCreateComment(comment)),
});
// 
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CommentSection);


const CommentSectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentSection);

export default CommentSectionContainer;
