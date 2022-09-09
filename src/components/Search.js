import React, { useState } from "react";
import "./search.css";
const Search = () => {
  const [image, setImage] = useState("");
  const ImageUrl = `https://source.unsplash.com/400x300/?${image}`;
  return (
    <>
      <div className="home-container">
        <div className="input-box">
          <input
            type="text"
            placeholder="search here.."
            value={image}
            onChange={(e) => setImage(e.target.value)}
            autoFocus
          />
        </div>
        <div className="image-box">
          {image !== "" ? <img src={ImageUrl} alt="searched-image" /> : null}
        </div>
      </div>
    </>
  );
};

export default Search;
