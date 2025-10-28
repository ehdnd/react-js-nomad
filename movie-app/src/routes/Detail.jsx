import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        const json = await response.json();
        setMovieDetails(json?.data?.movie ?? null);
      } catch (error) {
        console.error("Failed to fetch movie details", error);
        setMovieDetails(null);
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!movieDetails) {
    return <h1>Movie not found.</h1>;
  }

  return (
    <MovieDetails
      title={movieDetails.title}
      titleLong={movieDetails.title_long}
      year={movieDetails.year}
      rating={movieDetails.rating}
      runtime={movieDetails.runtime}
      genres={movieDetails.genres}
      description={
        movieDetails.description_full ||
        movieDetails.description_intro ||
        "No description available."
      }
      coverImage={movieDetails.large_cover_image}
      backgroundImage={movieDetails.background_image_original}
      imdbCode={movieDetails.imdb_code}
      likeCount={movieDetails.like_count}
      language={movieDetails.language}
      torrents={movieDetails.torrents}
      youtubeCode={movieDetails.yt_trailer_code}
      url={movieDetails.url}
    />
  );
}

export default Detail;
