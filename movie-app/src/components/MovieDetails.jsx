import PropTypes from "prop-types";

function MovieDetails({
  title,
  titleLong,
  year,
  rating,
  runtime,
  genres,
  description,
  coverImage,
  backgroundImage,
  imdbCode,
  likeCount,
  language,
  torrents,
  youtubeCode,
  url,
}) {
  return (
    <div>
      <h1>{titleLong || title}</h1>
      <p>
        <strong>Year:</strong> {year} | <strong>Rating:</strong> {rating} |{" "}
        <strong>Runtime:</strong> {runtime} minutes
      </p>
      <p>
        <strong>Language:</strong> {language?.toUpperCase()} |{" "}
        <strong>Likes:</strong> {likeCount}
      </p>
      <p>
        <strong>IMDB:</strong>{" "}
        <a
          href={`https://www.imdb.com/title/${imdbCode}`}
          target="_blank"
          rel="noreferrer"
        >
          {imdbCode}
        </a>
      </p>
      <p>
        <strong>Official Page:</strong>{" "}
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      </p>
      {coverImage && <img src={coverImage} alt={title} />}
      {backgroundImage && (
        <div>
          <strong>Background image:</strong>
          <div>
            <img src={backgroundImage} alt={`${title} background`} />
          </div>
        </div>
      )}
      {description && (
        <div>
          <h2>Synopsis</h2>
          <p>{description}</p>
        </div>
      )}
      {genres?.length ? (
        <div>
          <h2>Genres</h2>
          <ul>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {youtubeCode && (
        <p>
          <strong>Trailer:</strong>{" "}
          <a
            href={`https://www.youtube.com/watch?v=${youtubeCode}`}
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </p>
      )}
      {torrents?.length ? (
        <div>
          <h2>Available Torrents</h2>
          <ul>
            {torrents.map((torrent) => (
              <li key={torrent.hash}>
                <p>
                  <strong>{torrent.quality}</strong> ({torrent.type}) -{" "}
                  {torrent.size}
                </p>
                <p>
                  Seeds: {torrent.seeds} | Peers: {torrent.peers} | Codec:{" "}
                  {torrent.video_codec}
                </p>
                <a href={torrent.url} target="_blank" rel="noreferrer">
                  Download
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

MovieDetails.propTypes = {
  title: PropTypes.string,
  titleLong: PropTypes.string,
  year: PropTypes.number,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  coverImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  imdbCode: PropTypes.string,
  likeCount: PropTypes.number,
  language: PropTypes.string,
  torrents: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      hash: PropTypes.string.isRequired,
      quality: PropTypes.string,
      type: PropTypes.string,
      size: PropTypes.string,
      seeds: PropTypes.number,
      peers: PropTypes.number,
      video_codec: PropTypes.string,
    })
  ),
  youtubeCode: PropTypes.string,
  url: PropTypes.string,
};

export default MovieDetails;
