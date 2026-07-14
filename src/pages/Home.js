import { useEffect, useState } from "react";

import api from "../services/api";


import Navbar from "../components/Navbar";
import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

function Home() {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [page, setPage] = useState(1);

    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {

        setLoading(true);

        api.get(`/character?page=${page}&name=${search}`)

           .then((res)=>{

    setCharacters(res.data.results);

    setTotalPages(Math.min(res.data.info.pages, 10));

    setLoading(false);

})
            .catch(()=>{

                setCharacters([]);

                setLoading(false);

            });

    },[page,search]);

    return (

        <>

        <Navbar/>

        <div className="container">

            <SearchBar
                value={search}
                onChange={setSearch}
            />

            {

                loading ?

                <Loading/>

                :

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

            }

            <Pagination

                page={page}

                totalPages={totalPages}

                setPage={setPage}

            />

        </div>

        </>

    );

}

export default Home;