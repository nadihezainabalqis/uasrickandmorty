import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link className="navbar-brand" to="/home">
                    Rick & Morty
                </Link>

                <button
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/home">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/category">
                                Category
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/favorite">
                                Favorite
                            </Link>
                        </li>

                        <li className="nav-item">
                            <button
                                onClick={handleLogout}
                                className="btn btn-danger ms-3"
                            >
                                Logout
                            </button>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;