import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjA3ZWQ0YmUzZDAwMTU4NDVmZDciLCJpYXQiOjE2NjgxNjQ2ODAsImV4cCI6MTY2OTM3NDI4MH0.PJrHp_ME0y-gY2qVFhYjuFXEY6XrpjlrcjVQm07mnyo"
  }
};

const getAlbums = () => {
  const [song, setSongs] = useState([""]);
  const [album, setAlbum] = useState([]);

  const fetchAlbums = async (event) => {
    if (event.key === "Enter")
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/artist/queen`,
          options
        );
        if (response.ok) {
          const data = await response.json();
          setAlbum(data);
          setSongs("");
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
  };
  return (
    <Container>
      <Col>
        <Card></Card>
      </Col>
    </Container>
  );
};

export default getAlbums;
