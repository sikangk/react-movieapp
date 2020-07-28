import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="dtContainer">
          <img
            className="dtImg"
            src={location.state.lgposter}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="dtData">
            <h1 className="dtTitle">{location.state.title}</h1>

            <h2 className="dtYear">{location.state.year}</h2>

            <ul>
              {location.state.genres.map((genre, index) => {
                return (
                  <li key={index} className="dtGenres">
                    {genre}
                  </li>
                );
              })}
            </ul>
            <div className="dtSummary">
              <p>{location.state.summary}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
