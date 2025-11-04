import { Link } from "react-router-dom"

const MovieCard = ({ movieProp }) => {

    const { id, title, director, abstract, image} = movieProp;
  return (
    <div className="card h-100">
      <img
        src={image}
        className="card-img-top"
        alt={`Locandina di ${title}`}
        style={{
          height: "300px",          
          objectFit: "contain",       
          width: "100%",            
        }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Regia: {director}</h6>
        <p className="card-text flex-grow-1">{abstract}</p>
        <Link to={`/movie/${id}`} className="btn btn-primary mt-auto">
          Vedi dettagli
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;