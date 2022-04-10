import React from "react";
import MenuItem from "../menu-item/MenuItem";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      section: [
        {
          title: "Hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
        },
        {
          title: "Jackets",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 2,
        },
        {
          title: "Sneakers",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 3,
        },
        {
          title: "Womens",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 4,
        },
        {
          title: "Mens",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ title, imageUrl, id }) => {
          return <MenuItem key={id} title={title} imageUrl={imageUrl} />;
        })}
      </div>
    );
  }
}

export default Directory;
