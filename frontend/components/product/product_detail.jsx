import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import Slider from 'react-slick';
import CommentSectionContainer from '../comment/comment_section_container';

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
  width: "840px",
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
      modalIsOpen: true
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
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

  handleUpvote(e) {
    const { currentUserId, products, upvotedByUser } = this.props;
    e.preventDefault();

    if (currentUserId) {
      if (!upvotedByUser.includes(products.id)) {
        const vote = {
        upvote: {
          hunter_id: currentUserId,
          product_id: products.id
        }
      };
        this.props.requestUpvote(vote);
      } else {
        alert("You can only vote once!");
      }
    } else {
      alert("Only logged in users can vote");
    }
  }


  render() {
    const { products } = this.props;
    if (!products) return null;

    const sliderSettings = {
      autoplay: true,
      autoplaySpeed: 7000,
      speed: 550,
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let productImgs = [];

    [ products.image_two_url,
      products.image_three_url,
      products.image_four_url,
      products.image_five_url ].forEach((image, idx) => {
        if (image) {
          productImgs.push((
            <div
              className="single-carousel-img"
              key={idx}
              style={{ backgroundImage: `url(${image})`}}>
            </div>
          ));
        }
      });
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
              <figure className="product-logo">
                <img src={products.image_url} alt={products.name} />
              </figure>
              <ul>
                <li className="product-show-name">{products.name}</li>
                <li className="product-show-description">{products.description}</li>
              </ul>
          </div>
          <div className="product-show-buttons">
            <a href={products.product_URL}>
              <button className="getit-button" >GET IT</button>
            </a>
            <button className="upvote-button"
                    onClick={this.handleUpvote}>
              <img src="https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,co_rgb:4d6abf,e_blue:0,h_256/v1507835829/512px-Sort_up_font_awesome.svg_ykb2jq.png"
                    className="upvote-caret"/>
                  <div className='upvote-count'>{products.upvotes}</div>
            </button>
              </div>
          </section>
          <section className="showProductImages">
            <div className='whole-carousel'>
              <Slider {...sliderSettings}>
                { productImgs.map( img => img ) }
              </Slider>
            </div>
          </section>
          <section className='productHuntedInfo'>
              <li className="productHunterListItem">Hunter</li>
              <div className="hunterInfo">
                <Link className="productHunterLink" to={`/user/${products.hunter_id}`} >
                      <img src={products.hunter_image} className='hunterImage'/>
                  <div>
                    <li className="hunterInfoName">@{products.hunter}</li>
                  </div>
                </Link>
              </div>
          </section>
          <section className="productComments">
            <CommentSectionContainer productId={products.id} />
          </section>
        </div>
      </Modal>
    </div>
    );
  }
}

export default withRouter(ProductDetail);
