import { Link } from "react-router-dom";
import { useFavorite } from "../context/FavoriteContext";

function CharacterCard({ character }) {

    const {

        addFavorite

    } = useFavorite();

    return (

        <div className="col-md-3 mb-4">

            <div className="card h-100 shadow">

                <img
                    src={character.image}
                    className="card-img-top"
                    alt={character.name}
                />

                <div className="card-body">

                    <h5>

                        {character.name}

                    </h5>

                    <p>

                        {character.species}

                    </p>

                    <p>

                        {character.status}

                    </p>

                    <Link
                        to={`/detail/${character.id}`}
                        className="btn btn-primary btn-sm me-2"
                    >
                        Detail
                    </Link>

                    <button
                        className="btn btn-success btn-sm"
                        onClick={() => addFavorite(character)}
                    >
                        Favorite
                    </button>

                </div>

            </div>

        </div>

    );

}

export default CharacterCard;