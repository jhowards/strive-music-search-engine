import { Card, Container, Spinner, Button, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Signer } from "crypto";

interface Song {
  id: number;
  title: string;
  album: {
    cover_medium: string;
    title: string;
  };
  artist: {
    name: string;
  };
  release_date: string;
  rank: number;
  duration: number;
}

const SongDetails = () => {
  let song_id: any = useParams();
  const [isLoading, setisLoading] = useState(false);
  const [resultsObject, setresultsObject] = useState<Song>({
    id: 0,
    title: "",
    release_date: "",
    album: {
      cover_medium: "",
      title: "",
    },
    artist: {
      name: "",
    },
    rank: 0,
    duration: 0,
  });

  useEffect(() => {
    const getArray = async () => {
      setisLoading(true);
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/track/${song_id.id}`
        );
        if (response.ok) {
          let songresponse = await response.json();
          setresultsObject(songresponse);
          setisLoading(false);
        } else {
          console.log("error!");
        }
      } catch (error) {
        console.log(error);
        setisLoading(false);
      }
    };
    getArray();
  }, []);

  return (
    <Container>
      <Card className="containerborder">
        <div className="position-relative">
          <h1 className="mt-3">Music Search Engine</h1>
          <Link to="/">
            <Button className="backbutton">Back</Button>
          </Link>
        </div>
        <hr style={{ backgroundColor: "black" }} />

        {isLoading ? (
          <Spinner
            variant="success"
            animation="border"
            role="status"
            className="mx-auto mt-5"
          ></Spinner>
        ) : (
          <>
            <img
              className="songdetailsimage mx-auto mb-2"
              src={resultsObject.album.cover_medium}
              alt=""
            />
            <h2 className="mt-2">{resultsObject.title}</h2>
            <div>Artist: {resultsObject.artist.name}</div>
            <div>Album: {resultsObject.album.title}</div>
            <div>Release Date: {resultsObject.release_date}</div>
            <div>Duration: {resultsObject.duration}</div>
            <div>Rank: {resultsObject.rank}</div>
            <h3 className="mt-3">Preview:</h3>
          </>
        )}
      </Card>
    </Container>
  );
};

export default SongDetails;
