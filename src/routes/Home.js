import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  // async await 동기식으로 바꿔 axios로 api 끝나는거 기다림
  getMovies = async () => {
    // data.data.movies ES6버전
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating" // yts.lt api
    );
    // state 안에 넣기 setstate 해야 다시 랜더링됨 movies:axios.movies = movies
    this.setState({ movies, isLoading: false });
  };

  // 마운트 된 직후 해당 함수 호출
  componentDidMount() {
    this.getMovies();
  }
  render() {
    // this.state 를 생략하기위해 ES6
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {
          // isLoading이 true 면 Loading... false 면 movies.map() 실행
          isLoading ? (
            <div className="loader">
              <span className="loader_text">LOADING</span>
              <div className="loader_img"> </div>
            </div>
          ) : (
            <div className="movies">
              {movies.map((movie) => {
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    lgposter={movie.large_cover_image}
                    genres={movie.genres}
                  />
                );
              })}
            </div>
          )
        }
      </section>
    );
  }
}

export default Home;
