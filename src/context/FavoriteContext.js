import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {

    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );

    const save = (data) => {
        setFavorites(data);
        localStorage.setItem("favorites", JSON.stringify(data));
    };

    const addFavorite = (character) => {

        const exist = favorites.find(item => item.id === character.id);

        if (exist) {
            alert("Character sudah ada di Favorite");
            return;
        }

        save([
            ...favorites,
            {
                ...character,
                nickname: "",
                rating: "",
                note: ""
            }
        ]);
    };

    const updateFavorite = (id, data) => {

        const updated = favorites.map(item =>
            item.id === id ? { ...item, ...data } : item
        );

        save(updated);
    };

    const removeFavorite = (id) => {

        const updated = favorites.filter(item => item.id !== id);

        save(updated);
    };

    return (
        <FavoriteContext.Provider
            value={{
                favorites,
                addFavorite,
                updateFavorite,
                removeFavorite
            }}
        >
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorite = () => useContext(FavoriteContext);