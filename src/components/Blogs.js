import React from "react";
import "../css/Blogs.css";
import blogs from "../images/blog.png";

export default function Blogs() {
  return (
    <div className="blogs-section">
      <div className="blogs-section-desciption">
        <div className="blogs-min-read">
          BLOG | 4 min read
          <div className="blogs-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="december-14-2021">December 14, 2021</div>
        </div>
      </div>
      <div className="blogs-images">
        <img src={blogs} alt="blogs" />
      </div>
    </div>
  );
}
