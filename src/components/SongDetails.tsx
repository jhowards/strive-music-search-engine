// import { Card, Container, Spinner, Button, Col } from "react-bootstrap";
// import { useParams } from "react-router";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// interface Search {
//   id: number;
//   title: string;
// }

// const SongDetails = () => {
//   let song_id: any = useParams();
//   const [isLoading, setisLoading] = useState(false);
//   const [resultsArray, setresultsArray] = useState<Search[]>([]);

//   const getArray = async () => {
//     setisLoading(true);
//     try {
//       let response = await fetch(
//         `https://striveschool-api.herokuapp.com/api/deezer/track/${song_id.id}`
//       );
//       let songresponse = await response.json();
//       setresultsArray(songresponse);
//       setisLoading(false);
//     } catch (error) {
//       console.log(error);
//       setisLoading(false);
//     }
//   };

//   useEffect(() => {
//     getArray();
//   }, []);

//   return (
//     <Card className="containerborder">
//       <div className="position-relative">
//         <h1 className="mt-3">Music Search Engine</h1>
//         <Link to="/">
//           <Button className="backbutton">Back</Button>
//         </Link>
//       </div>
//       <hr style={{ backgroundColor: "black" }} />
//       <h2 className="mt-2">{resultsArray.title}</h2>

//       <h4 className="mt-5 mb-3">Song Details:</h4>
//       {isLoading ? (
//         <Spinner
//           variant="success"
//           animation="border"
//           role="status"
//           className="mx-auto mt-5"
//         ></Spinner>
//       ) : (
//         <Container className="jobcard" style={{ width: "35vw" }}>
//           {jobsArray.map((b) => (
//             <Col xs={12} key={b._id}>
//               <Card
//                 className="m-2 jobCard"
//                 style={{
//                   border: "3px solid black",
//                 }}
//               >
//                 <Card.Body className="d-flex">
//                   <Card.Title
//                     className="m-auto"
//                     style={{ color: "black", fontSize: "16px" }}
//                   >
//                     <h5 className="mb-0">{b.title}</h5>
//                     <small className="mb-2 mt-0">{b.category}</small>
//                     <p className="mt-2">{b.candidate_required_location}</p>
//                     <p className="mt-2 mb-0">
//                       Published: {b.publication_date.substring(0, 10)}
//                     </p>
//                   </Card.Title>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Container>
//       )}
//     </Card>
//   );
// };

// export default SongDetails;
