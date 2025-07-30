import "../index.css"
function Cards({ id, img, title, country, googleMapsLink, dates, text }) {
  return (
    <>
      <div className="card">
        <div className="imgContainer">
          <img src={img.src} alt={img.alt} />
        </div>
        <div className="details">
          <div className="location">
            <i className="fa-solid fa-location-dot"></i>
            <p>{country}</p>
            <a href={googleMapsLink}>View on Google Map</a>
          </div>
          <h2>{title}</h2>
          <time datetime={dates}>{dates}</time>
          <p className="text">{text}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Cards;
