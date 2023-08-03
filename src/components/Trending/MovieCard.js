import { BiTime } from 'react-icons/bi';
const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.src} className="w-full " />
      <div className="p-4 text-white">
        <h4>{movie.title}</h4>
        <p>{movie.main}</p>
      </div>
      <div className="badge">
        <BiTime />
        {movie.runtime}
      </div>
    </div>
  );
};

export default MovieCard;
