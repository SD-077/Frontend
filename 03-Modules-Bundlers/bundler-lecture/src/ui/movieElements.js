export const createMovieCard = (movie) => {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-container");

  const movieTitle = document.createElement("h2");
  movieTitle.textContent = movie.title;

  const movieDescription = document.createElement("p");
  movieDescription.textContent = movie.description;

  const movieImage = document.createElement("img");
  movieImage.src = movie.imageUrl;
  movieImage.alt = `${movie.title} poster`;

  movieCard.appendChild(movieTitle);
  movieCard.appendChild(movieDescription);
  movieCard.appendChild(movieImage);

  return movieCard;
};

 export const movieListContainer = (movies) => {
    const container = document.createElement("div");
    container.classList.add("movie-list-container");

    movies.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        container.appendChild(movieCard);
    });

    return container;
};

// export { createMovieCard, movieListContainer }; // named export allows multiple exports from a single file
// export default createMovieCard; // to be use only once in the file