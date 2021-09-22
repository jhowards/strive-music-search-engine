import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ComponentProps {
  id: number;
  search: any;
}

const SingleSearch = ({ search, id }: ComponentProps) => {
  return (
    <>
      <Link to={"song/" + search.id} className="nounderline">
        <Card
          className="m-2 jobCard "
          style={{
            height: "260px",
            border: "3px solid black",
          }}
        >
          <Card.Img
            variant="top"
            className="cardImage"
            src={search.album.cover_medium}
          />
          <Card.Body className="d-flex">
            <Card.Title
              className="m-auto"
              style={{ color: "black", fontSize: "16px" }}
            >
              <p className="mb-2">{search.title}</p>
              <small style={{ fontSize: "15px" }} className="mt-0">
                {search.artist.name}
              </small>
            </Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default SingleSearch;
