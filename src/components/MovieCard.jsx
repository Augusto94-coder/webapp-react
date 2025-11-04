import { Link } from "react-router-dom"

const MovieCard = ({ movieProp }) => {

    const { id, title, director, abstract, image} = movieProp;
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={`Locandina di ${title}`} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Regia: {director}</h6>
        <p className="card-text">{abstract}</p>
        <Link to={`/movie/${id}`} className="btn btn-primary">
          Vedi dettagli
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;