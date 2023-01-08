import React, { useState, useEffect } from "react";
import "./Artists.css";

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjA3ZWQ0YmUzZDAwMTU4NDVmZDciLCJpYXQiOjE2NjgxNjQ2ODAsImV4cCI6MTY2OTM3NDI4MH0.PJrHp_ME0y-gY2qVFhYjuFXEY6XrpjlrcjVQm07mnyo"
  }
};

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/artist/queen",
          options
        );
        const data = await res.json();
        const artists = data.data;

        setArtists(artists);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="artists">
      {artists &&
        artists.map((artist) => (
          <div className="card" key={artist.id}>
            <img src={artist.picture_small} alt={artist.name} />
            <h1>test</h1>
            <h3>{artist.name}</h3>
            <p>{artist.name}</p>
          </div>
        ))}
    </div>
  );
};

export default Artists;
