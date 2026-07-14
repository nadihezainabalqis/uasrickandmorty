import { useEffect, useState } from "react";

import api from "../services/api";

import Navbar from "../components/Navbar";
import CharacterCard from "../components/CharacterCard";

function Category(){

    const [status,setStatus]=useState("alive");

    const [characters,setCharacters]=useState([]);

    useEffect(()=>{

        api.get(`/character/?status=${status}`)

        .then((res)=>{

            setCharacters(res.data.results);

        });

    },[status]);

    return(

        <>

        <Navbar/>

        <div className="container mt-4">

            <select

                className="form-select mb-4"

                value={status}

                onChange={(e)=>setStatus(e.target.value)}

            >

                <option value="alive">Alive</option>

                <option value="dead">Dead</option>

                <option value="unknown">Unknown</option>

            </select>

            <div className="row">

                {

                    characters.map((item)=>(

                        <CharacterCard

                            key={item.id}

                            character={item}

                        />

                    ))

                }

            </div>

        </div>

        </>

    )

}

export default Category;