import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { useState, FormEvent } from "react";
import SingleSearch from "./SingleSearch";

interface Search {
  id: number;
}

const MusicCards = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [resultsArray, setresultsArray] = useState<Search[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery === "") {
      alert("Please input a job title!");
    } else {
      await getArray();
      setisLoading(false);
    }
  };

  const getArray = async () => {
    setisLoading(true);
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`
      );
      let musicresponse = await response.json();
      if (musicresponse.length === 0) {
        alert("Nothing found with this title!");
      }

      setresultsArray(musicresponse.data);
      console.log(resultsArray);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Row>
            <Col>
              <Form id="searchQueryForm" onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicSearch" className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Song Title"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mr-3"
                    size="lg"
                  />
                  <Button type="submit" size="lg" variant="primary">
                    Search
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="d-flex">
            {isLoading ? (
              <Spinner
                variant="success"
                animation="border"
                role="status"
                className="mx-auto mt-5"
              ></Spinner>
            ) : (
              resultsArray.map((b) => (
                <Col xs={3} key={b.id}>
                  <SingleSearch search={b} id={b.id} />
                </Col>
              ))
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MusicCards;
