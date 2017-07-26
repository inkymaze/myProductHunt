import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
  position        : 'fixed',
  top             : 0,
  left            : 0,
  right           : 0,
  bottom          : 0,

  background: 'hsla(0,0%,97%,.8)',

  zIndex          : 10
},
content : {
  position                   : 'absolute',
  height: "700px",
  width: "900px",
  top                        : '50%',
  left                       : '50%',
  "transform"                : 'translate(-50%, -50%)',
  padding                    : '36px',
  overflow                   : 'auto',
  WebkitOverflowScrolling    : 'touch',
  outline                    : 'none',

  zIndex          : 11,

  transition      : 'opacity 0.5s'
}
};

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,

    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {

    this.setState({modalIsOpen: true});
  }

  closeModal() {

    this.setState({modalIsOpen: false});
    this.props.history.push('/');
  }

  componentDidMount() {
    this.props.requestProduct(this.props.match.params.productId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.productId !== nextProps.match.params.productId)
     {
      this.props.requestProduct(nextProps.match.params.productId);
    }
  }

  render() {
    const { products } = this.props;

    if (!products) return null;

    return (
      <div>
      <button className="modalCloseButton"  onClick={this.closeModal}>X</button>
      <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Product Detail Modal">
        <div className="product-show">
          <section className="product-detail">
            <div className="product-show-info">
              <figure>
                <img src={products.image_url} alt={products.name} />
              </figure>
              <ul>
                <li className="product-show-name">{products.name}</li>
                <li className="product-show-desc">{products.desc}</li>
              </ul>
          </div>
          <div className="product-show-buttons">
            <a href={products.product_url}>
              <button className="getit-button" >GET IT</button>
            </a>
            <button className="upvote-button">
              Upvote
            </button>
              </div>
          </section>

        </div>
      </Modal>
    </div>
    );
  }
}

export default withRouter(ProductDetail);
