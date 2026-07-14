import { useState } from "react";

function FavoriteForm({ character, onSave }) {

    const [nickname, setNickname] = useState(character.nickname || "");
    const [rating, setRating] = useState(character.rating || "");
    const [note, setNote] = useState(character.note || "");

    const submit = (e) => {

        e.preventDefault();

        if (!nickname.trim()) {
            alert("Nickname wajib diisi");
            return;
        }

        if (rating < 1 || rating > 5) {
            alert("Rating harus 1-5");
            return;
        }

        onSave({
            nickname,
            rating,
            note
        });
    };

    return (

        <form onSubmit={submit}>

            <input
                className="form-control mb-2"
                placeholder="Nickname"
                value={nickname}
                onChange={(e)=>setNickname(e.target.value)}
            />

            <input
                type="number"
                min="1"
                max="5"
                className="form-control mb-2"
                placeholder="Rating"
                value={rating}
                onChange={(e)=>setRating(e.target.value)}
            />

            <textarea
                className="form-control mb-3"
                rows="3"
                placeholder="Note"
                value={note}
                onChange={(e)=>setNote(e.target.value)}
            />

            <button className="btn btn-primary w-100">
                Save
            </button>

        </form>

    );
}

export default FavoriteForm;