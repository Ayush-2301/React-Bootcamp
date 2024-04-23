function Movie({ link, name, watched }) {
  return (
    <div>
      <img src={link} alt="" />
      <h2>{name}</h2>
      {watched && "Watched"}
      {!watched && "Not watched"}
    </div>
  );
}

export default Movie;
