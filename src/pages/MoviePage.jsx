// import axios
import axios from "axios"

// import di router-dom per link
import { Link, useParams } from "react-router-dom"

// import state e effetc
import { useState, useEffect } from "react"

// import comp singola review
import ReviewBox from "../components/ReviewBox"

// creazione componente Header
const MoviePage = () => {


    // prepariamo var di stato libro
    const [movie, setMovie] = useState();

    // recuperiamo il parametro dinamico
    const { id } = useParams();

    // prepariamo funzione per la chiamata axios
    const fecthMovie = () => {
        axios.get('http://localhost:3000/api/movie/' + id)
            .then(response => { setMovie(response.data) })
            .catch(error => {
                console.log(error)

            })
    }

    // faccio partire la chiamata a primo montaggio comp
    useEffect(fecthMovie, [id]);

    // funzione di generazione istanze reviews
    const renderReviews = () => {
        return movie?.reviews.map(review => {
            return (
                <ReviewBox reviewProp={review} key={review.id} />
            )
        })
    }

    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3 text-center">
                <div className="d-flex justify-content-center mb-3">
                    <img
                        src={movie?.image}
                        alt={movie?.title}
                        className="img-fluid rounded shadow"
                        style={{
                            width: "100%",
                            maxWidth: "400px",   // limite massimo, per evitare immagini troppo grandi
                            height: "auto",       // mantiene il rapporto corretto
                            objectFit: "cover",   // ritaglia leggermente se serve
                        }}
                    />
                </div>

                <h1 className="fw-bold">{movie?.title}</h1>
                <h3 className="text-muted"><i>By {movie?.director}</i></h3>
                <p className="lead">{movie?.abstract}</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                    <h5>media voto: {movie?.average_vote}</h5>
                </header>
                {renderReviews()}
            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>

        </>

    )
}

export default MoviePage
