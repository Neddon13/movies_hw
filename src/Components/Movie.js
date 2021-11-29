const Movie = ({ name, url, children }) => {
    return (
        <>
            <p>{name}</p>
            <p>{url}</p>
            <p>{children}</p>
        </>
    )
};

export default Movie;