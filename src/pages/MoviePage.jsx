// import axios
import axios from "axios"

// import di router-dom per link
import { Link, useParams, useNavigate } from "react-router-dom"

// import state e effetc
import { useState, useEffect } from "react"

// import comp singola review
import ReviewBox from "../components/ReviewBox"

// creazione componente Header
const MoviePage = () => {

    // creiamo istanza di Navigate
    const redirect = useNavigate();

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
                if (error.status === 404) redirect('/404')
            })
    }

    // faccio partire la chiamata a primo montaggio comp
    useEffect(fecthMovie, []);

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
            <header id="movie" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img src={movie?.image} alt={movie?.title} />
                </div>
                <h1>{movie?.title}</h1>
                <h3 className="text-muted"><i>By {movie?.author}</i></h3>
                <p>{movie?.abstract}</p>
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
