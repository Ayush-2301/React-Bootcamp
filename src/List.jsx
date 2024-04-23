import Movie from "./Movie";
import { data } from "./constant";
function List() {
  // const displayMovies = data.map((movie) => {
  //   return (
  //     <Movie
  //       key={movie.id}
  //       name={movie.data}
  //       link={movie.link}
  //       watched={movie.watched}
  //     />
  //   );
  function handleClick() {
    console.log("Button is Clicked");
  }
  return (
    <div>
      {/* {displayMovies} */}
      <button onClick={handleClick}>Click me </button>
    </div>
  );
}
export default List;
