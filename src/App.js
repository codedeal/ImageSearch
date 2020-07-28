import React, { Component } from "react";
import ImageSearch from "./components/ImageSearch/ImageSearch";
import ImageList from "./components/imageList/ImageList";
const API_Key = "17653638-19b4739786a7825728a2b15c1";
const url =
  "https://pixabay.com/api/?key=17653638-19b4739786a7825728a2b15c1&q=yellow+flowers&image_type=photo";

class App extends Component {
  state = {
    images: [],
  };
  handleGetRequest = async (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.searchValue.value;
    console.log("hello comie");
    console.log(searchTerm);
    const url = `https://pixabay.com/api/?key=17653638-19b4739786a7825728a2b15c1&q=${searchTerm}+flowers&image_type=photo`;
    const request = await fetch(url);
    const response = await request.json();
    this.setState({ images: response.hits });
    console.log("hello images", this.state.images);
    this.state.images ? console.log("fired") : console.log("not fired");
  };

  // componentDidMount() {
  //   console.log("hello com");
  //   this.handleGetRequest();
  // }
  render() {
    return (
      <div>
        <ImageSearch handleGetRequest={this.handleGetRequest} />
        {/* {this.state.images.length > 0 &&
          this.state.images.map((image) => {
            return <p key={image.id}>{image.tags}</p>;
          })} */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
