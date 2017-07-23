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
  }

  componentDidMount() {
    this.setState({ hunter_id: this.props.currentUser });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createProduct(this.state)
      .then(data => this.props.history.push(`/products/${data.id}`));
  }

  update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }

    handleCloudinary(e) {
      e.preventDefault();
      cloudinary.openUploadWidget(window.CLOUDINARY_OPTIONS, (error, results) => {
        if(error)
          console.log(error);
        else
          this.setState({ image_url: results[0].url });
      });
    }


  errors() {
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
        <div>
          <form id="addProductForm">
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
              placeholder="Product Description..."/>

            <button
              id="imageUploadButton"
              onClick={this.handleUpload}>
              Upload your logo here...
            </button>
            <button
              onClick={this.handleSubmit}>
              SUBMIT
            </button>
          </form>
        </div>
      );
    }
  }



export default withRouter(AddProductForm);
