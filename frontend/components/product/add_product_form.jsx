import React from 'react';
import { withRouter } from 'react-router-dom';


class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     name: "",
     image_url: "",
     product_URL: "",
     description: "",
     hunter_id: "",
     image_two_url: "",
     image_three_url: "",
     image_four_url: "",
     image_five_url: "",
   };
   this.handleClose = this.handleClose.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.update = this.update.bind(this);
   this.handleCloudinary = this.handleCloudinary.bind(this);
  }

  componentDidMount() {
    this.setState({ hunter_id: this.props.currentUser });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestCreateProduct(this.state)
      .then(data => this.props.history.push(`/products/${data.products.id}`));
  }

  update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }

    handleCloudinary(field) {
      return (e) => {
      e.preventDefault();
      cloudinary.openUploadWidget(window.CLOUDINARY_OPTIONS, function(error, results) {
          if(error) {
            console.log(error);
          } else {
            this.setState({ [field]: results[0].url });
          }
        }.bind(this));
      };
    }


    handleClose () {
      this.props.clearProductErrors();
        this.props.history.push('/');
    }

  renderErrors() {
    if (this.props.errors) {

      return (
        this.props.errors.map((error, i) => {
          return (
            <ul className="auth-errors">
            <li className="product-auth-errors" key={`error-${i}`}>{error}</li>
            </ul>);
        })
      );
    }
  }

  render () {
      return (
        <div className="outerProductForm">
          <button className="formCloseButton" onClick={this.handleClose}>X</button>
          <div className="productForm">

            <div className="productFormTitle">ADD YOUR HUNTED PRODUCT BELOW!</div>

            <input
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="Product Name"/>

            <input
              type="text"
              value={this.state.description}
              onChange={this.update("description")}
              placeholder="Product description..."/>

            <input
              type="text"
              value={this.state.product_URL}
              onChange={this.update("product_URL")}
              placeholder="Product URL"/>
            <div className="uploadLogoField">
              <li className='uploadLogoPrompt'>Upload your logo here:</li>
              <button
                className='uploadFormButton'
                id="imageUploadButton"
                onClick={this.handleCloudinary("image_url")}
                style={{backgroundImage:`url(${this.state.image_url})`}}
                value="Upload your logo here...">
              </button>
            </div>
            <div className="uploadImagesField">
              <li className='uploadImagesPrompt'>Upload your product images or GIFs here:</li>
              <div className="firstProductImages">
                <button
                  className="productImages"
                  onClick={this.handleCloudinary("image_two_url")}
                  style={{backgroundImage:`url(${this.state.image_two_url})`}}>
                </button>
                <button
                  className="productImages"
                  onClick={this.handleCloudinary("image_three_url")}
                  style={{backgroundImage:`url(${this.state.image_three_url})`}}>
                </button>
              </div>
              <div className="secondProductImages">
                <button
                  className="productImages"
                  onClick={this.handleCloudinary("image_four_url")}
                  style={{backgroundImage:`url(${this.state.image_four_url})`}}>
                </button>
                <button
                  className="productImages"
                  onClick={this.handleCloudinary("image_five_url")}
                  style={{backgroundImage:`url(${this.state.image_five_url})`}}>
                </button>
              </div>
            </div>


            <button className='productFormButtons'
              onClick={(e) => this.handleSubmit(e)}>
              SUBMIT
            </button>
            <div className="product-auth-cont">
              {this.renderErrors()}
            </div>

        </div>
        </div>

      );
    }
  }



export default withRouter(AddProductForm);
