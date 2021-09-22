import { Card, Container, Spinner, Button, ListGroup } from "react-bootstrap";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
  preview: string;
}

const SongDetails = () => {
  let song_id: any = useParams();
  const [isLoading, setisLoading] = useState(false);
  const [convertedDuration, setconvertedDuration] = useState("");
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
    preview: "",
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

  useEffect(() => {
    const convertSeconds = () => {
      let duration: number = resultsObject.duration;
      let minutes: string | number = Math.floor(duration / 60);
      let seconds: string | number = duration - minutes * 60;
      setconvertedDuration(
        minutes.toString() + " minutes and " + seconds.toString() + " seconds"
      );
    };
    convertSeconds(); // This is be executed when `loading` state changes
  }, [isLoading]);

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
            <ListGroup className="w-50 mt-2 mx-auto">
              <ListGroup.Item>
                {" "}
                <div>Artist: {resultsObject.artist.name}</div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div>Album: {resultsObject.album.title}</div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div>Release Date: {resultsObject.release_date}</div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div>Duration: {convertedDuration}</div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div>Rank: {resultsObject.rank}</div>
              </ListGroup.Item>
            </ListGroup>
            <h3 className="mt-3">Preview:</h3>

            <audio controls className="mx-auto w-50 mt-2">
              <source src={resultsObject.preview} type="audio/mpeg"></source>
              Your browser does not support the audio tag.
            </audio>
          </>
        )}
      </Card>
    </Container>
  );
};

export default SongDetails;
