import React from "react";
import axios from "axios";
import Meme from "../components/Meme";
import "./Home.css";

class Home extends React.Component {
  state = {
    count: 0,
    isLoading: true,
    memes: [],
  };
  getMemes = async () => {
    const {
      data: {
        data: { memes },
      },
    } = await axios.get("https://api.imgflip.com/get_memes");
    this.setState({ memes, isLoading: false });
  };

  componentDidMount() {
    this.getMemes();
  }

  render() {
    const { isLoading, memes } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span>Loading......</span>
          </div>
        ) : (
          <div className="memes">
            {memes.map((meme) => {
              let b_key = parseInt(meme.id);
              return (
                <Meme
                  key={b_key}
                  id={b_key}
                  name={meme.name}
                  image={meme.url}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
