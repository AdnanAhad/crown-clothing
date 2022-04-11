import React from "react";
import MenuItem from "../menu-item/MenuItem";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      section: [
        {
          title: "Hats",
          imageUrl:
            "https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&w=800",
          id: 1,
        },
        {
          title: "Jackets",
          imageUrl:
            "https://images.pexels.com/photos/6800331/pexels-photo-6800331.jpeg?auto=compress&cs=tinysrgb&w=800",
          id: 2,
        },
        {
          title: "Sneakers",
          imageUrl:
            "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          id: 3,
        },
        {
          title: "Womens",
          imageUrl:
            "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          id: 4,
        },
        {
          title: "Mens",
          imageUrl:
            "https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&w=800",
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
