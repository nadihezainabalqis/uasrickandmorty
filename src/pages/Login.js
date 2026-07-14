import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!username || !password) {
            alert("Username dan Password wajib diisi!");
            return;
        }

        login(username);
        navigate("/home");
    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-body">

                            <h2 className="text-center mb-4">
                                Login
                            </h2>

                            <form onSubmit={handleSubmit}>

                                <input
                                    className="form-control mb-3"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e)=>setUsername(e.target.value)}
                                />

                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />

                                <button className="btn btn-primary w-100">
                                    Login
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;