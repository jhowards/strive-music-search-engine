import { Card, Container } from "react-bootstrap";
import MusicCards from "./MusicCards";

const MusicSearch = () => {
  return (
    <Container>
      <Card className="containerborder">
        <div className="">
          <h1 className="mt-3">Music Search Engine</h1>
        </div>
        <hr style={{ backgroundColor: "black" }} />
        <h3 className="mt-2">Search for a song:</h3>
        <Container className="d-flex">
          <MusicCards></MusicCards>
        </Container>
      </Card>
    </Container>
  );
};

export default MusicSearch;
