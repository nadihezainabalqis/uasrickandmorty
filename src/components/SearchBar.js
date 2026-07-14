function SearchBar({ value, onChange }) {

    return (

        <input
            type="text"
            className="form-control my-4"
            placeholder="Search character..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />

    );

}

export default SearchBar;