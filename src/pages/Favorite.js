import Navbar from "../components/Navbar";
import FavoriteForm from "../components/FavoriteForm";
import { useFavorite } from "../context/FavoriteContext";

function Favorite() {

    const {
        favorites,
        removeFavorite,
        updateFavorite
    } = useFavorite();

    return (

        <>
            <Navbar />

            <div className="container mt-4">

                <h2 className="mb-4">
                    Favorite Character
                </h2>

                <div className="row">

                    {
                        favorites.map(item => (

                            <div
                                className="col-md-4 mb-4"
                                key={item.id}
                            >

                                <div className="card shadow">

                                    <img
                                        src={item.image}
                                        className="card-img-top"
                                        alt={item.name}
                                    />

                                    <div className="card-body">

                                        <h4>{item.name}</h4>

                                        <FavoriteForm
                                            character={item}
                                            onSave={(data)=>
                                                updateFavorite(item.id,data)
                                            }
                                        />

                                        <button
                                            className="btn btn-danger w-100 mt-3"
                                            onClick={() =>
                                                removeFavorite(item.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </>

    );
}

export default Favorite;