import React from "react";
import PropTypes from "prop-types";

function Disney({ name, image, rating }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={image} width="200" alt={name} />
      <hr />
    </div>
  );
}

Disney.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const princesses = [
  {
    id: 1,
    name: "Snow White",
    image:
      "https://ww.namu.la/s/18195ee0b4f098ef382915629de58528db7c11cf03f095d144800fe36ec5d6aab48db71bb0de5e94f0e2325a0ffc90d17b10160a2a3d000aca7d86bc79c4d5e64ce0e00a3433afafa4c36fbba62b849ada9334eb8412ffb0f5aa9d4dd19d8f86",
    rating: 5,
  },

  {
    id: 2,
    rating: 4,
    name: "Cinderella",
    image:
      "http://vignette4.wikia.nocookie.net/jadensadventures/images/4/44/Cinderella_Photo.jpg/revision/latest?cb=20130520043512",
  },
  {
    id: 3,
    rating: 3.4,
    name: "Aurora",
    image:
      "https://i.pinimg.com/originals/70/b4/da/70b4da72eabcdc95af525a26524250ba.jpg",
  },
  {
    id: 4,
    rating: 2.1,
    name: "Ariel",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81Gn7hPM-qL._AC_SY741_.jpg",
  },
  {
    id: 5,
    rating: 1.9,
    name: "Belle",
    image:
      "https://i.pinimg.com/originals/62/f2/fa/62f2fad471689b66a36c7e19b2663d48.jpg",
  },
];

function App() {
  return (
    <div>
      {princesses.map((princess) => (
        <Disney
          key={princess.id}
          name={princess.name}
          image={princess.image}
          rating={princess.rating}
        />
      ))}
    </div>
  );
}

export default App;
