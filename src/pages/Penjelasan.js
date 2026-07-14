import { useEffect,useState } from "react";

import { useParams } from "react-router-dom";

import api from "../services/api";

import Navbar from "../components/Navbar";

function Detail(){

    const {id}=useParams();

    const [character,setCharacter]=useState(null);

    useEffect(()=>{

        api.get(`/character/${id}`)

        .then((res)=>{

            setCharacter(res.data);

        });

    },[]);

    if(!character){

        return <h2>Loading...</h2>;

    }

    return(

        <>

        <Navbar/>

        <div className="container mt-5">

            <div className="card shadow">

                <div className="row">

                    <div className="col-md-4">

                        <img

                            src={character.image}

                            className="img-fluid"

                            alt={character.name}

                        />

                    </div>

                    <div className="col-md-8 p-4">

                        <h2>{character.name}</h2>

                        <p>Status : {character.status}</p>

                        <p>Species : {character.species}</p>

                        <p>Gender : {character.gender}</p>

                        <p>Origin : {character.origin.name}</p>

                        <p>Location : {character.location.name}</p>

                    </div>

                </div>

            </div>

        </div>

        </>

    );

}

export default Detail;