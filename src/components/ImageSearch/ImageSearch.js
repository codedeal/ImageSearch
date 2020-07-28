import React from "react";

function ImageSearch(props) {
  console.log(props);
  return (
    <div className="imageSearch">
      <form onSubmit={props.handleGetRequest} className="imageSearch__form">
        <input type="text" name="searchValue" placeholder="search for" />
        <button>Search</button>
      </form>
      <img src="" />
    </div>
  );
}

export default ImageSearch;
