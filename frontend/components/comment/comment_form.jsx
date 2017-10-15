import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


handleSubmit(e) {
  e.preventDefault();
  const comment = {
    body : this.state.body,
    hunter_id : this.props.currentUserId,
    product_id : this.props.productId
  };

  this.props.requestCreateComment({comment})
    .then(() => this.setState({body: ""}));
}

update(field) {
  return e => this.setState({ [field]: e.target.value });
}

  render() {
    console.log('comment form props', this.props);
    return(
      <div>

      <form className='new-comment-form' onSubmit={this.handleSubmit.bind(this)}>
        <div className='comment-form-inner-cont'>

        <img src={this.props.currentUserImg} className='hunterImage'/>

        <textarea
          className="comment-input"
          type="text"
          placeholder="What do you think of this product..."
          onChange={this.update("body")}
          value={this.state.body}/>
        </div>
        <div className='actions_4493e'>
          <button type='submit' className='comment-submit-btn'>COMMENT</button>
        </div>
      </form>
      </div>
    );
  }
}

export default CommentForm;
