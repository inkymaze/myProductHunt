import React from 'react';
import { withRouter } from 'react-router-dom';


class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     name: "",
     image_url: "",
     product_url: "",
     desc: "",
     hunter_id: ""
   };

   this.handleSubmit = this.handleSubmit.bind(this);
   this.update = this.update.bind(this);
   this.handleCloudinary = this.handleCloudinary.bind(this);
  }

  componentDidMount() {
    this.setState({ hunter_id: this.props.currentUser });
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
    this.props.requestCreateProduct(this.state)
      .then(data => this.props.history.push(`/products/${data.products.id}`));
  }

  update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }

    handleCloudinary(e) {
      e.preventDefault();
      cloudinary.openUploadWidget(window.CLOUDINARY_OPTIONS, (error, results) => {
        if(error) {
          console.log(error);
        } else {
          this.setState({ image_url: results[0].url });
        }
      });
    }

    handleClose () {
        this.props.history.push('/');
    }
  //
  renderErrors() {
    if (this.props.errors) {

      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }



  render () {

      return (
        <div className="outerProductForm">
          <button className="formCloseButton" onClick={this.handleClose.bind(this)}>X</button>
          <div className="productForm">

            <div className="productFormTitle">ADD YOUR HUNTED PRODUCT BELOW!</div>

            <input
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="Product Name"/>

            <input
              type="text"
              value={this.state.desc}
              onChange={this.update("desc")}
              placeholder="Product Description..."/>

            <input
              type="text"
              value={this.state.product_url}
              onChange={this.update("product_url")}
              placeholder="Product URL"/>

            <button
              className='productFormButtons'
              id="imageUploadButton"
              onClick={this.handleCloudinary}


                style={{backgroundImage:`url(${this.state.image_url})`}}>


              Upload your logo here...
            </button>

            <button className='productFormButtons'
              onClick={(e) => this.handleSubmit(e)}>
              SUBMIT
            </button>
            <div className="auth-errors">
              {this.renderErrors()}
              {console.log(this.props.errors)}
            </div>

        </div>
        </div>

      );
    }
  }



export default withRouter(AddProductForm);
