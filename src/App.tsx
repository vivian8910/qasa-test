import React from "react";
import Carousel from "./Carousel";


const image = [
  {
    imageUrl: "https://i.pinimg.com/564x/94/b0/a2/94b0a22760ade243dd0e2fb4fe3acf0c.jpg",
    altText: "Pikachu with hat"
  },
  {
    imageUrl: "https://i.pinimg.com/564x/fe/88/b5/fe88b556118ef8b5352331ce4d5da2cf.jpg",
    altText: "Pikachu and Evee"
  },
  {
    imageUrl: "https://i.pinimg.com/564x/3c/07/ee/3c07ee82742b951a1238ec4fe0a73ad4.jpg",
    altText: "Two lovely pikachus"
  },
  {
    imageUrl: "https://i.pinimg.com/564x/9e/56/cb/9e56cbfc761793360e04e3030148dab4.jpg",
    altText: "Pikachu in Marvel hero costumes"
  },
];

const App = () => {
  return (
    <div className="App">
      <Carousel image={image} />
    </div>
  );
}

export default App;
