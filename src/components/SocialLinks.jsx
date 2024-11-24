import React from "react";
import data from "../data";
function SocialLinks() {
  return (
    <div>
      {data.links.map((item) => (
        <a href={item.url} style={{ textDecoration: "none" }} target="_blank">
          {item.name} |{" "}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
