import axios from "axios";

// import state react
import { useState } from "react"

// creazione componente Header
const ReviewForm = ({ idProp, reloadReviews }) => {

    // settiamo valore iniziale dell'oggetto dei campi form
    const initialValues = {
        name: "",
        text: "",
        vote: ""
    }

    // settiamo stato del componente
    const [formData, setFormData] = useState(initialValues);

    // funzione di gestione valori dei campi
    const setFieldValue = e => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    // creiamo la url corretta dell'endpoint richiesta
    const apiUrl = `http://localhost:3000/api/movie/${idProp}/reviews`;

    // funzione invio dati
    const handleSubmit = e => {
        // preveniamo invio form
        e.preventDefault();
        // chiamata per store review
        axios.post(apiUrl, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                // settiamo il form a valori iniziali
                setFormData(initialValues)
                // richiamiamo la funzione di chiamata sul comp padre
                reloadReviews();
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="card">
            <header className="card-header">
                <h5>Add your review</h5>
            </header>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label>Review</label>
                        <textarea className="form-control" name="text" value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Voto</label>
                        <input name="vote" type="number" min="1" max="5" className="form-control" value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReviewForm