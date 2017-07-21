import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

const customStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    opacity               : '0',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class SessionForm extends React.Component {
   constructor(props) {
    super(props);
    this.state = {modalOpen: false, formType: "login"};
    this.handleClick = this.handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  handleClick(formType) {
    return () => {
      this.setState({modalOpen: true, formType: formType});
    };
  }

  onModalClose() {
    this.setState({modalOpen: false});
    this.props.clearErrors();
    customStyle.content.opacity = 0;
  }

  onModalOpen() {
    customStyle.content.opacity = 75;
  }

  render() {


    return (
      <Modal
        isOpen={ this.state.modalOpen }
        onAfterOpen = { this.onModalOpen }
        onRequestClose={ this.onModalClose }
        contentLabel="Modal"
        >
        <h1>Modal Content</h1>
          <p>Etc.</p>
      </Modal>

    );
  }
}

export default withRouter(SessionForm);
